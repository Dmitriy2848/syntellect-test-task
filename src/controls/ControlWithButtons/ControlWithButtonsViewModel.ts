import { makeAutoObservable } from "mobx";

import { ControlWithButtonsModel } from "./ControlWithButtonsModel";

import { IControlWithButtonsViewModel } from "./types";

class ControlWithButtonsViewModel implements IControlWithButtonsViewModel {
  model = new ControlWithButtonsModel();

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue(nextValue: string) {
    this.model.setInputValue(nextValue);
  }

  resetInputValue() {
    this.model.resetInputValue();
  }

  get inputValue() {
    return this.model.inputValue;
  }
}

export { ControlWithButtonsViewModel };
