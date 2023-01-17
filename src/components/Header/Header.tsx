import styles from './Header.less'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Avatar, Space } from 'antd';
import type { MenuProps } from 'antd';
import { history } from 'umi'
// import { useModel, history } from 'umi'

const HeaderDropMenu = () => {
  // const { setInitialState } = useModel('@@initialState')

  const handleMenuClick = ({ key }: any) => {
    // console.log('click', key)
    if(key === '1') {
      console.log('个人中心')
    }
    if(key === '2') {
    //   setInitialState({
    //     isLogin: false,
    //     userInfo: null
    //   })
    //   localStorage.removeItem('userInfo')
    //   sessionStorage.removeItem('userInfo')
    //   history.push('/login')
    //   message.success('退出成功')
      console.log('退出登录')
      history.push('/login')
    }
  };

  const items: MenuProps['items'] = [
    {
      label: '个人中心',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '退出登录',
      key: '2',
      icon: <LogoutOutlined />,
    }
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Space wrap>
      <Dropdown menu={menuProps} placement="bottom">
        <span className={styles.user}>
          <Avatar size="small" icon={<UserOutlined />} />
          <span>用户名</span>
        </span>
      </Dropdown>
    </Space>
  )
}

export default HeaderDropMenu;