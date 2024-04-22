import type { FC } from "react";
import { observer } from "mobx-react-lite";

import s from "./InputText.module.scss";
import { IInputText } from "./types";

const InputText: FC<IInputText> = ({
  placeholder = "Введите текст",
  value,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={s.input}
      type="text"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default observer(InputText);
