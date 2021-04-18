import React from 'react'
import ReactDOM from 'react-dom'

const name='Soomin'
//jsx표현식 내부에 변수를 사용할 수 있다.
const sayHello=<h1>Hello, {name}</h1>

//내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움
// 내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움
// (자바스크립트 표현식을 모두 사용 가능, 단, if 구문이나 for 구문은 사용 불가)

const lst=[100,200,300] //배열
const person={ //객체
    name:'Shin',
    age:19
}
function double(value){ //함수
    return value*2
}

const JSXwithExpressions=(
    <h1>
        {lst[0]} &nbsp;
        {person.name} &nbsp;
        {person.age} &nbsp;
        myname: {person.name.toUpperCase()} &nbsp;
        {person.name.length} &nbsp;
        {double(person.age)}
    </h1>
)

console.log(JSXwithExpressions)
const rootElement = document.getElementById("root")
ReactDOM.render(JSXwithExpressions,rootElement)