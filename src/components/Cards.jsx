import React, { useState } from 'react'

const Cards = (props) => {
    const [copy, setcopy] = useState(false)
    const [first, setfirst] = useState(false)
    return (
        <div
            style={{ background: props.item.background }}
            className='md:w-[250px] w-40  h-[150px] rounded flex items-end gap-2 justify-center transform hover:scale-105 transition duration-300'>
            <button onClick={
                () => {
                    navigator.clipboard.writeText(props.item.css)
                    setcopy(true);
                    setTimeout(() => {
                        setcopy(false)
                    }, 1000);
                }

            } className='text-sm mb-2 bg-black/50 text-white hover:bg-black p-1 rounded'>  {copy ? "Copied!" : "Copy"}</button>
            <button onClick={
                () => {
                    navigator.clipboard.writeText(props.item.tail)
                    setfirst(true);
                    setTimeout(() => {
                        setfirst(false)
                    }, 1000);
                }

            } className='text-sm mb-2 mr-2 bg-black/50 text-white hover:bg-black p-1 rounded'>  {first ? "Copied!" : "Tailwind"}</button>
        </div>
    )
}

export default Cards
