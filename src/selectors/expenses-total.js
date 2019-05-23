import {expenses} from '../tests/fixtures/expenses';

const getExpensesTotal = (expenses) => {
    if (expenses.length === 0){
        return 0;
    }

    let expenseAmounts = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    expenses.map((element) => {
        expenseAmounts.push(element.amount);
    });

    return expenseAmounts.reduce(reducer);
};

export default getExpensesTotal;