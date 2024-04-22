import { FC, useMemo, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import { CountryControlAutocompleteViewModel } from "./CountryControlAutocompleteViewModel";
import InputText from "../../components/InputText";
import { useOnClickOutside } from "../../hooks";

import s from "./CountryControlAutocomplete.module.scss";

interface IControlAutocomplete {
  maxHints?: number;
}

const CountryControlAutocomplete: FC<IControlAutocomplete> = ({
  maxHints = Infinity,
}) => {
  const list = useRef(null);
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const viewModel = useMemo(() => {
    return new CountryControlAutocompleteViewModel(maxHints);
  }, [maxHints]);

  useOnClickOutside(list, () => {
    setPopupIsVisible(false);
  });

  let listContent = useMemo(() => {
    if (viewModel.countries.length) {
      return (
        <ul className={s.list}>
          {viewModel.countries.map((country, index) => (
            <li
              key={index}
              className={s.item}
              onClick={() => {
                viewModel.setInputValue(country.fullName);
              }}
            >
              <div>{`${country.name}. ${country.fullName}`}</div>

              <img className={s.hintFlag} src={country.flag} alt="" />
            </li>
          ))}
        </ul>
      );
    }

    if (!viewModel.inputValue.length) {
      return <div className={s.message}>Начните вводить значение</div>;
    }

    if (viewModel.loading) {
      return <div className={s.message}>Загружаем подсказки</div>;
    }

    if (!viewModel.countries.length) {
      return <div className={s.message}>Нет данных</div>;
    }

    return null;
  }, [viewModel.inputValue, viewModel.loading, viewModel.countries]);

  return (
    <div className={s.container}>
      <div>
        <InputText
          onChange={(e) => {
            viewModel.setInputValue(e.target.value);
          }}
          value={viewModel.inputValue}
          onFocus={() => setPopupIsVisible(true)}
        />
      </div>

      {popupIsVisible && (
        <div ref={list} className={s.list_wrapper}>
          {listContent}
        </div>
      )}
    </div>
  );
};

export default observer(CountryControlAutocomplete);
