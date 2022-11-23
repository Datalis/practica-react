import React from "react"
import '../App.css'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const handleSubmit = (e) => {
        console.log(e.target.name.value)
        console.log(typeof e.target.name.value)
        e.preventDefault()
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }} >
                <div className="formItem">
                    <label className="itemLabel">
                        Número Documento
                    </label>
                    <input type="number" name="name"></input>
                </div>

                <div className="formItem">
                    <label>
                        Número Documento
                    </label>
                    <select>
                        <option value="Alimentación">Alimentación</option>
                        <option value="Hospedaje">Lime</option>
                        <option value="Peajes">Coconut</option>
                        <option value="Ocio">Mango</option>
                    </select>
                </div>
                <div className="formItem">
                    <label>
                        Proveedor
                    </label>
                    <input type="number" name="name"></input>
                </div>
                <div className="formItem">
                    <label>
                        Valor
                    </label>
                    <input type="number" name="name"></input>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>

    )

}

export default ExpenseForm;