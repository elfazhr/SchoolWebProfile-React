import React from 'react'
import CardComp from '../layouts/CardComp'

const Aktivitas = () => {
    return (
        <div className='min-h-screen w-full bg-slate-200 pt-14 pb-16 dark:bg-slate-800 flex flex-col items-center'>
            <div className='mb-12 max-w-xl text-center flex flex-col items-center px-4'>
                <p className='mb-4 text-3xl font-bold text-[#21594E] dark:text-white md:text-5xl '>Aktifitas Sekolah</p>
                <hr className="border-[3.5px] border-[#21594E] mb-2 w-64" />
                <p className="text-md font-light text-gray-500 md:text-lg">
                    Berdayakan Masa Depan, Wujudkan Prestasi: Aktifitas Sekolah Menginspirasi, Membentuk, dan Membawa Kreativitas Menuju Puncak Keberhasilan!
                </p>
            </div>
            <div className='w-full px-12 flex flex-col gap-2 md:flex-row justify-center md:gap-6'>
                <CardComp img="img/activity/sport.jpg" title="Kejuaraan Nasional" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit cum impedit repellat. Nam, ducimus?" />
                <CardComp scale={110} img="img/activity/graduation.jpg" title="Melangkah ke Dunia Profesional" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit cum impedit repellat. Nam, ducimus?" />
                <CardComp img="img/activity/teamwork.jpg" title="Prestasi Masa Depan" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde velit cum impedit repellat. Nam, ducimus?" />
            
            </div>
        </div>
    )
}

export default Aktivitas