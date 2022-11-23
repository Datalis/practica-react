
import './App.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpenseCounter from './components/ExpenseCounter';
import ExpenseSearch from './components/ExpenseSearch';
import ExpenseForm from './components/ExpenseForm';
import expenseList from './mock'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      expenses: expenseList,
      searchValue: ''
    }
    this.setSearchVal = this.setSearchVal.bind(this);
  }

  componentDidMount() {
    localStorage.getItem('EXPENSES')
  }

  setSearchVal(v) {
    this.setState({ searchValue: v });
  }

  render() {

    const searchExpenses = this.state.expenses.filter(e =>
      e.eType.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
    );
    const expenseCount = searchExpenses.length;


    return (
      <div className='flex-box-container'>
        <header className="App-header">
          <ExpenseSearch
            searchValue={this.state.searchValue}
            onSearchValueChange={this.setSearchVal}
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
}

export default App;
