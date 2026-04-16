
import { useState } from 'react';
import type { IProduct } from '../Interfaces';
import { slicerTxt } from '../utils/function';
import Image from './Image';
import Button from './ui/Button';
import { ColorCircle } from './ui/ColorCircle';
import ConfirmationModel from './ui/ConfirmationModel';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  product: IProduct,
  openModel: () => void,
  setProductToEdit: (product: IProduct) => void,
  idx: number,
  setProductEditIdx: (index: number) => void
  handleDelete: (idx: number) => void
  setSelectedEditColors: (colors: string[]) => void
}

function ProductCard({ product, openModel, handleDelete, setProductToEdit, idx, setProductEditIdx,setSelectedEditColors }: IProps) {
  /*------states----- */
  const [isOpen, setIsOpen] = useState(false);
  const { imageUrl, title, description, category, colors, price } = product;
  /*-------handlers--------- */
  const onEdit = () => {
    openModel();
    setProductToEdit(product);
    setProductEditIdx(idx);
    console.log(product.colors);
    setSelectedEditColors(product.colors);
  }
 
  /**-----renders----- */
    const renderColors = colors.map((color) =>
      <ColorCircle
       
         key={color} color={color} />)


  return (
      <div className="bg-white/80  border border-gray-200  shadow-lg rounded-md p-4">
       
          <Image   imageUrl={imageUrl} alt={title} className="object-cover   object-center aspect-3/2 rounded-md" />
      <h3 className="text-gray-700 font-bold text-xl my-2">{slicerTxt(title,15)}</h3>
      <p className="text-gray-500">{slicerTxt(description,25) }</p>
          
         
          <div className="flex my-4 justify-between items-center">
        <span className="price">${price}</span>
            
              
              <div className="category  flex items-center gap-2">
                  
          <Image imageUrl={category.imageURL}
          
            alt={"category"} className="  w-10 h-10  rounded-full object-center " />
                 
         
                </div>
       
      </div>
      <div className="circleColors my-2 flex    items-center space-x-2 ">
        {renderColors}
      </div>
      
          <div className="btns flex   text-white my-4 items-center space-x-2">
        <Button  onClick={() => {
          onEdit();
        }}>
          Edit</Button>
        <Button onClick={()=>setIsOpen(true)}   variant="danger" >Destroy</Button>
      </div>
      <ConfirmationModel open={isOpen} setOpen={setIsOpen} handleDelete={handleDelete} idx={idx} />
    </div>
    
  )
}

export default ProductCard


