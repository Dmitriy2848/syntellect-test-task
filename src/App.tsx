import React from "react";
import { observer } from "mobx-react-lite";

import s from "./App.module.scss";

function App() {
  return <div className={s.container}></div>;
}

export default observer(App);
