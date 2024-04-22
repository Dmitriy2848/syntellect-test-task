import { CountryInfo } from "../../api/apiService";

export interface IControlAutocompleteModel {
  countries: CountryInfo[];
  inputValue: string;

  getCountry(countryName: CountryInfo["name"]): void;
  setInputValue(nextValue: string): void;
}

export interface IControlAutocompleteViewModel {
  model: IControlAutocompleteModel;
  loading: boolean;
  maxHints: number;

  setInputValue(nextValue: string): void;
  getCountriesByName(countryName: CountryInfo["name"]): void;
  get inputValue(): string;
  get countries(): CountryInfo[];
}
