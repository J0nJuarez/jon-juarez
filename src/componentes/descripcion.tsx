import React from 'react'

interface DescripcionProps {
    texto: string;
}

const Descripcion: React.FC<DescripcionProps> = ({ texto }) => {
  return (
    <div className='text-left clip-1-2 p-[2rem] flex flex-col'>
        <div className='ml-[20%]'>
            <h2 className='text-6xl '>SEO</h2>
            <h2 className='text-6xl '>WEB</h2>
            <h2 className='text-6xl '>DEV</h2>
        </div>
        <p className='text-left text-lg mt-2 w-[50%] text-white'>
            {texto}
        </p>
    </div>
  )
}

export default Descripcion