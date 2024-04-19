import Image from "next/image";
import cybercat from "../public/img/02Cybercat/cybercat.png"
import Ticker from "./00Ticker";

export default function Cybercat(){
    return(
        <section id="02Cybercat" className="_section relative pb-[5%]">
            <div className="absolute z-10 left-0 bottom-[4%] w-full h-[10%] bg-left bg-no-repeat bg-[url('/img/02Cybercat/line.png')]"></div>
            <div className="absolute z-10 left-0 top-[25%] w-full h-[10%] bg-left bg-no-repeat bg-[url('/img/02Cybercat/line.png')] scale-x-[-1]"></div>
            <div className="absolute -z-50 left-0 -top-[0%] w-full h-[200%] bg-left bg-contain bg-no-repeat bg-[url('/img/00General/eclipse_purple.png')]"></div>
            <div className="_wrapper relative">
                

                <div className="flex flex-col mx-auto gap-y-10  _text_to_30px">
                    <Image className="mx-auto" src={cybercat} alt="CYBERCAT"/>
                    <div className="flex flex-col md:flex-row gap-x-8">
                        <div className="relative md:w-1/2 w-full text-white text-center ">
                            <div className="absolute aspect-[397/20] w-[70%] left-[15%] bg-cover md:-top-[15%] -top-[9%] bg-no-repeat bg-center bg-[url(/img/02Cybercat/arrows.png)]"></div>
                            In the distant future, humanity colonized the moon, Cybercat, with unique cybernetic abilities, discovered an <span className="text-_purple">ancient computer terminal</span> on an abandoned space station.
                        </div>
                        <div className="relative md:w-1/2 w-full text-white text-center">
                            <div className="absolute aspect-[397/20] w-[70%] right-[15%] bg-cover md:-top-[15%] -top-[9%] bg-no-repeat bg-center bg-[url(/img/02Cybercat/arrows.png)] scale-x-[-1]"></div>
                            Having restored the technology of opening a portal to a parallel universe, Cybercat went through it and found himself in a world where <span className="text-_purple">technology and magic</span> combined.
                        </div>
                    </div>
                    <div className="w-full text-_turquoise text-center bg-center bg-cover bg-no-repeat ">
                        When he returned, he brought with him a unique code written in an ancient programming language. After spending years deciphering this code, our team created the CyberCat AI model, cyber consciousness, which gave the world a new token in the Solana blockchain.
                    </div>
                </div>
            </div>
        </section>
    );
}