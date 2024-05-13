

export interface Product {
    id: number
    title: string
    price: number
    category: string
    images: string[]
}

export interface ProductsState {
    productsList: Product[],
    selectedProduct: Product | undefined
}

export interface ProductDTO {
    title: string
    price: number
    category: string
}