import { useState, useEffect } from "react";

export const Form = () => {
  const [name, setName] = useState("Hook");

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg text-center mt-5 mb-10'>
        Añade pacientes y{" "}
        <span className='text-indigo-600 font-bold '>Adminístralos</span>
      </p>

      <form className='bg-white shadow-md rounded-xl px-5 py-10 mb-10'>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='pet'
          >
            Nombre mascota
          </label>
          <input
            id='pet'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre de la mascota'
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='owner'
          >
            Nombre Propietario
          </label>
          <input
            id='owner'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder='Nombre del propietario'
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='email'
            placeholder='Email de contacto'
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='dischard'
          >
            Alta
          </label>
          <input
            id='dischard'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='date'
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='symptom'
          >
            Síntomas
          </label>
          <textarea
            id='symptom'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los síntomas'
          />
        </div>
        <div className='flex justify-center'>
          <input
            type='submit'
            className='bg-indigo-600 p-3 lg:w-1/2 md:w-full text-white uppercase font-bold  cursor-pointer transition-all rounded-md hover:bg-indigo-700 '
          />
        </div>
      </form>
    </div>
  );
};
