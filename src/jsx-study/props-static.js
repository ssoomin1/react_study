import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'


class Greeting extends React.Component {
    // static defaultProps={
    //     name:'sungjin'
    // }

    render() {
        return (
            <div>
                {/*Hello, {this.props.name}*/}
                <h1>Hello,World! {this.props.count} greetings from me! </h1>
            </div>
        )
    }
}

//number를 읽어올 수 없다면서 에러가 난다.
// class Greeting1 extends React.Component {
//     static propTypes = {
//         count: React.PropTypes.number.isRequired
//     }
//     render() {
//         return <h1>Hello, world! {this.props.count} greetings from me!</h1>;
//     }
// }


const rootElement=document.getElementById("root")
ReactDOM.render(<Greeting/>,rootElement)