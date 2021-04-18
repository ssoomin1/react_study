import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

const Greeting=(props)=>{
    return (<h1>Hello, {props.name}</h1>)
}

//주어진 것픽셀이거나 16픽셀이거나
const smile=(props)=>{
    <span style={{fontSize:(props.size||16)+'px'}}>😉</span>
}

function FuncComponent(props){
    return(
        <div>
            {/*일반적인 컴포넌트와 똑같이 사용 가능 */}
            <Greeting name='Soomin'/>
            <smile size={100}/>
        </div>
    )
}

const rootElement=document.getElementById("root")
ReactDOM.render(<Greeting/>,rootElement)