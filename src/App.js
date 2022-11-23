import './App.css';
import React, { useEffect, useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpenseCounter from './components/ExpenseCounter';
import ExpenseSearch from './components/ExpenseSearch';
import ExpenseForm from './components/ExpenseForm';
import expenseList from './mock'
import { addExpense } from './redux/actions/expenseActions';
import { connect } from 'react-redux'


function App (props) {

  console.log(props.expenses)

  const [expenses, setExpenses] = useState(expenseList);
  const [searchVal, setSearchVal] = useState('');

  const searchExpenses = expenses.filter(e =>
    e.eType.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  );
  const expenseCount = searchExpenses.length;

  const handleFormSubmit = formData => {
    // props.addExpense({'gola': 'jajja'})
    setExpenses([...expenses, {...formData}])
  }


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

        <ExpenseForm onSubmit={handleFormSubmit} ></ExpenseForm>
      </div>
    );
}

const mapState2Props = state => {
  return {
    expenses: state.expenseReducer.expenses
  }
}

const mapDispatch2Props = {
    addExpense
}

export default   connect(mapState2Props, mapDispatch2Props) (App) ;
