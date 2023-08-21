/** #1. Class Component 를 통해 Button에 Click Event 를 처리하는 방식 */
// import React from "react";

// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isConfirmed: false,
//         };
//         // // bind 방식
//         // this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     // Event Handler 함수
//     // handleConfirm() {
//     handleConfirm = () => { // Arrow function 으로 변경 [#1-1. Class fields syntax 사용하기]
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render() {
//         return (
//             <button
//                 onClick={this.handleConfirm} // Button Click Event
//                 disabled={this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }

/** #2. Function Component 를 통해 Button에 Click Event 를 처리하는 방식 */ 
// (-> #1. 을 클래스 컴포넌트에서 함수 컴포넌트로 변경)
import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;