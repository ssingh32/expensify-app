import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveExpenseModal from '../components/RemoveExpenseModal';

export class EditExpensePage extends React.Component {  
  state = {
    modalOpen: false
  };

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  handleModalOption = () => {
      this.setState(() => ({modalOpen: !this.state.modalOpen}))
  }

  clearSelectedOption = () => {
    this.setState(() => ({modalOpen: false}))
  }

  render() {
    return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.handleModalOption}>Remove Expense</button>
        <RemoveExpenseModal 
        handleModalOption={this.handleModalOption} 
        clearSelectedOption={this.clearSelectedOption} 
        onRemove={this.onRemove} 
        modalOpen={this.state.modalOpen}
        />
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense :  (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense : (data) => dispatch(startRemoveExpense(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
