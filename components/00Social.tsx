import Image from 'next/image'
import tg from '../public/img/00Social/tg.svg'
import x from '../public/img/00Social/x.svg'
import tg_purple from '../public/img/00Social/tg_purple.svg'
import x_purple from '../public/img/00Social/x_purple.svg'

export default function Social({ reverse, className }: { reverse?: boolean, className?: string }){
    return(
        <div className={"flex gap-x-1 relative z-50" + " " + className}>
            <a href=''>
                <Image src={ reverse ? x_purple : x} alt="Twitter" className="block w-[30px] xs:w-auto"/>
            </a>
            <a href=''>
                <Image src={ reverse ? tg_purple : tg} alt="Telegram" className="block w-[30px] xs:w-auto"/>
            </a>
        </div>
    )
}
