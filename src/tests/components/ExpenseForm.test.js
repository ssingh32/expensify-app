import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render Expense Form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render Expense Form with Expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission ', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change ', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set note on textarea change ', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set amount on change ', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('Should set amount on invalid input change ', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').at(0).simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note,
    });
});

test('Should set new date on date change ', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar on focus change ', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});