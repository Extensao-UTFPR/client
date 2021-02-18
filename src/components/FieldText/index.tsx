import Link from 'next/link'
import { BodyField, Error } from './styles'
import { IoMdAlert } from 'react-icons/io'

interface FieldProps {
  name: string
  label?: string
  subLabel?: string
  pathSubLabel?: string
  error?: string
  isEmpty: boolean
}
const FieldText: React.FC<FieldProps> = ({
  name,
  label,
  subLabel,
  pathSubLabel,
  error,
  isEmpty,
  children
}) => {
  return (
    <>
      <BodyField isEmpty={isEmpty} isErrored={!!error} htmlFor={name}>
        {children}
        {pathSubLabel && <Link href={`/${pathSubLabel}`}>{subLabel}</Link>}
        <label htmlFor={name}>{label}</label>
      </BodyField>
      {error && <Error>{error}</Error>}
    </>
  )
}

export default FieldText
