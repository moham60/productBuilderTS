

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string,
}

export function ColorCircle({  color,...rest }: IProps) {
 
 
    return (
      <span {...rest}  key={color} style={{backgroundColor:color}} className={`w-5 h-5 cursor-pointer my-1  rounded-full`} />
  );
}