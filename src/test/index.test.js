// 测试index
// 测试点
// UI渲染是否正常
// 链接点击跳转是否正确
import React from 'react'
import Index from '../components/Index.js';
import { shallow, mount } from 'enzyme';
import { getUrl } from '../utils/index';

describe('IndexView', ()=>{
	const wrapper = shallow(<Index/>);
	it('the link should be render', ()=>{
		expect(wrapper.find('li').length).toBe(3);
	});
	it('the page should come to the right place if the link was clicked', ()=>{
		const linkList = wrapper.find('li');
		const mockEvent = {
	      key: 'Click',
	    }
		wrapper.find('li').forEach((item)=>{
	    	item.simulate('click', mockEvent);
	    });
	});
})