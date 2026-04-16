
import type React from "react";

interface Iinput extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input= ({...rest}:Iinput)=> {
    return (
      <input className={
                    'border w-full rounded-md   border-gray-300 shadow-lg  px-3 py-3 text-sm/6  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500  '      
        } 
            {...rest}
            
        />
  );
}
export default Input