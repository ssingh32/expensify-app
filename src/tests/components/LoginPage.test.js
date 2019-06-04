import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import { shallow } from 'enzyme';


test('should render Login Page correctly', () => {   
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
    let startLogin = jest.fn();
    let startGitHubLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} startGitHubLogin={startGitHubLogin} />);
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();
})

test('Should call startGitHubLogin on button click', () => {
    let startLogin = jest.fn();
    let startGitHubLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} startGitHubLogin={startGitHubLogin} />);
    wrapper.find('button').at(1).simulate('click');
    expect(startGitHubLogin).toHaveBeenCalled();
})