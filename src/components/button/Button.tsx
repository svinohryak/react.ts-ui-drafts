import React from "react";
import styled from "styled-components";
import { IconType } from "../../icons/icons";
import { Icon } from "../icon/Icon";

export enum ButtonSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small"
}

interface ButtonSizeProperties {
  fontSize: string;
  padding: string;
  borderRadius: string;
}

export const ButtonDimension: Record<ButtonSize, ButtonSizeProperties> = {
  [ButtonSize.LARGE]: {
    fontSize: "1.125rem",
    padding: "0.75rem 0.875rem",
    borderRadius: "0.375rem"
  },
  [ButtonSize.MEDIUM]: {
    fontSize: "1rem",
    padding: "0.4375rem 0.75rem",
    borderRadius: "0.3125rem"
  },
  [ButtonSize.SMALL]: {
    fontSize: "0.875rem",
    padding: "6.5008px 0.625rem",
    borderRadius: "0.25rem"
  }
};

export enum ButtonVariant {
  SOLID = "solid",
  GHOST = "ghost",
  TEXT = "text"
}

export enum ButtonColorSchemeType {
  PRIMARY = "primary",
  NEUTRAL = "neutral",
  SUCCESS = "success",
  DANGER = "danger"
}

interface ButtonColorScheme {
  color?: string;
  borderColor?: string;
  background?: string;
}

export const ButtonColor: Record<ButtonColorSchemeType, ButtonColorScheme> = {
  [ButtonColorSchemeType.PRIMARY]: {
    borderColor: "#ff7272",
    color: "#fff",
    background: "#ff7272"
  },
  [ButtonColorSchemeType.NEUTRAL]: {
    borderColor: "#F5F5F5",
    color: "#424242",
    background: "#F5F5F5"
  },
  [ButtonColorSchemeType.SUCCESS]: {
    borderColor: "#D1FFE9",
    color: "#3DCD88",
    background: "#D1FFE9"
  },
  [ButtonColorSchemeType.DANGER]: {
    borderColor: "#FFE9E9",
    color: "#FF8179",
    background: "#FFE9E9"
  }
};

export const SolidButtonColor: Record<
  ButtonColorSchemeType,
  ButtonColorScheme
> = {
  [ButtonColorSchemeType.PRIMARY]: {
    borderColor: "#ff7272",
    color: "#fff",
    background: "#ff7272"
  },
  [ButtonColorSchemeType.NEUTRAL]: {
    borderColor: "#F5F5F5",
    color: "#424242",
    background: "#F5F5F5"
  },
  [ButtonColorSchemeType.SUCCESS]: {
    borderColor: "#D1FFE9",
    color: "#3DCD88",
    background: "#D1FFE9"
  },
  [ButtonColorSchemeType.DANGER]: {
    borderColor: "#FFE9E9",
    color: "#FF8179",
    background: "#FFE9E9"
  }
};

export const GhostButtonColor: Record<
  ButtonColorSchemeType,
  ButtonColorScheme
> = {
  [ButtonColorSchemeType.PRIMARY]: {
    borderColor: "#ff7272",
    color: "#ff7272"
  },
  [ButtonColorSchemeType.NEUTRAL]: {
    borderColor: "#F5F5F5",
    color: "#424242"
  },
  [ButtonColorSchemeType.SUCCESS]: {
    borderColor: "#D1FFE9",
    color: "#3DCD88"
  },
  [ButtonColorSchemeType.DANGER]: {
    borderColor: "#FFE9E9",
    color: "#FF8179"
  }
};
export const TextButtonColor: Record<
  ButtonColorSchemeType,
  ButtonColorScheme
> = {
  [ButtonColorSchemeType.PRIMARY]: {
    color: "#ff7272"
  },
  [ButtonColorSchemeType.NEUTRAL]: {
    color: "#424242"
  },
  [ButtonColorSchemeType.SUCCESS]: {
    color: "#3DCD88"
  },
  [ButtonColorSchemeType.DANGER]: {
    color: "#FF8179"
  }
};

export type ButtonColorType = keyof typeof ButtonColor;

export const ButtonVariants: Record<ButtonVariant, typeof ButtonColor> = {
  [ButtonVariant.SOLID]: SolidButtonColor,
  [ButtonVariant.GHOST]: GhostButtonColor,
  [ButtonVariant.TEXT]: TextButtonColor
};

const getButtonColorValue = (property: keyof ButtonColorScheme) => {
  return ({
    variant = ButtonVariant.SOLID,
    buttonColor = ButtonColorSchemeType.PRIMARY
  }: {
    variant?: ButtonVariant;
    buttonColor?: ButtonColorSchemeType;
  }) => {
    return ButtonVariants[variant][buttonColor][property] || "transparent";
  };
};

const getButtonSizeValue = (property: keyof ButtonSizeProperties) => {
  return ({ size = ButtonSize.MEDIUM }: { size?: ButtonSize }) => {
    return ButtonDimension[size][property] || ButtonDimension.medium[property];
  };
};

const StyledButton = styled.button<{
  size?: ButtonSize;
  variant?: ButtonVariant;
  fontSize?: string;
  icon?: IconType;
  color?: string;
  reverse?: boolean;
  buttonColor?: ButtonColorSchemeType;
}>`
  border: 1px solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-block: 0.3rem;
  box-sizing: border-box;

  background: ${getButtonColorValue("background")};

  color: ${getButtonColorValue("color")};

  border-color: ${getButtonColorValue("borderColor")};

  border-radius: ${getButtonSizeValue("borderRadius")};

  padding: ${getButtonSizeValue("padding")};

  min-height: 1.875rem;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  white-space: nowrap;
  line-height: 1;
  gap: 0.5rem;

  & > span {
    font-size: ${getButtonSizeValue("fontSize")};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fontSize?: string;
  isIcon?: boolean;
  icon?: IconType;
  color?: string;
  reverse?: boolean;
  buttonColor?: ButtonColorType;
}

const Button = ({
  icon,
  isIcon,
  children,
  size,
  variant,
  buttonColor,
  color,
  reverse = false,
  ...buttonProps
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      color={color}
      reverse={reverse}
      buttonColor={buttonColor}
      {...buttonProps}
    >
      {icon && (
        <Icon
          size={ButtonDimension[size ?? "medium"].fontSize}
          color={
            ButtonVariants[variant ?? "solid"][buttonColor ?? "primary"].color
          }
          name={icon}
        />
      )}
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
