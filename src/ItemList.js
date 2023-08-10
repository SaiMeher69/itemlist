import React from "react"

const itemList = ["Item 1", "Item 2", "Item 3", "Item 4"];

function ItemList() {
    return (
        <div>
            <h1>List of Items</h1>
            <ul>
                {itemList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList