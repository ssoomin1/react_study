//props의 children 속성을 통해 문자열 혹은 자식 컴포넌트(혹은 태그) 접근 가능
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class Child extends Component {
    render() {
        return (
            <div>
                <Child>Hello</Child>
                <Child>
                    <h1>Title</h1>
                    <div>React</div>
                    <ol>
                        <li>item 1</li>
                        <li>item 2</li>
                    </ol>
                    <Child>Inner Child</Child>
                </Child>
                {this.props.children}
            </div>
        )
    }
}

class ChildWithFunctionProp extends Component {
    render() {
        return (
            <div>
                {this.props.children()}
            </div>
        )
    }
}


//ReactDOM.render(<Parent />, document.getElementById("root"))
