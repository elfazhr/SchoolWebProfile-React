import React from 'react'
import Button from '../layouts/Button'

const Beranda = () => {
    return (
        <div className='pt-36 w-full min-h-screen flex flex-col px-4 dark:bg-[#0f172a] md:flex-row items-center justify-center'>
            <div className='w-full md:w-1/2 justify-center px-4'>
                <p className='text-4xl font-bold text-gray-800 dark:text-slate-200 mb-10'>Selamat Datang Calon Siswa Baru
                    <span className='text-[#21594E] font-bold text-4xl block'> SMK LearningX </span></p>
                <p className="mb-7 leading-relaxed text-slate-500">Sekolah Menengah Kejuruan (SMK) adalah salah satu bentuk
                    satuan pendidikan formal yang menyelenggarakan pendidikan kejuruan pada jenjang pendidikan menengah yang
                    mempersiapkan peserta didik terutama untuk bekerja di bidang tertentu. Siswa dapat melanjutkan pendidikan
                    SMK setelah menyelesaikan pendidikan di tingkat Sekolah Menengah Pertama atau sederajat.</p>
                <Button teks="Pelajari Selengkapnya" />
            </div>
            <div className='w-full md:w-1/2 justify-center mt-8' >
                <img className="object-cover overflow-hidden mb-4" src="img/anakSMK.png" alt="Image" />
            </div>
        </div>
    )
}

export default Beranda