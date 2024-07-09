interface IButtonProps {
  title: string
  isActive: boolean
}

export default function Button01 (props:IButtonProps): JSX.Element {
  return (
    <button style={{backgroundColor: props.isActive ? 'green' : '' }}>
      {props.title}
    </button>
  )
}