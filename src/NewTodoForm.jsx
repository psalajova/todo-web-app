import { useState } from "react"

export function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("")

    function handleFormSubmit(e) {
        e.preventDefault()

        if (newItem === "") { return }
        props.addTodoProp(newItem)


        setNewItem("") //clears the input after each submit
    }

    return <form onSubmit={handleFormSubmit} className="new-item-form" >
        <div className="form-row">
            {/* 
      htmlFor is to link the label to the input element.  
      when i click on it, it will focus on the input element on the website
      */}
            <label htmlFor="input-item">New Item (LABEL)</label>
            <input value={newItem} onChange={
                e => setNewItem(e.target.value)
            } type="text" id="input-item"></input>
            <button className="btn">Add item</button>
        </div>
    </form>
}