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
console.log(img)
const rootElement = document.getElementById("root")
// render 함수 호출하여 리액트 요소 그리기
ReactDOM.render(img, rootElement)