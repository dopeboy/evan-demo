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
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import { Message } from "@/components/message";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDropzone } from "react-dropzone";
import Spreadsheet from "react-spreadsheet";
import {gl_data, gl_columnLabels, gl_rowLabels} from "./gl_data";
import {driver_data, driver_columnLabels, driver_rowLabels} from "./driver_data";
import {joined_data, joined_columnLabels, joined_rowLabels} from "./joined_data";



const initialMessages = [
  {
    messenger: "Evan",
    date: "2024-06-10",
    message:
      "sup! 👋<br/><br/>glad to help ya with some revenue analysis. can you tell me a little more about what you want to achieve?",
    typewriter: true,
    loading: true,
  },
  {
    messenger: "You",
    date: "2024-06-10",
    message: "<this gets filled in by user>",
    typewriter: false,
    loading: false,
  },
  {
    messenger: "Evan",
    date: "2024-06-10",
    message:
      "you work at Uber? yo let me get some coupons while we're here 🤞🤞<br/><br/>nah OK, I got you. when I think driver churn, I think two things: driver data and financials. the former is probably an export you can ask you from the Driver team at Uber. the latter is an export you can probably get yourself, sitting in Finance.<br/><br/>can you get me those exports? 📎",
    typewriter: true,
    loading: true,
  },
  {
    messenger: "You",
    date: "2024-06-10",
    message: "<this gets filled in by user>",
    typewriter: false,
    loading: false,
  },
  {
    messenger: "Evan",
    date: "2024-06-10",
    message:
      "you're speaking my language. I see two files, driver_export_062024.csv which is showing me drivers, which city they live in, and whether they've churned. I'm also seeing data that looks like it's from a general ledger, that shows different accounts.<br/><br/>let me craft a plan so we can talk through how I'm thinking about this. one sec...🤔",
    typewriter: true,
    loading: true,
  },
  {
    messenger: "You",
    date: "2024-06-10",
    message: "<this gets filled in by user>",
    typewriter: false,
    loading: false,
  },
  {
    messenger: "Evan",
    date: "2024-06-10",
    message: `my bad, was still thinking. OK I think I got a plan for us:<br/><br/>
    1. cleaned up and normalized the GL data. ↗️<br/>
    2. cleaned up and normalized the driver data. ↗️<br/>
    3. intelligently joined the two datasets. ↗️<br/>
    4. gave you a financial model in excel that you can start working your magic on.<br/>`,
    typewriter: true,
    loading: true,
  },
];

const Planner = () => {
  const [frame, setFrame] = useState(0);
  const [messages, setMessages] = useState(initialMessages);
  const [currentMessage, setCurrentMessage] = useState("");
  const [activeTab, setActiveTab] = useState("");

  const handleSubmit = () => {
    setActiveTab("gl");
    const updatedMessages = messages.map((msg, index) => {
      if (index === frame + 1) {
        return { ...msg, message: currentMessage };
      }
      return msg;
    });

    setMessages(updatedMessages);
    setFrame(frame + 2);
    setCurrentMessage("");
  };

  const onDrop = (acceptedFiles) => {
    setCurrentMessage("📎 driver_export_062024.csv\n📎 gl_export_062024.csv");
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Header className="" />
      <main className="max-w-screen-2xl mx-auto mt-8 h-full">
        <Breadcrumbs />
        <div className="flex mt-8 h-full gap-x-16">
          <div className="w-1/2">
            <div class="rounded-xl border bg-card text-card-foreground shadow col-span-3 p-6 h-4/6 overflow-scroll">
              <h3 class="font-semibold leading-none tracking-tight">Chat</h3>
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
            <div className="h-1/6">
              <div className="mt-4 mb-8 w-full overflow-hidden rounded-lg border shadow bg-background focus-within:ring-1 focus-within:ring-ring">
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                ></Textarea>
                <div className="flex items-center p-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          {...getRootProps({ className: "dropzone" })}
                          className=""
                        >
                          <input {...getInputProps()} />
                          <Button variant="ghost" size="icon">
                            <PaperClipIcon className="size-4" />
                            <span className="sr-only">Attach file</span>
                          </Button>
                        </div>
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
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div class="rounded-xl border bg-card text-sm text-card-foreground shadow col-span-3 p-6 h-4/6 overflow-scroll">
              <h3 class="font-semibold leading-none tracking-tight text-base">
                Explorer
              </h3>
              {1===2 || frame == 6 ? (
                <Tabs className="w-[400px] mt-4">
                  <TabsList>
                    <TabsTrigger value="gl">GL Data</TabsTrigger>
                    <TabsTrigger value="driver">Driver Data</TabsTrigger>
                    <TabsTrigger value="joined">Joined Data</TabsTrigger>
                  </TabsList>
                  <TabsContent value="gl">
                    <Spreadsheet
                      data={gl_data}
                      columnLabels={gl_columnLabels}
                    />
                  </TabsContent>
                  <TabsContent value="driver">
                    <Spreadsheet
                      data={driver_data}
                      columnLabels={driver_columnLabels}
                    />
                  </TabsContent>
                  <TabsContent value="joined">
                    <Spreadsheet
                      data={joined_data}
                      columnLabels={joined_columnLabels}
                    />
                  </TabsContent>
                </Tabs>
              ) : (
                <p className="mt-4"></p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Planner;
