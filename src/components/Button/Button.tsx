import type { FC } from "react";
import { observer } from "mobx-react-lite";

import type { IButton } from "./types";

import s from "./Button.module.scss";

const Button: FC<IButton> = ({ label = "", callback }) => {
  return (
    <button className={s.button} onClick={callback}>
      {label}
    </button>
  );
};

export default observer(Button);
