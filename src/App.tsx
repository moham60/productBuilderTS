import { lazy, useEffect, useState, type ChangeEvent, type FormEvent,   } from 'react'
import './App.css'
import { v4 as uuid } from "uuid";
const ProductCard=lazy(()=>import("./Components/ProductCard"))
import { formInputsList, productList } from './data/productsList'
import {   type IProduct } from './Interfaces'
import Modal from './Components/ui/Modal'
import Button from './Components/ui/Button'
import { toast, ToastContainer } from 'react-toastify';

import Input from './Components/ui/Input';
import { productInptsValidation } from './validation'
import { ErorrMessage } from './Components/ui/ErrorMessage'
import { colors } from './data/colors'
import { ColorCircle } from './Components/ui/ColorCircle'
import Select from './Components/ui/Select';
import { categories } from './data/categories';


 
function App() {
  const defaultProductObj = {
   id:"",
    title: "",
    imageUrl: "",
    description:"",
    price: "",
    colors: [],
     category: {
        name: "",
        imageURL:""
    },
 }
  /*---State-----*/
  const [isOpen,setIsOpen]=useState(false);
  const [product, setproduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [isOpenEdit, setIsOpenEditModel] = useState(false);
  const [errors, seterrors] = useState({
    title: "",
    imageUrl: "",
    description:"",
    price: ""
  });
  const [selectedCategory, setselectedCategory] = useState(categories[0]);
  const [selectedCategoryEdit, setselectedCategoryEdit] = useState(productToEdit.category||categories[0]);
 
  const [selectedColors, setSelectedColors] = useState<string[]>([
  ])
  const [selectedEditColors, setSelectedEditColors] = useState<string[]>([
  ])
  
  
 const STORAGE_KEY = "storedProducts";

const [allProducts, setAllProducts] = useState<IProduct[]>(() => {
  if (typeof window === "undefined") return productList; // عشان Next
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return productList;

  try {
    return JSON.parse(stored) as IProduct[];
  } catch {
    return productList;
  }
});
  useEffect(() => {
  localStorage.setItem("storedProducts", JSON.stringify(allProducts));
}, [allProducts]);
  useEffect(() => {
  if (productToEdit.category.name) {
    setselectedCategoryEdit(productToEdit.category);
  }
 }, [productToEdit])
  /*-----Handlers----*/
  const openModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    
  };
  const openEditModal = () => {
    setIsOpenEditModel(true);
  };
  const handleEditClose = () => {
    setIsOpenEditModel(false);
    
  };
  /**Handle change inpts */
 const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
   const { value, name } = event.target;
       setproduct(
     {
       ...product,
        [name]:value
     }
   )
   
   
   seterrors(
     {
       ...errors,
       [name]:''
     }
   )
  }
 const handleChangeEditProduct = (event:ChangeEvent<HTMLInputElement>):void => {
   const { value, name } = event.target;
       setProductToEdit(
     {
       ...productToEdit,
        [name]:value
     }
   )
   
   
   seterrors(
     {
       ...errors,
       [name]:''
     }
   )
  }
  const handleSearch = (value: string):void => {
    let newProducts: IProduct[] = [...productList];
    if (value !== "") {
      newProducts = productList.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));
      setAllProducts(newProducts)
    }
    else {
      setAllProducts(productList);
    }

  }

  /*--handle Add Submit ----*/
  const handleSubmit=(event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    const { title, description,price, imageUrl } = product;
    const errors = productInptsValidation({
      title,
      description,
      price,
      imageUrl,
    })
    const hasErrormsg = Object.values(errors).some(value => value == '') && Object.values(errors).every(value => value == '');
    if (!hasErrormsg) {
      seterrors(errors)
      return;
    }

    
   /*add New Products*/
    setAllProducts((prev) =>
      [{ ...product, id: uuid(), colors: selectedColors,category: selectedCategory}, ...prev]);
    setproduct(defaultProductObj);
    setSelectedColors([]);
    setselectedCategory(categories[0]);
    handleClose();
    toast.success("Product is added Successfully");
  }
   /*--handle edit Submit ----*/
 const handleEditSubmit=(event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
  const { title, description,price, imageUrl } = productToEdit;
    const errors = productInptsValidation({
      title,
      description,
      price,
      imageUrl,
    })
    const hasErrormsg = Object.values(errors).some(value => value == '') && Object.values(errors).every(value => value == '');
    if (!hasErrormsg) {
      seterrors(errors);
      return;
    }

     
   /*Edit  Products*/
   const newProducts = [...allProducts];
   console.log(productToEdit);
   newProducts[productToEditIdx] = {...productToEdit,category: selectedCategoryEdit, colors: selectedEditColors.length > 0 ? selectedEditColors : productToEdit.colors};
    setAllProducts(newProducts);
    handleEditClose();
   toast.success("Product has been edited Successfully");
  };
    
  /* ---Delete Product----*/
  const handleDelete = (idx: number)=>{
    const newProducts = [...allProducts];
    newProducts.splice(idx, 1);
    setAllProducts(newProducts);
    toast.success("Product has been deleted Successfully");
  }
  
  /*----------End of Handlers--------*/
  
 
  /*----------Render--------*/

    const renderFormInputs=  formInputsList.map(inpt => (
                      <div key={inpt.id} className='mb-2 text-gray-700 font-medium text-sm'>
                    <label htmlFor={inpt.id} >{ inpt.label}</label>
        <Input id={inpt.id}
         value={product[inpt.name]}
          name={inpt.name} type={inpt.type} onChange={handleChange} />
        <ErorrMessage message={errors[inpt.name]} />
        
       
            </div>
    ))
  const renderEditProductInputs=  formInputsList.map(inpt => (
                <div key={inpt.id} className='mb-2 text-gray-700 font-medium text-sm'>
                    <label htmlFor={inpt.id} >{ inpt.label}</label>
        <Input id={inpt.id}
         value={productToEdit[inpt.name]}
          name={inpt.name} type={inpt.type} onChange={handleChangeEditProduct} />
        <ErorrMessage message={errors[inpt.name]} />
        
       
            </div>
    ))
  const renderProducts = allProducts.map((product,idx) =>
    <ProductCard
      openModel={openEditModal}
      setProductToEdit={setProductToEdit}
      key={product.id}
      product={product}
      setProductEditIdx={setProductToEditIdx}
      handleDelete={handleDelete}
      idx={idx}
      setSelectedEditColors={setSelectedEditColors}
   />);
  
  const renderColors = colors.map((color) =>
    <ColorCircle
      onClick={() => {
        if (selectedColors.includes(color)) {
          setSelectedColors((prev) => prev.filter(el => el !== color));
          return;
        }
        setSelectedColors((prev)=>[...prev,color])
      }} key={color} color={color} />)
  const renderEditProductColors = colors.map((color, index) => 
    
    <ColorCircle onClick={() => {
      if (selectedEditColors.includes(color)) {
        setSelectedEditColors((prev) => prev.filter(el => el !== color));

        return;
      }
      setSelectedEditColors((prev) => [...prev, color])
      
      
      }} key={`${color}-${index}`} color={color} />
    
    
  )

return (
    <>
     <main className="app container   mx-auto  relative px-4 sm:px-6  py-8">
    
      <div className="flex items-center justify-between ">
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Latest <span className='text-indigo-800'>Products</span></h1>
        <div>
                <Button
                  width="w-fit"
                  onClick={openModal}
                className=" bg-blue-700/90 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white hover:bg-blue-800/90"
              >
                Add  Product
          </Button>
           {/** Add New Product Model */}
          <Modal title={"Add New Product"} close={handleClose} isOpen={isOpen} >
            <form onSubmit={handleSubmit} className='  space-y-3'>
              {renderFormInputs}

             <Select setSelectedcategory={setselectedCategory} category={selectedCategory} />
               <div className="circleColors my-2 flex    items-center space-x-2 ">
                {renderColors}
              </div>
              {selectedColors.length > 0 && <div className="flex items-center gap-2 flex-wrap">
                {selectedColors.map(color => <span key={color} style={{ backgroundColor: color }}
                  className={`w-fit  p-0.5 rounded-md`} >
                  {color}
                    </span>)}
                </div>
              }
              
                 <div className=" flex items-center  space-x-3">
                      <Button
                width="w-full"
                 type='submit'
                  >
                          Submit
                      </Button>
                <Button
                  type='button'
                         onClick={handleClose}
                                    width="w-full"
                  className="bg-gray-400  hover:bg-gray-500">
                      Cancel
                        </Button>
                  </div>
            </form>
                       
          </Modal>

             {/** Edit  Product Model */}
          <Modal title={"Edit The Product"} close={handleEditClose} isOpen={isOpenEdit} >
            <form onSubmit={handleEditSubmit} className='space-y-3'>
              {renderEditProductInputs}
             <div className="circleColors my-2 flex    items-center space-x-2 ">
                {renderEditProductColors}
                
              </div>
              <div className="flex flex-wrap items-center gap-2 colors">
                {selectedEditColors.length > 0 && selectedEditColors.map(color =>
                  <span key={color} style={{ backgroundColor: color }}
                    className="w-fit p-0.5 rounded-md" >
                    {color}
                  </span>
                )}
              </div>
              
              
               
        <Select setSelectedcategory={setselectedCategoryEdit} category={selectedCategoryEdit} />
                 <div className=" flex items-center  space-x-3">
                      <Button
                width="w-full"
                 
                  >
                          Submit
                      </Button>
                <Button
                  type='button'
                         onClick={handleEditClose}
                                    width="w-full"
                  className="bg-gray-400  hover:bg-gray-500">
                      Cancel
                        </Button>
                  </div>
            </form>
                       
          </Modal>
          
        </div>
          
      </div>
      <div className="searchInpt">
        <input onChange={(e) => {
          handleSearch(e.target.value);

        }}
          type="text" placeholder='search by product title' className="w-full rounded border my-4 text-gray-500 border-gray-300 outline-0 focus:border-blue-500 p-3 " />
      </div>
   <div className="grid  gap-5   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
     {renderProducts}
      </div>
      {allProducts.length === 0 && <p className='text-center text-gray-500 mt-10'>No products found</p>}
    </main>
    <ToastContainer/>
    </>
   
 
  )
}

export default App
