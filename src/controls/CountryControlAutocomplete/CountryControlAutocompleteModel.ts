import { makeAutoObservable, runInAction } from "mobx";

import type { IControlAutocompleteModel } from "./types";

import { CountryInfo, getCountryByName } from "../../api/apiService";

class CountryControlAutocompleteModel implements IControlAutocompleteModel {
  inputValue: string = "";

  countries: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getCountry(countryName: string) {
    const nextCountries = await getCountryByName(countryName);

    runInAction(() => {
      this.countries = nextCountries;
    });
  }

  setInputValue(nextValue: string) {
    this.inputValue = nextValue;
  }
}

export { CountryControlAutocompleteModel };
