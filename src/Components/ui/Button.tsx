import type { ButtonSize, ButtonVariant } from "../../Types";
import clsx from "clsx";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children: import("react").ReactNode,
    width?: "w-fit" | "w-full",
    variant?: ButtonVariant,
    size?: ButtonSize,
    isLoading?:boolean,
}
const baseStyle="inline-flex items-center justify-center  font-meduim  cursor-pointer rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
 const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary:"bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100          focus:ring-gray-400",
     outline: "border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

}
const buttonSize = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg:"text-lg px-6 py-3"
}
const Button = ({ children, className,isLoading=false, variant = "primary",size="md", width = "w-full", ...rest }: ButtonProps) => {
   
    return (
        <button className={clsx(
            baseStyle,
            variantStyles[variant],
            buttonSize[size],
            className,
            `${width}`
        )}
            {...rest}
        >
             {isLoading && (
        <span className="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full" />
      )}
            {children}
        </button>
  );
}
export default Button;