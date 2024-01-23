import React from 'react'

const CardComp = (props) => {
    return (
        <div className={`w-full bg-white rounded md:w-1/4 p-4 flex flex-col gap-2 shadow-lg md:scale-${props.scale}`}>
            <img src={props.img} className="rounded" />
            <h3 className="mt-1 text-xl font-semibold text-dark ">{props.title}</h3>
            <p className="text-base font-medium text-slate-500">{props.description}</p>
        </div>
    )
}

export default CardComp