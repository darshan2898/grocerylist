import BottomBody from "./components/BottomBody";
import EditPage from "./components/EditPage";
import Header from "./components/Header";
import { useGlobalContext } from "./reducers/context";

function App() {
  const { state } = useGlobalContext();
  return (
    <div className="container">
      <Header />
      <BottomBody />
      {state.edit.status && <EditPage />}
    </div>
  );
}

export default App;
