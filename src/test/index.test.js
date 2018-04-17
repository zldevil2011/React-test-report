// 测试index
// 测试点
// UI渲染是否正常
// 链接点击跳转是否正确
import React from 'react'
import Index from '../components/Index.js';
import { shallow } from 'enzyme'

describe('IndexView', ()=>{
	const wrapper = shallow(<Index/>);
	it('the link should be render', ()=>{
		expect(wrapper.find('li').length).toBe(3)
	});
})