import { Provider } from "react-redux";
import "./App.css";
import configStore from "./Redux/store";
import Student from "./Student";
import Teacher from "./Teacher";

const {store} = configStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Teacher />
        <Student/>
      </Provider>
    </div>
  );
}

export default App;
