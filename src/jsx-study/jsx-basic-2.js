import React from 'react'
import ReactDOM from 'react-dom'

const style1=<h1 style={{color:"red"}}>Hello, style!</h1>
console.log(style1)

class MyHeader extends React.Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                {/* mystyle 객체를 바로 전달 */}
                <h1 style={mystyle}>Hello Style!</h1>
                <p>Add a little style!</p>
            </div>
        );
    }
}

const rootElement1=document.getElementById("root")
ReactDOM.render(<MyHeader/>,rootElement1)