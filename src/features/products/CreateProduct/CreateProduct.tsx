import type { FormEvent } from "react"
import React, { useState } from "react"
import { useAppDispatch } from "../../../app/hooks"
import { addProduct } from "../productsSlice"

export default function CreateProduct() {
  const [title, setTitle] = useState<string>("")
  const [price, setPrice] = useState<number>(0)
  const [category, setCategory] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const dispatch = useAppDispatch()
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // console.log(title, description, price)
    if (validate()) {
      dispatch(addProduct({ title, category, price }))
      clearInputs()
    }
  }

  function validate(): boolean {
    if (title.trim().length > 0) {
      setMessage("")
      return true
    } else {
      setMessage("The title shouldn't be empty")
      return false
    }
  }

  function clearInputs() {
    setTitle("")
    setPrice(0)
    setCategory("")
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        {message ? <span>{message}</span> : null}

        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <input
          type="number"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />

        <button type="submit">Add product</button>
      </form>
    </div>
  )
}
