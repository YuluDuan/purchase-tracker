import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = ({items}) => {
  const [selected, setSelected] = useState("2020");

  return (
    <Card className='expenses'>
    <ExpensesFilter select={selected} onSelectChange={setSelected}/>
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