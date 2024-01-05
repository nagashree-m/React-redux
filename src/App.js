import "./App.css";
// import Parent from "./components/Parent";
// import ReactReduxComponent from "./components/ReactReduxComponent";
// // import UserForm from "../src/components/UserForm";
// import InputField from "./components/InputField";
// import UseReducerComponent from "./components/UseReducerComponent";
// import UseMemoComponent from "./components/UseMemo";
// import AsyncActions from "./components/AsyncActions";
// import CakeContainer from "./components/Container.js/CakeContainer";
// import IceCreamContainer from "./components/Container.js/IceCreamContainer";
import { Provider } from "react-redux";
import store from "./components/ReduxContainer/store";
import BookContainer from "./components/ReduxContainer/BookContainer";
import BookContainerB from "./components/ReduxContainer/BookContainerB";

// import { store } from "./redux/store";
// import { store } from "./redux/ComponentsData/store";
// import UserContainer from "./components/Container.js/UserContainer";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
// import HooksCakeContainer from "./components/Container.js/HooksCakeContainer";
// import NewCakeContainer from "./components/Container.js/NewCakeContainer";
// import ItemContainer from "./components/Container.js/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <ItemContainer cake />
      <ItemContainer /> */}
      {/* <Parent />
      <br></br>
      <UserForm />
      <br></br> */}
      {/* <InputField /> */}
      {/* <UseReducerComponent /> */}
      {/* <UseMemoComponent /> */}
      {/* <ReactReduxComponent /> */}
      {/* <AsyncActions /> */}
      {/* <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer /> */}
      {/* <UserContainer /> */}
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      <BookContainer />
      <BookContainerB />
    </Provider>
  );
}

export default App;
