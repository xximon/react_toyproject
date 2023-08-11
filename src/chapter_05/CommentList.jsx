import React from "react";
import Comment from "./Comment";

/** Comment 데이터를 별도의 객체(배열)로 분리 */
const comments = [
    {
        name: "서영래",
        comment: "안녕하세요, ximon 입니다."
    },
    {
        name: "USER1",
        comment: "리액트 재미있어요~!"
    },
    {
        name: "USER2",
        comment: "저도 리액트 배워보고 싶어요!!"
    },
];

function CommentList(props) {
    return (
        <div>
            {/* 배열에 있는 데이터 갯수만큼 map 함수를 통해 출력 */}
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;