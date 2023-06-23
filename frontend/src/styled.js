import styled from 'styled-components'


const Button = styled.button`

  width:200px;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: ${(props) => props.color};
  background:${(props) => props.background};
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default Button