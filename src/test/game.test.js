// 测试点
// 按钮渲染正常
// board渲染正常
// board里面的square能够正常显示初始状态的squares
// 点击square更改square的内容

import React from 'react';
import {Game, Board, Square} from '../components/Game';
import { shallow, mount } from 'enzyme';

console.log(Game);
console.log(Board);
console.log(Square);

describe('GameView', ()=>{
	it('the button should be rendered', ()=>{
		const wrapper = shallow(<Game/>);
		expect(wrapper.find('button').length).toBe(1);
	})
	it('the button should be rendered', ()=>{
		const wrapper = shallow(<Game/>);
		expect(wrapper.find('Board').length).toBe(1);
	})
	it('the board status should be same with initial Squares', ()=>{
		const initSquares = Array(9).fill(1);
		const props = {
		    squares: initSquares,
		    onClick: jest.fn()
		}
		const wrapper = shallow(<Board {...props}/>);
		// 先获取初始化的squares状态，默认的是九个null
		// 再获取渲染之后的dom中board中的状态
		const squares = wrapper.find('Square');
		// 对比二者是否正常
		let initSquaresNullCnt = 0;
		squares.map((item)=>{
			item.html() === '<button class="square"></button>' ? initSquaresNullCnt += 1 : initSquaresNullCnt;
		});
		expect(initSquaresNullCnt == initSquares.length);
	})
	it('the content of square should be changed if it was clicked', ()=>{
		const props = {
		    onClick: jest.fn()
		}
		const wrapper = shallow(<Square {...props}/>);
		wrapper.find('button').simulate('click');
		expect(props.onClick).toBeCalled();
	})
});