import React from "react";

function ExpenseItem({eType, totalVal, providerRuc}) {
    return (
        <li>
            <div>
                <p>Tipo de Gasto: {eType}</p>
                <p>Valor: {totalVal}</p>
                <p>Proveedor: {providerRuc}</p>
            </div>
        </li>
    )
}

export default ExpenseItem;