import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
})

test('should render AddExpense Page correctly', () => {   
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit on AddExpense Page correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startAddExpense).toHaveBeenCalledWith(expenses[1]);
});


