// 测试app
// 测试点
// 已渲染图片
// 已渲染标题
// 已渲染描述
import React from 'react';
import App from '../components/App.js';
import { shallow, mount } from 'enzyme';
import { getUrl } from '../utils/index';

describe('AppView', ()=>{
	const wrapper = shallow(<App />);
	it('the picture should be render', ()=>{
		expect(wrapper.find('img').length).toBe(1);
	});
	it('the title should be render', ()=>{
		expect(wrapper.find('.App-title').length).toBe(1);
	});
	it('the desc should be render', ()=>{
		expect(wrapper.find('.App-intro').length).toBe(1);
	});
})