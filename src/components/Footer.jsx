import React from 'react'
import LinkComp from '../layouts/LinkComp'

const Footer = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center bg-slate-800 pt-24 '>
            <div className='w-full flex flex-col justify-center items-center px-8 gap-12 mb-12 md:flex-row'>
                <div className='w-full flex flex-col text-slate-300 '>
                    <LinkComp
                        to="beranda"
                        text="[#21594E]"
                    >
                        <img src="img/logo_smk.png" />
                    </LinkComp>
                    <p className="mb-2 text-2xl font-bold">Dikembangkan oleh</p>
                    <p>LearningX-Mentor</p>
                    <p>Pacific Century Place Lantai 33</p>
                    <small className="font-thin">untuk bahan ajar LearningX</small>
                </div>
                <div className='w-full flex flex-col gap-3 text-slate-300'>
                    <p className='mb-2 text-xl font-semibold text-white'>Bantuan</p>
                    <LinkComp
                        to="beranda"
                        text="[#21594E]"
                        teks="Laporkan Masalah"
                    />
                    <LinkComp
                        to="beranda"
                        text="[#21594E]"
                        teks="FAQ"
                    />
                    <LinkComp
                        to="beranda"
                        text="[#21594E]"
                        teks="Syarat dan Ketentuan"
                    />
                </div>
                <div className='w-full flex flex-col gap-3 text-slate-300'>
                    <p className='mb-2 text-xl font-semibold text-white'>Layanan dan Pengaduan Konsumen</p>
                    <LinkComp
                        to="beranda"
                        text="[#21594E]"
                        teks="Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga"
                    />
                    <LinkComp
                        to="beranda"
                        text="[#21594E]"
                        teks="Kementerian Perdagangan Republik Indonesia"
                    />
                    <LinkComp
                        to="beranda"
                        text="[#21594E]"
                        teks="Whatsapp: 085311111010 (WA Only)"
                    />
                </div>
            </div>
            <div className="w-full border-t border-slate-700 p-4">
                <div class="flex items-center justify-center ">
                    <p class="inline-block text-white text-base hover:text-[#21594E]">LearningX Copyright © 2024 All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer