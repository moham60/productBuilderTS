import {  Dialog, DialogPanel, DialogTitle} from "@headlessui/react";




interface IModal {
  title: string,
  isOpen: boolean,
  close: () => void,
  children: React.ReactNode,
  
}

const Modal=({title,isOpen,close,children}:IModal)=>{
   

    return (    
   <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed bg-[#302d2d50] inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex    min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className=" text-xl mb-3   ">
                {title}
                </DialogTitle>
              
          
                     
        
   
              {children}
            
             
              </DialogPanel>
             
          </div>
          </div>
          
        </Dialog>
        
    </>
  );
}
export default Modal