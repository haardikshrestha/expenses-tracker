import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseDate = new Date(2023, 9, 20);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.77;

  return (
    <div className='expense-item'>
      <div>{props.date.toString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
