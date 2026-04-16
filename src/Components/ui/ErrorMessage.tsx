interface IErorrMessage {
  message:string
}

export function ErorrMessage({message}:IErorrMessage) {
    return (
        
     <>
     {message?<span className="text-red-700 text-sm font-semibold">{message}</span>:null}
     </>   
      
  );
}

export default ErorrMessage;