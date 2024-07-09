interface IDivErrProps {
  formState?: string
}

export default function DivErr01 (props : IDivErrProps): JSX.Element{
  return(
    <div style={{ color: 'red' }}>
      { props.formState ?? '' }
    </div>
  )
}