
import './App.css';
import React, { useEffect, useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpenseCounter from './components/ExpenseCounter';
import ExpenseSearch from './components/ExpenseSearch';
import ExpenseForm from './components/ExpenseForm';
import expenseList from './mock'


function App (props) {

  const [expenses, setExpenses] = useState(expenseList);
  const [searchVal, setSearchVal] = useState('');

  useEffect(( ) => {
    // traer datos de la api
  }, [])

  const searchExpenses = expenses.filter(e =>
    e.eType.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
  );
  const expenseCount = searchExpenses.length;


  return (
      <div className='flex-box-container'>
        <header className="App-header">
          <ExpenseSearch
            searchValue={searchVal}
            onSearchValueChange={setSearchVal}
          ></ExpenseSearch>

          <ExpenseCounter count={expenseCount} />
        </header>

        <ul>
          {searchExpenses.map(e =>
            <ExpenseItem key={e.numDoc} {...e} />
          )}
        </ul>

        <ExpenseForm ></ExpenseForm>
      </div>
    );
}

export default App;
