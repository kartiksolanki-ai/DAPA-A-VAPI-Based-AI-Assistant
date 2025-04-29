'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Download } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ImportPhonePopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="space-x-2 bg-teal-500 hover:bg-teal-400 h-[45px]">
          <span>Import</span>
          <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs bg-[#cdedf2] text-teal-400">+</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[375px] h-[550px] border-none">
        <DialogTitle className="sr-only">Import Phone Number</DialogTitle>
        <Card className="border-0 shadow-none bg-transparent">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Download className="h-5 w-5" />
              Import Phone Number
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Tabs defaultValue="twilio" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="twilio" className="data-[state=active]:text-teal-400">Twilio</TabsTrigger>
                <TabsTrigger value="vonage" className="data-[state=active]:text-teal-400">Vonage</TabsTrigger>
              </TabsList>
              
              <TabsContent value="twilio">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Twilio Phone Number</label>
                    <div className="flex gap-2">
                      <Select defaultValue="us">
                        <SelectTrigger className="w-[80px]">
                          <SelectValue>
                            <span className="flex items-center">
                              🇺🇸 US
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">
                            <span className="flex items-center">
                              🇺🇸 US
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Input 
                        placeholder="+14156021922"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Twilio Account SID</label>
                    <Input 
                      placeholder="Twilio Account SID"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Twilio Auth Token</label>
                    <Input 
                      type="password"
                      placeholder="Twilio Auth Token"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Label</label>
                    <Input 
                      placeholder="Label for Phone Number"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                      Import from Twilio
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="vonage">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Vonage Phone Number</label>
                    <div className="flex gap-2">
                      <Select defaultValue="us">
                        <SelectTrigger className="w-[80px]">
                          <SelectValue>
                            <span className="flex items-center">
                              🇺🇸 US
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">
                            <span className="flex items-center">
                              🇺🇸 US
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Input 
                        placeholder="+14156021922"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">API Key</label>
                    <Input 
                      placeholder="Enter API Key"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">API Secret</label>
                    <Input 
                      type="password"
                      placeholder="Enter API Secret"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Label</label>
                    <Input 
                      placeholder="Label for Phone Number"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                      Import from Vonage
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
