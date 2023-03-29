import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='mx-auto bg-[#1d2939] pt-12'>
        <div className='px-6 md:flex justify-around'>
            <div>
                <div className='flex items-center md:w-[324px] '>
                    <Image src="/img/navbar/logo.png" alt='logo' width={51} height={58} />                
                    <p className='text-2xl font-semibold text-white pl-3 leading-6'>
                        Yayasan Daar-El Sakinah
                    </p>
                </div>
                <div className='text-base font-normal text-[#9c9c9c] pt-6 md:w-[324px]'>
                    <p >
                        Yayasan Daar-El Sakinah Merupakan Suatu Lembaga .........
                    </p>
                </div>
            </div>

            <div>
                <p className='text-[28px] font-bold text-white pt-14 pb-3 md:pb-5 md:pt-0'>
                    Social Media
                </p>
                <div className='pb-10 py-4'>
                    <div className='text-sm text-[#9c9c9c] font-normal '>
                        <Link href="https://id-id.facebook.com/smkn2sukabumi/" target={"_blank"} className='flex gap-2'>
                        <Image src="/img/footer/fb.png" alt='fb' width={22} height={22}s />
                            Nama Fb Dar-El
                        </Link>
                    </div>
                    <div className='text-sm text-[#9c9c9c] font-normal py-4 '>
                    <Link href="https://www.instagram.com/dokumenter_smkn2_smi/?hl=id" target={"_blank"} className='flex gap-2'>
                        <Image src="/img/footer/ig.png" alt='ig' width={22} height={22}s />
                            IG dar-el
                        </Link>
                    </div>
                    <div className='text-sm text-[#9c9c9c] font-normal '>
                        <Link href="https://twitter.com/smkn2_smi?lang=id" target={"_blank"} className='flex gap-2'>
                        <Image src="/img/footer/twiter.png" alt='twiter' width={22} height={22}s />
                            Twiter Dar-El
                        </Link>
                    </div>
                    <div className='text-sm text-[#9c9c9c] font-normal py-4 ' >
                    <Link href="https://www.youtube.com/@smkn2tvchannel636" target={"_blank"} className='flex gap-2'>
                        <Image src="/img/footer/yt.png" alt='yt' width={22} height={22}s />
                            Youtube Dar-El
                        </Link>
                    </div>

                </div>
            </div>


            <div className='pb-16'>
                <p className='text-[28px] font-bold text-white py-5 md:pb-5 md:py-0'>
                    Kontak
                </p>
                <div className='flex gap-2 items-center font-normal text-base text-[#9c9c9c]'>
                    <Image src="/img/footer/gmail.png" alt='email' width={21} height={10} />
                    <p>Masukan Email yayasan</p>
                </div>
                <div className='flex gap-2 items-center font-normal text-base text-[#9c9c9c] py-3'>
                    <Image src="/img/footer/telepon.png" alt='Telepon' width={19} height={19} />
                    <p>No Yayasan </p>
                </div>

            </div>
        </div>
    </div>
  )
}
