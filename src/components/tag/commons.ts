export interface TagColorType {
  color?: string;
  background?: string;
}
export enum TagColorScheme {
  NEUTRAL = "neutral",
  BLACK = "black",
  WARNING = "warning",
  SUCCESS = "success",
  ERROR = "error"
}

export const TagColor: Record<TagColorScheme, TagColorType> = {
  [TagColorScheme.NEUTRAL]: {
    color: "#b6b6b6",
    background: "#f5f5f5"
  },
  [TagColorScheme.BLACK]: {
    color: "#fff",
    background: "#111"
  },
  [TagColorScheme.WARNING]: {
    color: "#111",
    background: "#FFBE5B"
  },
  [TagColorScheme.SUCCESS]: {
    color: "#111",
    background: "#48FFA7"
  },
  [TagColorScheme.ERROR]: {
    color: "#111",
    background: "#FF6258"
  }
};
