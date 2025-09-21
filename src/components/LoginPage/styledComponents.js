import styled from 'styled-components'

export const LoginBg = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 2px 6px rgba(255, 255, 255, 0.1)'
      : '0 2px 6px rgba(0, 0, 0, 0.2)'};
  width: 90%;
  max-width: 450px;
  border-radius: 10px;
  padding: 40px 30px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  margin-bottom: 5px;
`

export const Logo = styled.img`
  width: 150px;
  height: 30px;
  margin-bottom: 40px;
  align-self: center;
`

export const InputBg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.text};
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg};

  &:focus {
    outline: none;
    border: 1px solid #3b82f6;
  }
`

export const ShowPasswordBg = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`

export const CheckInput = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.text};
`

export const LoginBtn = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  background-color: #3b82f6;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;

  &:hover {
    background-color: #2563eb;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`
