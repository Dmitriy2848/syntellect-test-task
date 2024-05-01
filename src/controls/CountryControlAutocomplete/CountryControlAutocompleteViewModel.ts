import { makeAutoObservable, runInAction } from "mobx";

import type { IControlAutocompleteViewModel } from "./types";
import type { CountryInfo } from "../../api/apiService";

import { CountryControlAutocompleteModel } from "./CountryControlAutocompleteModel";

class CountryControlAutocompleteViewModel
  implements IControlAutocompleteViewModel
{
  model = new CountryControlAutocompleteModel();

  maxHints;
  loading = true;
  constructor(maxHints: number) {
    makeAutoObservable(this);

    this.maxHints = maxHints;
  }
  async getCountriesByName(countryName: string) {
    runInAction(() => {
      this.loading = true;
    });

    await this.model.getCountry(countryName);

    runInAction(() => {
      this.loading = false;
    });
  }

  setInputValue(nextValue: string) {
    this.model.inputValue = nextValue;
  }

  get inputValue() {
    return this.model.inputValue;
  }

  get countries(): CountryInfo[] {
    return this.model.countries.slice(0, this.maxHints);
  }
}
export { CountryControlAutocompleteViewModel };
