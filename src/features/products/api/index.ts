import type {Product, ProductDTO} from "../types"



interface ServerGetProductResponse {
    products: Product[]
    total: number
    skip: number
    limit: number
}

export async function fetchProducts(): Promise<ServerGetProductResponse> {
    const res = await fetch(`api/products`)
    return res.json()
}

export async function fetchProduct(id: number): Promise<Product> {
    const res = await fetch(`api/products/{id}`)
    return res.json()
}

interface ServerDeleteProductResponse extends Product {
    isDeleted: boolean
}

export async function fetchDeleteProduct(
    id: number,
): Promise<ServerDeleteProductResponse> {
    const res = await fetch(`api/products/{id}`, {
        method: "DELETE",
    })
    return res.json()
}

export async function fetchAddProduct(
    productDTO: ProductDTO,
): Promise<Product> {
    const res = await fetch(`api/products`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(productDTO),
    })
    return res.json()
}
