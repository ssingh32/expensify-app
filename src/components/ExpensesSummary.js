import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal, nonVisibleExpenses}) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const nonVisibleExpenseWord = nonVisibleExpenses <= 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
   return (
    <div className={"page-header"}>
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
            {nonVisibleExpenses > 0 ? 
                <p className="page-header__title">Not showing <span>{nonVisibleExpenses}</span> {nonVisibleExpenseWord} because of filters</p> 
                :
                <p className="page-header__title">Showing all {expenseWord} no filters in place</p>
            }
            <div className="page-header__actions">
                <Link className="button" to="create">Add Expense</Link>
            </div>
        </div>
    </div>
   );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount : visibleExpenses.length,
        expensesTotal : selectExpensesTotal(visibleExpenses),
        nonVisibleExpenses: state.expenses.length - visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);