import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { PatientList } from "./components/PatientList/PatientList";

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <PatientList />
    </div>
  );
}

export default App;
