import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo from '../public/img/00Ticker/logo_black.png'

export default function Ticker({ left, turquoise, classname } : { left?: boolean, turquoise?: boolean, classname?: string }){
    return(
        <div className={`${turquoise ? 'bg-_turquoise' : 'bg-_purple '} ${classname ? classname : ''} relative w-full `}>
            <Marquee autoFill direction={left ? 'right' : 'left'}>
                <div className="flex flex-col justify-center px-1">
                    <Image src={logo} alt="CYBERCAT" className="h-[35px] w-auto"/>
                </div>
            </Marquee>
        </div>
    )
}