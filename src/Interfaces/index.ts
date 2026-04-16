export interface IProduct{
    id?:string|undefined,
    title: string,
    imageUrl: string,
    description:string,
    price: string,
    colors: string[],
     category: {
        name: string,
        imageURL:string
    },
}

type nameInps = "title" | "description" | "price" | "imageUrl";
export interface IformInput{
    id: string,
    name:nameInps,
    label: string,
    type:string,
}
export interface Icategory{
    name: string,
    imageURL:string
}