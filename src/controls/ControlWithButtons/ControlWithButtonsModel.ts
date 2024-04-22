import { makeAutoObservable } from "mobx";

import { IControlWithButtonsModel } from "./types";

class ControlWithButtonsModel implements IControlWithButtonsModel {
  inputValue = "";
  constructor() {
    makeAutoObservable(this);
  }

  setInputValue(nextValue: string) {
    this.inputValue = nextValue;
  }

  resetInputValue() {
    this.inputValue = "";
  }
}

export { ControlWithButtonsModel };
