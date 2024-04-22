import type { ChangeEvent, FC } from "react";
import { useMemo } from "react";

import { observer } from "mobx-react-lite";

import Button from "../../components/Button";
import InputText from "../../components/InputText";

import s from "./ControlWithButtons.module.scss";
import { IControlWithButtons } from "./types";
import { ControlWithButtonsViewModel } from "./ControlWithButtonsViewModel";

const ControlWithButtons: FC<IControlWithButtons> = ({
  className = "",
  rightButtons = [],
  leftButtons = [],
}) => {
  const viewModel = useMemo(() => {
    return new ControlWithButtonsViewModel();
  }, [rightButtons, leftButtons]);

  return (
    <div className={[className, s.container].join(" ")}>
      {!!leftButtons.length && (
        <div className={s.leftButtons}>
          {leftButtons.map((props, index) => (
            <Button
              key={index}
              {...props}
              callback={() => props.callback(viewModel)}
            />
          ))}
        </div>
      )}

      <div className={s.inputWrapper}>
        <InputText
          value={viewModel.inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            viewModel.setInputValue(e.target.value);
          }}
        />
      </div>

      {!!rightButtons.length && (
        <div className={s.rightButtons}>
          {rightButtons.map((props, index) => (
            <Button
              key={index}
              {...props}
              callback={() => props.callback(viewModel)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(ControlWithButtons);
