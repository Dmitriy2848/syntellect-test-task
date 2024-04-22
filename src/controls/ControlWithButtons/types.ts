import { IButton } from "../../components/Button";

export interface IControlWithButtons {
  leftButtons?: IButton[];
  rightButtons?: IButton[];
  className?: string;
}

export interface IControlWithButtonsModel {
  inputValue: string;
  setInputValue(nextValue: string): void;
  resetInputValue(): void;
}

export interface IControlWithButtonsViewModel {
  model: IControlWithButtonsModel;
  get inputValue(): IControlWithButtonsModel["inputValue"];
  setInputValue(nextValue: string): void;
  resetInputValue(): void;
}
