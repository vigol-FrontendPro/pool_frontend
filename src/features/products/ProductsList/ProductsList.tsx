import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../../app/hooks"
import {deleteProduct, getProducts, selectProducts} from "../productsSlice"
import {Link} from "react-router-dom"
import CreateProduct from "../CreateProduct/CreateProduct"

export default function ProductsList() {
    const products = useAppSelector(selectProducts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <CreateProduct/>
            {Array.isArray(products) && products.length > 0 ? (
                <ul>
                    {products.map(p => (
                        <li key={p.id}>
                            <Link to={String(p.id)}>{p.title}</Link>
                            <button type="button" onClick={() => {
                                dispatch(deleteProduct(p.id))
                            }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка продуктов...</p>
            )}
        </>
    )
}