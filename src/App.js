
import './App.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpenseCounter from './components/ExpenseCounter';
import ExpenseSearch from './components/ExpenseSearch';
import ExpenseForm from './components/ExpenseForm';

const expenseList = [
  {
    numDoc: '99393',
    eType: 'Alimentacion',
    totalVal: 10,
    providerRuc: '0917295057001'

  },
  {
    numDoc: '344423',
    eType: 'Hospedaje',
    totalVal: 100,
    providerRuc: '1237729393001'

  },
  {
    numDoc: '48838',
    eType: 'Hospedaje',
    totalVal: 100,
    providerRuc: '1237729393001'

  },
  {
    numDoc: '12345',
    eType: 'Hospedaje',
    totalVal: 100,
    providerRuc: '1237729393001'

  },
]

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
