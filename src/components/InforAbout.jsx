import React from 'react'

const InforAbout = ({Avturl ,Title , Description }) => {
  return (
    <div className='flex flex-col '>
        <img src={Avturl} alt={Avturl} />
        <h2 className='font-bold text-white text-2xl '> {Title} </h2>
        <div className="font-medium text-white text-sm:2xl text-xl"> {Description}</div>
    </div>
  )
}

export default InforAbout
