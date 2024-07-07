import * as React from "react";
import { format } from "date-fns"; // Import date-fns
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Typewriter from "typewriter-effect";


const LOADING_DELAY_MS = 50;
const TYPEWRITER_DELAY_MS = 50;

const Message = React.forwardRef(
  ({ messenger, date, message, loading, typewriter }, ref) => {
    const formattedDate = format(new Date(date), "EEE, MMM do"); // Format the date
    const [myloading, setMyLoading] = useState(loading);

    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          setMyLoading(false);
        }, LOADING_DELAY_MS);
      }
    }, []);

    return (
      <>
        <div className="flex items-center mt-4">
          <div className="flex-none w-12">
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
              <img class="aspect-square h-full w-full" src="02.png" />
            </span>
          </div>
          <div className="flex-auto ">
            <div class="ml-2 space-y-1">
              <p class="text-sm font-medium leading-none">{messenger}</p>
              <p class="text-sm text-muted-foreground">{formattedDate}</p>
            </div>
          </div>
        </div>

        {myloading && (
          <div className="flex items-center mt-4">
            <div className="flex-none w-12"></div>
            <div className="flex-auto ">
              <Skeleton className="h-16 w-[250px]" />
            </div>
          </div>
        )}

        {!myloading && (
          <div className="flex items-center mt-4">
            <div className="flex-none w-12"></div>
            <div className="flex-auto ">
              <div class="ml-2 space-y-1">
                <p class="text-sm">
                  {typewriter ? (
                    <Typewriter
                      options={{
                      delay: TYPEWRITER_DELAY_MS,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(message).start();
                      }}
                    />
                  ) : (
                    message
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export { Message };
