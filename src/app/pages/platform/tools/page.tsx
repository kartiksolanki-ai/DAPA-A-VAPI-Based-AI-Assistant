"use client"
import DialogBox from '@/components/platform/tools/dialogBox'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Tools = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div style={{ backgroundColor: "#1d1e22" }} className='flex flex-col  h-full '>

      <div className="flex flex-col w-full justify-center items-center my-auto " >
        <div className='w-[300px] text-muted-foreground'>
          <div className=" justify-left flex gap-2  flex-col ">
            <img src="/Tools.png" className='w-20 h-20' alt="" />
            <span className="text-white">
              Tools</span></div>
          <p className="text-md text-text/40 mb-4">Tools are functions you make that can be utilized by your assistants in calls.</p>
          <p className="text-md text-text/40" >You can connect external automation tools like Make, GoHighLevel, or create custom tools for assistants to use.</p>
          <div className="flex gap-4 my-2">
            <Button 
              className='text-muted-foreground hover:text-white font-bold transition-all duration-150 ease-in-out group rounded-lg bg-primary/80 hover:saturate-[1.3] hover:bg-primary shadow-sm hover:shadow-md hover:shadow-primary/30'
              onClick={() => setIsOpen(true)}
            >
              New Tool +
            </Button>
            <Button className='bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '>
              Documentation
            </Button>
          </div>
        </div>
      </div>
      

    </div>
    <DialogBox  setIsOpen={setIsOpen} isOpen={isOpen} />
    {/* <DialogBox /> */}

    {/* <Sheet open={isOpen} onOpenChange={setIsOpen} key="left">
    <SheetContent side={"left"} className=''>
      <SheetHeader className='bg-secondary/50  py-2 roundedlg'>
        <SheetTitle className='flex gap-2 items-center'>  
        <img src="/Tools.png" className='w-6 h-6' alt="" />
          Create a Tool</SheetTitle>
        
      </SheetHeader>
      <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
    </SheetContent>
  </Sheet> */}
  </>
  )
}

export default Tools