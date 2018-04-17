// 测试点
// 组件是否正常渲染
// 当用户输入内容敲下回车键时，是否能正常的调用方法
// 创建完成后清除 Input 的值
import React from 'react'
import Todo from './components/Todo.js'
import { shallow } from 'enzyme'

const setup = () => {
  const props = {
    text: 'test-String',
    onClick: jest.fn()
  }
  const wrapper = shallow(<Todo {...props} />)
  return {
    props,
    wrapper
  }
}

describe('AddTodoView',  () => {
  	const { props, wrapper } = setup()
	// case 1
	it('AddTodoView components should be render', () => {
		expect(wrapper.find('input').exists());
	})
	it('When the Enter key was pressed, onClick shoule be called', () => {
		const mockEvent = {
			keyCode: 13,
			target:{
				value: 'testString'
			}
		}
		wrapper.find('input').simulate('keyup', mockEvent);
		expect(props.onClick).toBeCalled();
	})
	it('when the enter was presses, the value of input should be empty', ()=> {
	  const mockEvent = {
	    keyCode: 13,
	    target:{
	        value: 'testString'
	    }
	  }
	  wrapper.find('input').simulate('keyup', mockEvent);
	  expect(mockEvent.target.value==='');
	})
})