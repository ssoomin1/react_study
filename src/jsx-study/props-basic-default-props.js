import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
//props 값이 전달되지 않았을 때 사용할 기본 props 값을 지정
class PersonProfile extends Component{
    render(){
        const {name,age,gender,profile} = this.props
        return(
            <div className='person' style={this.props.highligt?{color:"red"}:null}>
                <h1>profile</h1>
                <img src={profile} />
                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>gender: {gender}</p>
            </div>
        )
    }
}


// 클래스의 속성에 defaultProps 속성(객체 타입)을 정의하고 기본 전달 props 값을 설정 가능
PersonProfile.defaultProps={
    name:"Unknown",
    gender:"Unknown",
    age:0,
    profile:'https://via.placeholder.com/150'
}

const rootElement=document.getElementById("root")
ReactDOM.render(<PersonProfile/>,rootElement)