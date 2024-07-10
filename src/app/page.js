"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  CalculatorIcon,
  ChartBarIcon,
  ScaleIcon,
  BeakerIcon,
  UserCircleIcon,
  PaperClipIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Header from "../components/ui/header";
import Breadcrumbs from "../components/ui/breadcrumbs";

const Home = () => {
  return (
    <>
      <Header className="" />
      <main className="max-w-screen-2xl mx-auto mt-8 min-h-screen">
        <Breadcrumbs />
        <div className="grid grid-cols-3 gap-8 mt-8">
          <Link href="/execute">
            <Card className="w-[400px] hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center">
                <div className="pl-6 pr-2">
                  <UserGroupIcon className="h-10 w-10" />
                </div>
                <CardHeader>
                  <CardTitle>Headcount Planning</CardTitle>
                  <CardDescription>
                    Plan your headcount for the next fiscal year.
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </Link>
          <Link href="/execute">
            <Card className="w-[400px] hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center">
                <div className="pl-6 pr-2">
                  <ArrowTrendingUpIcon className="h-10 w-10" />
                </div>
                <CardHeader>
                  <CardTitle>Revenue Growth Analysis</CardTitle>
                  <CardDescription>
                    Assess projected revenue growth using historical data
                    trends.
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </Link>
          <Link href="/execute">
            <Card className="w-[400px] hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center">
                <div className="pl-6 pr-2">
                  <CurrencyDollarIcon className="h-10 w-10" />
                </div>
                <CardHeader>
                  <CardTitle>Profitability Forecast</CardTitle>
                  <CardDescription>
                    Forecast future profitability based on current financial
                    strategies.
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </Link>
          <Link href="/execute">
            <Card className="w-[400px] hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center">
                <div className="pl-6 pr-2">
                  <CalculatorIcon className="h-10 w-10" />
                </div>
                <CardHeader>
                  <CardTitle>Investment Calculator</CardTitle>
                  <CardDescription>
                    Calculate the potential returns of different investment
                    opportunities.
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </Link>
          <Link href="/execute">
            <Card className="w-[400px] hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center">
                <div className="pl-6 pr-2">
                  <ChartBarIcon className="h-10 w-10" />
                </div>
                <CardHeader>
                  <CardTitle>Market Trend Analysis</CardTitle>
                  <CardDescription>
                    Analyze market trends to guide strategic business decisions.
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </Link>
          <Link href="/execute">
            <Card className="w-[400px] hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center">
                <div className="pl-6 pr-2">
                  <ScaleIcon className="h-10 w-10" />
                </div>
                <CardHeader>
                  <CardTitle>Risk Assessment Model</CardTitle>
                  <CardDescription>
                    Evaluate financial risks associated with new business
                    ventures.
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </Link>
        </div>
        <form
          className="mb-8 absolute bottom-0 left-0 right-0 mx-auto w-1/3 overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          x-chunk="dashboard-03-chunk-1"
        >
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
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

            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              Generate plan
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Home;
