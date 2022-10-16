import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { PatientList } from "./components/PatientList/PatientList";
import { useState, useEffect } from "react";

function App() {
  let initPatients = [];
  if(localStorage.getItem('patients')){
    initPatients = JSON.parse(localStorage.getItem('patients'))
  }
  const [patients, setPatients] = useState(initPatients);
  const [patient, setPatient] = useState({});

  // useEffect(() => {
  //   const getPatientsLocalStorage = () => {
  //     const patientsLS = localStorage.getItem('patients')
  //     console.log(patientsLS)
  //   }

  //   console.log('1');
  //   getPatientsLocalStorage();
  // }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])

  const dropPatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id )
    setPatients(updatedPatients);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient} />
        <PatientList 
          patients={patients}
          setPatient={setPatient}
          dropPatient={dropPatient}
        />
      </div>
    </div>
  );
}

export default App;
