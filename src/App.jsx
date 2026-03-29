import React, { useCallback, useEffect, useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const [inputVal, setinputVal] = useState(12)
  const [type, settype] = useState("linear")
  const [colors, setcolors] = useState([])

  const generateGradientCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.floor(Math.random() * rgb)
    const hexCode = random.toString(16)
    const colorHex = hexCode.padStart(6, "0");
    return `#${colorHex}`
  }

  const gradientColors = useCallback(() => {
    const Allcolors = [];
    for (let i = 0; i < inputVal; i++) {
      const color1 = generateGradientCode()
      const color2 = generateGradientCode()
      const randomDeg = Math.floor(Math.random() * 360)

      const gradient =
        type === "linear"
          ? `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`
          : `radial-gradient(circle, ${color1}, ${color2})`;

      Allcolors.push({
        background: gradient,
        css: gradient
      });
    }

    setcolors(Allcolors);
  }, [inputVal, type]);


  useEffect(() => {
    gradientColors()
  }, [gradientColors])


  return (
    <div className='md:w-9/12 m-auto'>
      <div className='gap-2 flex-col sm:flex-row  min-h-16  flex justify-between items-center p-2'>
        <h1 className='text-3xl font-bold'>🎨 Color Gradient</h1>
        <div className='space-x-2'>

          <input
            value={inputVal}
            className='p-1 rounded w-24 border-2'
            onChange={(e) => {
              setinputVal(Number(e.target.value))
            }}
          />
          <select
            name="type"
            id="type"
            className='p-1 rounded w-24 border-2'
            onChange={(e) => {
              settype(e.target.value)
            }}
          >
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>
      </div>
      <div className='mt-8 gap-3 flex flex-wrap items-center justify-center'>
        {colors.map((item, index) => {
          return <Cards key={index} item={item} />
        })}
      </div>
    </div>

  )
}

export default App
