export const Patient = ({patient, setPatient, dropPatient}) => {
  const {name, owner, email, dischard, symptom, id} = patient;

  const handleDrop = () => {
    const answer = confirm('¿Deseas eliminar este paciente?')
    answer && dropPatient(id)
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {' '}
          <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Propietario: {' '}
          <span className="font-normal normal-case">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {' '}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Cita: {' '}
          <span className="font-normal normal-case">{dischard}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {' '}
          <span className="font-normal normal-case">{symptom}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg " onClick={() => setPatient(patient)} >
            Editar
          </button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg " onClick={handleDrop}>
            Eliminar
          </button>
        </div>
        
      </div>
  )
}
