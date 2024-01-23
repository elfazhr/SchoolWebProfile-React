import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className='rounded-full bg-[#21594E] py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg'>{props.teks}</button>
        </div>
    )
}

export default Button