import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/** [Chapter_03]  */
import Library from './chapter_03/Library';
/** [Chapter_04]  */
import Clock from './chapter_04/Clock';
/** [Chapter_05]  */
import CommentList from './chapter_05/CommentList';
/** [Chapter_06]  */
import NotificationList from './chapter_06/NotificationList';
/** [Chapter_07]  */
import Accommodate from './chapter_07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
// );

/** [Chapter_03]  */
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

/** [Chapter_04]  */
// // 여기에 사용한 ReactDOM은 React 18의 최신 가져오기 방법에서 더 이상 사용되지 않는다.
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

/** [Chapter_05] */
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

/** [Chapter_06] */
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// );

/** [Chapter_07] */
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
