import {
  useCallback,
  useEffect,
  useState,
  useRef,
  ChangeEvent,
  InputHTMLAttributes
} from 'react'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  id: string
  label: string
  linkLabel?: string
  link?: string
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  id,
  label,
  linkLabel,
  link
}) => {
  const inputRef = useRef<HTMLInputElement>()
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked'
    })
  }, [defaultValue, fieldName, registerField])
  return (
    <>
      <Container htmlFor={id}>
        <label htmlFor={id}>{label}</label>
        <input type="checkbox" id={id} ref={inputRef} name={name} />
        <span></span>
        {(link || linkLabel) && <a href={link}>{linkLabel}</a>}
        {error && <Error>{error}</Error>}
      </Container>
    </>
  )
}

export default CheckBox
