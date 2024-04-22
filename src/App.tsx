import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";

import type { IControlWithButtonsViewModel } from "./controls/ControlWithButtons/types";
import type { IButton } from "./components/Button";

import ControlWithButtons from "./controls/ControlWithButtons";
import ControlAutocomplete from "./controls/CountryControlAutocomplete";
import { isNumber } from "./utils/isNumber";

import s from "./App.module.scss";

type ControlWithButtonsProps = Partial<Record<"left" | "right", IButton[]>>;

function App() {
  const firstButtonControls: ControlWithButtonsProps = useMemo(
    () => ({
      right: [
        {
          label: "Clear",
          callback: (viewModel: IControlWithButtonsViewModel) => {
            viewModel.resetInputValue();
          },
        },
        {
          label: "Set 'Hello World!'",
          callback: (viewModel: IControlWithButtonsViewModel) => {
            viewModel.setInputValue("Hello World!");
          },
        },
      ],
    }),
    [],
  );

  const secondButtonControls: ControlWithButtonsProps = useMemo(
    () => ({
      left: [
        {
          label: "Alert text",
          callback: (viewModel: IControlWithButtonsViewModel) => {
            if (viewModel.inputValue.length) {
              alert(viewModel.inputValue);
            }
          },
        },
      ],
      right: [
        {
          label: "Alert number",
          callback: (viewModel: IControlWithButtonsViewModel) => {
            if (isNumber(viewModel.inputValue)) {
              alert(viewModel.inputValue);
            }
          },
        },
      ],
    }),
    [],
  );

  return (
    <div className={s.container}>
      <ControlWithButtons
        leftButtons={firstButtonControls.left}
        rightButtons={firstButtonControls.right}
      />
      <ControlWithButtons
        leftButtons={secondButtonControls.left}
        rightButtons={secondButtonControls.right}
      />
      <ControlAutocomplete maxHints={3} />
      <ControlAutocomplete maxHints={10} />
    </div>
  );
}

export default observer(App);
