import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./Routes";
const App = () => {
  return (
    <BrowserRouter>
      <div data-testId="todo">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
