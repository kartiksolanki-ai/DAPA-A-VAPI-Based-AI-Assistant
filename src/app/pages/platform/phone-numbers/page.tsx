import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";
import { ImportPhonePopup } from "@/components/platform/phone/import-phone";

const PhoneNumber = () => {
  return (
    <div className="h-screen w-[100%] flex justify-center items-center">
      <Card className="w-2xl bg-transperant border-none">
        <CardContent className="pt-6">
          <div className="flex flex-col items-start flex-wrap space-y-4">
            <div className="rounded-full p-3">
              <Phone className="h-10 w-10" />
            </div>
            <h1 className="text-2xl weight-[400] tracking-tight">
              Phone Numbers
            </h1>
            <div className="space-y-2 text-muted-foreground md:w-[350px] text-[15px]">
              <p>
                Assistants are able to be connected to phone numbers for calls.
              </p>
              <p>
                You can import from Twilio, vonage, or by one directly from Vapi
                for use with your assistants.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                variant="outline"
                className="space-x-2 bg-teal-500 hover:bg-teal-400 h-[45px]"
              >
                <span>Buy Number</span>
                <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs bg-[#ffffff] text-teal-400">
                  #
                </span>
              </Button>
              <ImportPhonePopup />
              <Button variant="outline" className="h-[45px]">
                Documentation
              </Button>
            </div>
            <Alert
              variant="default"
              className="mt-6 w-2/3 bg-blue-950/50  text-blue-200 border-none flex items-center justify-center"
            >
              <TriangleAlert className="w-[15px] h-[15px]" />
              <AlertDescription className="flex items-center text-[11px] italic  mt-1">
                <span>Please add</span>
                <button className="h-auto ml-1 mr-1 text-[11px] text-blue-400 italic">
                  Card Details
                </button>
                <span>to Buy a Number</span>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneNumber;
