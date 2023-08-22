import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

/** 함수 컴포넌트 (Function Component) */
function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {/* 조건부 렌더링 (Conditional Rendering) */}
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;