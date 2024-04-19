import { COOLVETICA, DRUK_CYR } from "@/pages/_app";
import Image from "next/image";
import Social from "./00Social";
import cat from '../public/img/00General/cat.png'

export default function Footer(){
    return(
        <section id="07Footer" className="_section ">
            <div className="_wrapper bg-_purple">
                <div className="relative w-full flex flex-row justify-end">
                <Image src={cat} className="absolute z-50 bottom-0 left-0 w-1/3 lg:w-1/4 scale-x-[-1]" alt=""/>
                    {/* <div className="w-1/4 h-full">
                        <Image src={cat} className="w-full h-full scale-y-[1.5] scale-x-[-1.5]" alt=""/>
                    </div> */}
                    <div className="w-3/4 flex flex-col justify-between py-[70px]">
                        <h2 className={`${DRUK_CYR} w-full mx-auto text-center uppercase`}>
                            DO YOU WANT TO 
                            <span className="text-_turquoise">GROW</span>
                            WITH US
                        </h2>
                        <div className={`${COOLVETICA} w-full text-center text-white`}>
                            Come to our community!
                        </div>
                        <Social reverse className="mx-auto"/>
                    </div>
                </div>
            </div>
        </section>
    );
}