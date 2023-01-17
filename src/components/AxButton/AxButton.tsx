import styles from './AxButton.less'

interface AxButtonProps {
  children?: string
}

function AxButton(props: AxButtonProps) {
  // console.log(props)

  return (
    <button className={styles.axButton}>
      {props.children}
    </button>
  )
}

export default AxButton