import styles from './login.less'
import AxInput from '@/components/AxInput/AxInput'
import AxButton from '@/components/AxButton/AxButton'
import { useState } from 'react'

export default function Login() {
  const [circle1Styles, setCircle1Styles] = useState({
    right: '-140px'
  })
  const [circle2Styles, setCircle2Styles] = useState({
    left: '-240px'
  })
  const [switchStyles, setSwitchStyles] = useState({
    left: '0'
  })
  const [verifyStyles, setVerifyStyles] = useState({
    right: '0'
  })
  const [sRegisterStyles, setSRegisterStyles] = useState({
    zIndex: 0,
    opacity: 0
  })
  const [sLoginStyles, setSLoginStyles] = useState({
    zIndex: 1,
    opacity: 1
  })
  const [loginStyles, setLoginStyles] = useState({
    zIndex: 0,
    opacity: 0
  })
  const [registerStyles, setRegisterStyles] = useState({
    zIndex: 1,
    opacity: 1
  })
  let toLoginStatus = () => {
    setCircle1Styles({
      right: '100px'
    })
    setCircle2Styles({
      left: '0'
    })
    setSwitchStyles({
      left: '60%'
    })
    setVerifyStyles({
      right: '40%'
    })
    setSRegisterStyles({
      zIndex: 1,
      opacity: 1
    })
    setSLoginStyles({
      zIndex: 0,
      opacity: 0
    })
    setLoginStyles({
      zIndex: 1,
      opacity: 1
    })
    setRegisterStyles({
      zIndex: 0,
      opacity: 0
    })
  }
  let toRegisterStatus = () => {
    setCircle1Styles({
      right: '-140px'
    })
    setCircle2Styles({
      left: '-240px'
    })
    setSwitchStyles({
      left: '0'
    })
    setVerifyStyles({
      right: '0'
    })
    setSRegisterStyles({
      zIndex: 0,
      opacity: 0
    })
    setSLoginStyles({
      zIndex: 1,
      opacity: 1
    })
    setLoginStyles({
      zIndex: 0,
      opacity: 0
    })
    setRegisterStyles({
      zIndex: 1,
      opacity: 1
    })
  }
  return (
    <>
      <div className={styles.page}>
        <div className={styles.box}>
          <div className={styles.switch} style={switchStyles}>
            <div className={styles.sRegister} style={sRegisterStyles}>
              <h2 className={styles.title}>
                Hello Friend!
              </h2>
              <div className={styles.description}>
                Enter your personal details and start journey with us
              </div>
              <div className={styles.button} onClick={toRegisterStatus}>
                <AxButton>SIGN UP</AxButton>
              </div>
            </div>
            <div className={styles.sLogin} style={sLoginStyles}>
              <h2 className={styles.title}>
                Welcome Back !
              </h2>
              <div className={styles.description}>
                To keep connected with us please login with your personal info
              </div>
              <div className={styles.button} onClick={toLoginStatus}>
                <AxButton>SIGN IN</AxButton>
              </div>
            </div>
            <span className={styles.circle} style={circle1Styles}></span>
            <span className={styles.circle} style={circle2Styles}></span>
          </div>
          <div className={styles.verify} style={verifyStyles}>
            <div className={styles.login} style={loginStyles}>
              <h2 className={styles.title}>SIGN IN</h2>
              <div className={styles.icons}>
                <img src={require('@/assets/img/qq.svg')} alt="qq" />
                <img src={require('@/assets/img/wx.svg')} alt="wx" />
                <img src={require('@/assets/img/github.svg')} alt="github" />
              </div>
              <div className={styles.description}>or use your email account</div>
              <div className={styles.formIpt}>
                <AxInput type="text" placeholder='Email' />
              </div>
              <div className={styles.formIpt}>
                <AxInput type="text" placeholder='Password' />
              </div>
              <div className={styles.button}>
                <AxButton>SIGN IN</AxButton>
              </div>
            </div>
            <div className={styles.register} style={registerStyles}>
              <h2 className={styles.title}>SIGN UP</h2>
              <div className={styles.icons}>
                <img src={require('@/assets/img/qq.svg')} alt="qq" />
                <img src={require('@/assets/img/wx.svg')} alt="wx" />
                <img src={require('@/assets/img/github.svg')} alt="github" />
              </div>
              <div className={styles.description}>or use email for registration</div>
              <div className={styles.formIpt}>
                <AxInput type="text" placeholder='Name' />
              </div>
              <div className={styles.formIpt}>
                <AxInput type="text" placeholder='Email' />
              </div>
              <div className={styles.formIpt}>
                <AxInput type="text" placeholder='Password' />
              </div>
              <div className={styles.button}>
                <AxButton>SIGN UP</AxButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}