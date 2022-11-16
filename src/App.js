
import './App.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem';

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
    }
  }

  render() {

    return (
      <div className={this.state.v}>
        {/* <header className="App-header">
          <p>Nombre: {user.name}</p>
          <p>Apellido: {user.last_name}</p>
          <p>Es mayor de edad {user.age > 18 ? 'Si': 'No'}</p>
        </header> */}

        <ul>
          {this.state.expenses.map(e =>
            <ExpenseItem {...e} />
            )}
        </ul>
      </div>
    );
  }
}

export default App;
