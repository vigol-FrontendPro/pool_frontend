import React, {FormEvent, useState} from "react"
import {useAppDispatch} from "../../../app/hooks"
import {addProduct} from "../productsSlice"

export default function CreateProduct() {
    const [title, setTitle] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const dispatch = useAppDispatch()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (validate()) {
            dispatch(addProduct({title, category, price: Number(price)}));
            clearInputs();
        }
    }

    function validate(): boolean {
        if (title.trim().length > 0 && Number(price) >= 0) {
            setMessage("");
            return true;
        } else {
            setMessage(
                title.trim().length === 0
                    ? "The title shouldn't be empty"
                    : "Price must be a positive number"
            );
            return false;
        }
    }

    function clearInputs() {
        setTitle("");
        setPrice("");
        setCategory("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {message && <span>{message}</span>}

                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) =>
                        setPrice(e.target.value)}
                />

                <button type="submit">Add product</button>
            </form>
            <ul>

            </ul>
        </div>
    );
}