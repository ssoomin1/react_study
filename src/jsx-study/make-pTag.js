import React from 'react'
import ReactDOM from 'react-dom'

const pTag = React.createElement('p',null,'Hello,React')
// 그니까 이게 <p>Hello, React</p>와 같다는 말임
console.log(pTag)

const rootElement=document.getElementById("root")
ReactDOM.render(pTag,rootElement)