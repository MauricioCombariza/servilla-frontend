// Gestion.ts
import {FormEvent} from 'react'
import { Container } from '@mui/material';

import { useState } from 'react';
import { useAuth } from '../../../../Auth';
import { Layout } from '../../../../components/Layout';
import { ButtonSer } from '../../../../components/ButtonSer';

const Gestion = () => {
  const [fechaInicial, setFechaInicial] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
  const [errorMensaje, setErrorMensaje] = useState<string>('');
  const auth = useAuth()
  const token = auth.token
  const user = auth.user

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/document/documentos/gestion?fecha_inicial=${fechaInicial}&fecha_final=${fechaFinal}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Reemplaza YOUR_JWT_TOKEN con tu token JWT
        },
      });
      if (response.status === 401) {
        setErrorMensaje('El serial no ha sido encontrado');
        return
      }
  
      if (response.status === 403) {
        throw new Error('Acceso no autorizado');
      }
  
      if (response.status === 404) {
        setErrorMensaje('El serial no ha sido encontrado');
        return; // Evita continuar si el serial no se encontró
      }
      
      if (response.status === 200) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gestion.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      } else if (response.status === 401) {
        // Manejar el caso de autenticación no válida aquí
        console.error('Esquema de autenticación inválido');
      } else {
        // Manejar otros posibles códigos de estado
        console.error('Error inesperado');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  return (
    <>
      <Layout>
      <Container>
        <Container maxWidth="md">
          <h2 className='text-2xl mt-2'>{user?.username} tus busquedas:</h2>
    <form
        method="post"
        className="container mt-10 lg:px-20 lg:m-20 mx-2 bg-gray-200 rounded-sm"
        onSubmit={handleSubmit}
    >
        
        <h1 className="font-bold text-ser pt-6">BUSCAR</h1>
        <div className="py-2 px-2 mt-10">
        <div>Fecha Inicial</div>
        <input
            className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
            type="text"
            name="fechaInicial"
            value={fechaInicial}
            placeholder="Fecha Inicial (aaaa.mm.dd)"
            onChange={(e) => setFechaInicial(e.target.value)}
        />
        </div>
        <div className="py-2 px-2">
        <div>Fecha Final</div>
        <input
            className="w-full leading-snug text-gray-800 placeholder-blue-400 py-1 px-4 bg-green-600 rounded border border-darkser hover:bg-ser focus:outline-none focus:shadow-outline hover:text-white"
            type="text"
            name="fechaFinal"
            placeholder="Fecha Final (aaaa.mm.dd)"
            value={fechaFinal}
            onChange={(e) => setFechaFinal(e.target.value)}
        />
        </div>
        <div className="py-4">
        <ButtonSer type="submit" name={'BUSCAR'} />
        </div>
        <div className="text-red-500">
        
        </div>
        <div className="text-red-500">
            {errorMensaje && (
              <p className="text-red-500 font-bold mt-2">
                {errorMensaje}
              </p>
            )}
          </div>
        
    </form>
    
    </Container>
    </Container>          
      {/* <h1>Gestión</h1>
      <input
        type="text"
        placeholder="Fecha Inicial (aaaa.mm.dd)"
        value={fechaInicial}
        onChange={(e) => setFechaInicial(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fecha Final (aaaa.mm.dd)"
        value={fechaFinal}
        onChange={(e) => setFechaFinal(e.target.value)}
      />
      <button onClick={handleSubmit}>Descargar</button> */}
      </Layout>
    </>
  );
};

export {Gestion};

