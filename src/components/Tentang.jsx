import React from 'react'

const Tentang = () => {
    return (
        <div className='min-h-screen w-full bg-slate-200 pt-14 pb-16 dark:bg-slate-800 items-center flex flex-col'>
            <div className='mb-16 max-w-xl text-center'>
                <p className='mb-4 text-3xl font-bold text-[#21594E] dark:text-white md:text-5xl '>Tentang Kami</p>
                <hr className="border-[3.5px] border-[#21594E] my-2 w-64" />
            </div>
            <div className='w-full flex flex-col justify-center px-4 md:flex-row md:w-10/12'>
                <div className='w-full flex flex-col px-8 p-4 gap-4 md:w-1/2'>
                    <p className="text-justify text-slate-500 md:text-lg leading-relaxed dark:text-slate-200">Sekolah Menengah Kejuruan (SMK) adalah salah satu bentuk satuan pendidikan formal yang menyelenggarakan pendidikan kejuruan pada jenjang pendidikan menengah yang mempersiapkan peserta didik terutama untuk bekerja di bidang tertentu. Siswa dapat melanjutkan pendidikan SMK setelah menyelesaikan pendidikan di tingkat Sekolah Menengah Pertama atau sederajat. </p>
                    <img src="img/img1.png" alt="Image" className='overflow-hidden rounded-md shadow-md w-full' />
                </div>
                <div className='w-full flex flex-col justify-center px-8 gap-4 p-3 md:w-1/2'>
                    <img src="img/img2.png" alt="Image" className='overflow-hidden rounded-md shadow-md w-full' />
                    <p className="text-justify  text-slate-500 md:text-md leading-relaxed dark:text-slate-200">Sekolah Menengah Kejuruan LearningX kota Pekanbaru ini merupakan salah satu lembaga pendidikan di Provinsi Riau. Sekolah yang telah berdiri dari tahun 1967 ini telah mencetak ribuan generasi bangsa yang handal dan dapat bekerja di berbagai perusahaan besar baik di dalam negeri maupun mancanegara seperti Equatorial Malaka, Sribayu Perak dll. Sekolah Menengah Kejuruan yang berlokasi di Jl. Dr. Sutomo No. 110 Pekanbaru ini telah membuktikan prestasinya dengan menempati ranking ke 4 dalam SMK kelompok pariwisata se-Indonesia dengan nilai rata-rata 63,3. Teknologi Informasi Web khususnya, menjadi sarana bagi SMK LearningX untuk memberi pelayanan informasi secara cepat, jelas, dan akuntable. </p>

                </div>
            </div>
        </div>
    )
}

export default Tentang