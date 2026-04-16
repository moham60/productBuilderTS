
export const productInptsValidation = (productObj: {
     title: string,
    imageUrl: string,
    description:string,
    price: string,
}) =>  {

    const errors: {
        title: string,
        imageUrl: string,
        description: string,
        price: string,
    } =
    {
        title: "",
        imageUrl: "",
        description: "",
        price: ""
    };
        
    const { title, description, imageUrl, price } = productObj
    const validateImgUrl = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/.test(imageUrl)
    const notvalidPrice = isNaN(parseFloat(price));
    if (!title.trim() || title.length < 8 ) {
       errors.title="title must be at least 8 Characters"
    }
     if (!description.trim() || description.length < 20 || description.length > 200) {
       errors.description="description must be from 20 to 200 Characters"
    }
     if (!validateImgUrl) {
       errors.imageUrl="Valid Image URL Required"
    }
    
     if (notvalidPrice||!price.trim()) {
         errors.price = "Price Must be  Number and is Required";
    }
   
    
    
    
    
    return errors;
    
}



