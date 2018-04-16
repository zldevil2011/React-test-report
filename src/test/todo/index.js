// 测试点
// 组件是否正常渲染
// 当用户输入内容敲下回车键时，是否能正常的调用方法
// 创建完成后清除 Input 的值
import React from 'react'
import Todo from '../../routes/components/Todo'
import { shallow } from 'enzyme'

describe('AddTodoView',  () => {
	const wrapper = shallow(<Todo />);
	// case 1
	it('AddTodoView components should be render', () => {
		expect(wrapper.find('input').exists());
	})
})