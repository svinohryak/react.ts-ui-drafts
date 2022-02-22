import styled from "styled-components";
import { ICONS, IconType } from "../../icons/icons";

export interface IconProps {
  name: IconType;
  color?: string;
  size?: string;
  className?: string;
}

const IconWrapper = styled.div<{ color?: string; size?: string }>`
  width: ${({ size }) => size ?? "100%"};
  height: ${({ size }) => size ?? "100%"};
  display: grid;
  place-items: center;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ color }) => color ?? "currentColor"};
  }
`;

export const Icon = ({ name, size, className, color = "black" }: IconProps) => {
  const ChoosenIcon = ICONS[name];
  return (
    <IconWrapper color={color} size={size} className={className}>
      <ChoosenIcon />
    </IconWrapper>
  );
};
