// import React from "react";
import styled from "styled-components";
import { ICONS } from "../icon/consts";
import Icon from "../icon/Icon";

const StyledButton = styled.button`
  background: tomato;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.5rem;
`;

// interface ButtonProps {
//   icon?: ICONS;
//   title: string;
// }

interface ButtonProps {
  icon?: JSX.Element;
  title: string;
}

const ButtonOnStyle = ({ icon, title }: ButtonProps) => {
  return (
    <StyledButton>
      {icon}
      {title}
      {/* {icon && <Icon icon={icon} />} */}
    </StyledButton>
  );
};

export default ButtonOnStyle;

// рабочий вариант ниже

// import React from "react";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   background: tomato;
//   color: white;
//   border: none;
//   border-radius: 3px;
//   padding: 0.5rem;
// `;

// interface ButtonProps  extends  React.ButtonHTMLAttributes<HTMLButtonElement> {
//   icon?: JSX.Element;
//   title: string;
// }

// const Button   = ({ icon, title, ...buttonProps }:ButtonProps ) => {
//   return (
//     <StyledButton {...buttonProps}>
//       {icon}
//       {title}
//     </StyledButton>
//   );
// };

// другой подход
// interface ButtonProps extends  React.ButtonHTMLAttributes<HTMLButtonElement>  {
//   icon?: JSX.Element;
//   title: string;
// }

// const Button = styled(({ icon, title, ...buttonProps }:ButtonProps ) => {
//     return (
//       <button {...buttonProps}>
//         {icon}
//         {title}
//       </button>
//     );
//   })`
//     background: tomato;
//     color: white;
//     border: none;
//     border-radius: 3px;
//     padding: 0.5rem;
//   `

// export default Button;
