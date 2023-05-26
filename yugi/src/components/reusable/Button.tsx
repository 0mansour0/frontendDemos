import { StyledButton } from '../styled/Button.styled';

//const icon = () => <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="5"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

export const Button = ({ ...props }) => {

  return (
    <StyledButton
      onClick={() => props.handelClick()}
      {...props}
    >
      {props.text}
    </StyledButton>
  )
}
