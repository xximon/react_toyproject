import React from "react";
import Notification from "./Notification";

/** Notification 데이터를 별도의 객체(배열)로 분리 */
const reservedNotifications = [
    {
        id: 1, // log 구분을 위한 id 추가
        message: "안녕하세요, 오늘 일정을 알려드립니다."
    },
    {
        id: 2, // log 구분을 위한 id 추가
        message: "점심식사 시간입니다."
    },
    {
        id: 3, // log 구분을 위한 id 추가
        message: "이제 곧 미팅이 시작됩니다."
    },
];

var timer;

/** Class 형 React Component */
class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    /** React Class Component 생명주기 (생성) */
    /**
     * 1. 생성(Mounting) -> componentDidMount()
     * 2. 갱신(Updating) -> componentDidUpdate()
     * 3. 소멸(Unmounting) -> componentWillUnmount()
     */
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // notifications 비우기 (componentWillUnmount() 메소드 실행 확인을 위함)
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id} // React Element 구분을 위한 고유값 (map 함수 사용 시, 필수값)
                            id={notification.id}
                            message={notification.message} />
                    );
                })}
            </div>
        );
    }


}

export default NotificationList;