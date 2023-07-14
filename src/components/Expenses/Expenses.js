import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = ({items}) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
       {items.map((item) =>(
         <ExpenseItem
         title={item.title}
         amount={item.amount}
         date={item.date}
       />
       ))}
    </Card>
 );
}

export default Expenses