import { useCallback, useEffect, useRef, useState } from 'react'
import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import validateLogin from '@/utils/validateLogin'
import { useAuth } from '@/hooks/auth'

import Button from '@/components/Button'
import Input from '@/components/Input'
import TabMenu from '@/components/TabMenu'
import withUserLogged from '@/components/WithUserLogged'
import { Error } from '@/components/ErrorLabel/styles'

import { FaCheck } from 'react-icons/fa'
import {
  Container,
  BackgroundOrange,
  BackgroundWhiteRectangle,
  WelcomeContainer,
  FormContainer,
  InputContainer,
  ButtonContainer,
  LinksContainer
} from '@/styles/pages/login'
interface formProps {
  cpfTab: boolean
  emailTab: boolean
  email?: string
  senha?: string
  telefone?: string
  cpf?: string
}

const Login: NextPage = () => {
  const { signIn } = useAuth()
  const router = useRouter()

  const [emailSelected, setEmailSelected] = useState(true)
  const [cpfSelected, setCpfSelected] = useState(false)
  const [errors, setErrors] = useState()

  useEffect(() => {
    setErrors(undefined)
  }, [emailSelected, cpfSelected])

  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (formData: formProps) => {
    try {
      const data = await validateLogin(formData, formRef) // validar o formulário
      if (data) {
        await signIn(data)
        router.push('/')
      }
    } catch (err) {
      formRef.current.setErrors(err)
      setErrors(err)
    }
  }, [])

  return (
    <Container>
      <BackgroundWhiteRectangle>
        <WelcomeContainer>
          <h1>BEM VINDO</h1>
          <h2>Informe seus dados para iniciar a sessão</h2>
        </WelcomeContainer>
        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={{
              emailTab: true,
              cpfTab: false,
              email: '',
              senha: '',
              cpf: '',
              telefone: ''
            }}
          >
            <TabMenu
              buttons={[
                {
                  name: 'emailTab',
                  label: 'email e senha',
                  isSelected: emailSelected,
                  setIsSelected: setEmailSelected
                },
                {
                  name: 'cpfTab',
                  label: 'cpf e telefone',
                  isSelected: cpfSelected,
                  setIsSelected: setCpfSelected
                }
              ]}
            />
            {emailSelected && (
              <>
                <InputContainer>
                  <Input name="email" type="email" label="Email" />
                </InputContainer>
                <Input name="password" type="password" label="Senha" />
                <LinksContainer>
                  <a href="forgotPassword">esqueceu sua senha?</a>
                  <a href="noRegister">não possui cadastro?</a>
                </LinksContainer>
                {errors && <Error>Email ou Senha incorreto(s)</Error>}
              </>
            )}

            {cpfSelected && (
              <>
                <InputContainer>
                  <Input name="cpf" type="text" label="CPF" />
                </InputContainer>
                <Input name="phone" type="string" label="Telefone" />
                {errors && <Error>Cpf ou Telefone incorreto(s)</Error>}
              </>
            )}
            <ButtonContainer>
              <Button text="Iniciar sessão" icon={FaCheck} type="submit" />
            </ButtonContainer>
          </Form>
        </FormContainer>
      </BackgroundWhiteRectangle>
      <BackgroundOrange />
    </Container>
  )
}

export const getStaticProps: GetStaticProps<{
  showComponents: boolean
}> = async () => {
  return {
    props: { showComponents: true }
  }
}

export default withUserLogged(Login)
