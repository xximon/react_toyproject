import React from "react";

/** CSS 스타일 구역 */
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
}

/** Class 형 React Component */
class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    /** Lifecycle method 사용 테스트 */
    componentDidMount() {
        /* [생성 될 때] */
        // 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됨
        console.log(`${this.props.id} componentDidMount() called`);
    }

    componentDidUpdate() {
        /* [업데이트 할 때] */
        // 갱신이 일어난 직후에 호출됨
        console.log(`${this.props.id} componentDidUpdate() called`);
    }

    componentWillUnmount() {
        /* [제거 할 때] */
        // 컴포넌트가 마운트 해제되어 제거되기 직전에 호출됨
        // (componentDidMount() 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행)
        // ex) 타이머 제거, 네트워크 요청 취소 작업
        console.log(`${this.props.id} componentWillUnmount() called`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
            
        );
    }
}


export default Notification;