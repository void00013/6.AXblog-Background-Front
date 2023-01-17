import styles from './AxInput.less'

interface AxInputProps{
  type?: string,
  placeholder?: string
}

function AxInput(props: AxInputProps) {
  return (
    <input className={styles.axInput} type={props?.type} placeholder={props?.placeholder} autoComplete="666" />
  )
}

export default AxInput