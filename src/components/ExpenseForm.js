import React, {useEffect, useState} from "react"
import '../App.css'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [form, setForm] = useState({numDoc: '', eType: "Hospedaje", totalVal: '', providerRuc: ''})

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        console.log(form)
        // console.log(typeof e.target.name.value)
        e.preventDefault()
        props.onSubmit(form)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name, typeof value);
        setForm(oldForm => ({...oldForm, [name]: value}))
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }} >
                <div className="formItem">
                    <label className="itemLabel">
                        Número Documento
                    </label>
                    <input type="text" name="numDoc" value={form.numDoc} onChange={handleInputChange}></input>
                </div>

                <div className="formItem">
                    <label className="itemLabel">
                        Tipo de Gasto
                    </label>
                    <select name="eType" value={form.eType} onChange={handleInputChange}>
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
                    <input type="text" name="providerRuc" value={form.providerRuc} onChange={handleInputChange}></input>
                </div>
                <div className="formItem">
                    <label>
                        Valor
                    </label>
                    <input type="number" name="totalVal" value={form.totalVal} onChange={handleInputChange}></input>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>

    )

}

export default ExpenseForm;