import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  let title = props.title;

  function clickHandler(){
    title = "Updated!";
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>

      <button onClick = {clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;