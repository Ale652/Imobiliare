import Router from "../router";
import Provider from "react-redux";
import { MainContainer } from "./styles";
import store from "../../store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;