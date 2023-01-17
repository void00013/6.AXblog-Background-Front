import './app.less';
import Header from './components/Header/Header.tsx';
// app.js中是运行时配置
export function getInitialState() {
  let userState = {
    isLogin: false,
    userInfo: null,
  };
  return userState;
}

export const layout = ({ initialState }) => {
  return {
    // logout: () => {
    //   // console.log('退出');
    //   console.log(initialState);
    // },
    // 配置了rightContentRender后会使logout失效
    // rightContentRender用于设置展示用户名、头像、退出登录相关组件
    rightContentRender: () => <Header />,
  };
};
