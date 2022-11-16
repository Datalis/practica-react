
import './App.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpenseCounter from './components/ExpenseCounter';
import ExpenseSearch from './components/ExpenseSearch';

const expenseList = [
  {
    eType: 'Alimentacion',
    totalVal: 10,
    providerRuc: '0917295057001'

  },
  {
    eType: 'Hospedaje',
    totalVal: 100,
    providerRuc: '1237729393001'

  },
  {
    eType: 'Hospedaje',
    totalVal: 100,
    providerRuc: '1237729393001'

  },
  {
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

  setSearchVal (v) {
    this.setState({ searchValue: v });
  }

  render() {

    const searchExpenses = this.state.expenses.filter(e =>
      e.eType.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
    );
    const expenseCount = searchExpenses.length;


    return (
      <div>
        {/* <header className="App-header">
          <p>Nombre: {user.name}</p>
          <p>Apellido: {user.last_name}</p>
          <p>Es mayor de edad {user.age > 18 ? 'Si': 'No'}</p>
        </header> */}

        <ExpenseSearch
          searchValue={this.state.searchValue}
          onSearchValueChange={this.setSearchVal}
        ></ExpenseSearch>

        <ExpenseCounter count={expenseCount} />
          <ul className='expenseList'>
            {searchExpenses.map(e =>
              <ExpenseItem {...e} />
            )}
          </ul>
      </div>
    );
  }
}

export default App;
