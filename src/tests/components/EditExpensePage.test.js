import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]} />);
})

test('should render Edit Expense Page correctly', () => {   
    expect(wrapper).toMatchSnapshot();
});

test('should render Edit Expense', () => {   
    expect(wrapper).toMatchSnapshot();
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should render Remove Expense', () => {   
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(
        {id : expenses[2].id}
        );
});



