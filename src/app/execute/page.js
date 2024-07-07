"use client";
import React, { useEffect } from "react";
import Header from "@/components/ui/header";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  PaperClipIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import { Message } from "@/components/message";

const initialMessages = [
  {
    messenger: "Evan",
    date: "2024-03-14",
    message:
      "sup! I'm Evan, evil cousin of Devin, and I'm here to help you. <br/><br/>can you tell me more about what you're trying to do?",
    typewriter: true,
    loading: true,
  },
  {
    messenger: "Me",
    date: "2024-03-14",
    message: "<this gets filled in by user>",
    typewriter: false,
    loading: false,
  },
  {
    messenger: "Evan",
    date: "2024-03-14",
    message: "this is what you need to do",
    typewriter: true,
    loading: true,
  },
];

const Planner = () => {
  const [frame, setFrame] = useState(0);
  const [messages, setMessages] = useState(initialMessages);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = () => {
    const updatedMessages = messages.map((msg, index) => {
      if (index === frame+1) {
        return { ...msg, message: currentMessage };
      }
      return msg;
    });

    setMessages(updatedMessages);
    setFrame(frame + 2);
  };

  return (
    <>
      <Header className="" />
      <main className="max-w-screen-2xl mx-auto mt-8">
        <Breadcrumbs />
        <div className="flex mt-8">
          <div className="w-1/2">
            <div class="rounded-xl border bg-card text-card-foreground shadow col-span-3 p-6">
              <div class="flex flex-col space-y-1.5">
                <h3 class="font-semibold leading-none tracking-tight">Chat</h3>
              </div>
              {messages.slice(0, frame + 1).map((message, index) => (
                <Message
                  key={index}
                  messenger={message.messenger}
                  date={message.date}
                  message={message.message}
                  loading={message.loading}
                  typewriter={message.typewriter}
                />
              ))}
            </div>

            <form
              className="mb-8 w-1/3 overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)} 
              />
              <div className="flex items-center p-3 pt-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <PaperClipIcon className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MicrophoneIcon className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button
                  type="button"
                  size="sm"
                  className="ml-auto gap-1.5"
                  onClick={handleSubmit}
                >
                  Generate plan
                </Button>
              </div>
            </form>
          </div>
          <div className="w-1/2">{/* Content for the second column */}</div>
        </div>
      </main>
    </>
  );
};

export default Planner;
