
type IProps = {
    imageUrl: string,
    alt: string,
  className: string,
    width?: string,
  height?: string,
    
}

function Image({imageUrl,alt,className,width,height}: IProps) {
  return (
    <img loading="lazy" src={imageUrl} 
      style={{ width: width, height: height }} alt={alt} className={className} />
  )
}

export default Image