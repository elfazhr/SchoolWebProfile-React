import React from 'react'

const Fasilitas = () => {
    return (
        <div className='min-h-screen w-full px-4 bg-[#21594E] pt-36 pb-16 items-center flex flex-col'>
            <div className='w-full px-4 mb-16 max-w-xl text-center flex flex-col items-center'>
                <p className="mb-4 text-3xl font-bold text-amber-600 dark:text-white md:text-2xl ">Fasilitas Sekolah</p>
                <hr className="border-[3.5px] border-amber-600 w-64 mb-2 md:hidden" />
                <p className="mb-4 text-slate-200 text-4xl font-semibold">Fasilitas Sekolah SMK LearningX</p>
                <p className="text-md font-light text-slate-200 md:text-lg">
                    SMK LearningX Menyediakan Fasilitas Terbaik Bagi Siswa Mendukung Pembelajaran
                </p>
            </div>
            <div className='w-full'>
                <img src="img/facility.png" />
            </div>
        </div>
    )
}

export default Fasilitas