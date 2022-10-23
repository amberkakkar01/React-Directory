import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Header from "./components/Header";
import TableComponent from "./components/TableComponent";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
