import './ExpenseForm.css';

function ExpenseForm(){
    return <form action="">
        <div className='new-expense__controls'>

            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={}/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.01" step="0.01"/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2024-01-01"/>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;