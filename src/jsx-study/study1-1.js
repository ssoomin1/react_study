import React from 'react'
import ReactDOM from 'react-dom'

// 리액트 요소 생성
const img = React.createElement(
    'img',
    {
        src: 'https://picsum.photos/id/237/200/300',
        title: 'img title'
    }
)
// 리액트 요소 객체 내용 확인
//console.log(img)
//const rootElement = document.getElementById("root")
// render 함수 호출하여 리액트 요소 그리기
//ReactDOM.render(img, rootElement)

const paragraph = React.createElement(
    'p',
    null,
    'Hello, React'
)
//map함수는 콜백함수에 맞는 것을 새로운 배열로 만들어주는 역할을 한다.
//배열의 내용들을 li형태로, 리액트요소로 만들기
const lst = ['Chocolate', 'Vanilla', 'Banana'].map(flavor => {
    return React.createElement('li', null, flavor)
})
const title = 'My favorite ice cream flavors'
const favorites = React.createElement('div', null,
    React.createElement('h1', null, `Title : ${title}`),
    React.createElement('ul', null, lst)
)
const rootDiv = React.createElement('div', { id: 'mydiv' }, [img, paragraph, favorites])
console.log(rootDiv) //여기에서 화면 출력

const rootElement1 = document.getElementById("root")
ReactDOM.render(rootDiv, rootElement1)