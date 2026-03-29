import React, { useState } from 'react'

const Cards = (props) => {
    const [copy, setcopy] = useState(false)
    return (
        <div
            style={{ background: props.item.background }}
            className='w-[250px] h-[150px] rounded relative transform hover:scale-105 transition duration-300'>
            <button onClick={
                () => {
                    navigator.clipboard.writeText(props.item.css)
                    setcopy(true);
                    setTimeout(() => {
                        setcopy(false)
                    }, 1000);
                }

            } className='absolute bottom-3 right-3 bg-black/50 text-white hover:bg-black p-1 rounded'>  {copy ? "Copied!" : "Copy"}</button>
        </div>
    )
}

export default Cards
