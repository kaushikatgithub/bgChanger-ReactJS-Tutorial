import { useState } from 'react'

function App() {
  const [color, setColor] = useState("LawnGreen");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "Tomato"}} 
            onClick={() => setColor("Tomato")}
          > 
            Tomato 
          </button>
          
          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "Orange"}}
            onClick={() => setColor("Orange")}
          > 
            Orange 
          </button>


          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "DodgerBlue"}}
            onClick={() => setColor("DodgerBlue")}
          > 
            DodgerBlue 
          </button>

          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "MediumSeaGreen"}}
            onClick={() => setColor("MediumSeaGreen")}
          > 
            MediumSeaGreen 
          </button>

          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "Gray"}}
            onClick={() => setColor("Gray")}
          > 
            Gray 
          </button>

          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "SlateBlue"}} 
            onClick={() => setColor("SlateBlue")}
          > 
            SlateBlue 
          </button>

          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "Violet"}} 
            onClick={() => setColor("Violet")}
          > 
            Violet 
          </button>

          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "LightGray"}} 
            onClick={() => setColor("LightGray")}
          > 
            LightGray 
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
