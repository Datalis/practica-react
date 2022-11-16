function ExpenseSearch(props) {


    return (
        <input 
            className="searchInput" 
            placeholder="Escriba aquí"
            value={props.searchValue}
            onChange={e => props.onSearchValueChange(e.target.value)}
            
        />
    )
}

export default ExpenseSearch;