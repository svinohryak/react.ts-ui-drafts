import { FC } from "react";
import styled from "styled-components";
import { TagColor, TagColorScheme } from "./commons";

export interface TagProps {
  variant?: TagColorScheme;
  text: string;
}

const StyledTag = styled.div<TagProps>`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  padding: 0.2188rem 0.5rem;
  border-radius: 0.1875rem;
  ${({ variant }) =>
    variant
      ? `color: ${TagColor[variant].color}; background: ${TagColor[variant].background} `
      : `color: ${TagColor.neutral.color}; background: ${TagColor.neutral.background}`}
`;

const Tag: FC<TagProps> = ({ variant, text }) => {
  return (
    <StyledTag variant={variant} text={text}>
      {text}
    </StyledTag>
  );
};

export default Tag;
