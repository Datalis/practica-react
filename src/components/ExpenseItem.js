import React from "react";
import "./ExpenseItem.css"

function ExpenseItem({numDoc, eType, totalVal, providerRuc}) {
    return (
        <li className="ExpenseItem">
            <div>
                <p>NumDoc: {numDoc}</p>
                <p>Tipo de Gasto: {eType}</p>
                <p>Valor: {totalVal}</p>
                <p>Proveedor: {providerRuc}</p>
            </div>
        </li>
    )
}

export default ExpenseItem;