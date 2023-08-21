import { FC } from "react";

type TextProps = {
  color: string;
  fontSize: string;
}

export const Text: FC<TextProps> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
}