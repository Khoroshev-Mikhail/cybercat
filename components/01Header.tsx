import Image from "next/image";
import Social from "./00Social";
import burger from '../public/img/01Header/burger.svg'
import cybercat_ai from '../public/img/01Header/cybercat_ai.png'
import cat from '../public/img/00General/cat.png'
import { COOLVETICA } from "@/pages/_app";

export default function Header(){
    return(
        <section id="01Header" className="_section relative overflow-hidden p-1 md:p-2 bg-_purple ">
            <div className="bg-_black rounded-2xl md:rounded-none bg-[url('/img/01Header/bg.png')] bg-no-repeat bg-center bg-cover">
                <div className="absolute z-50 opacity-80 w-full md:w-1/2 h-full bottom-0 right-0 bg-right-bottom bg-contain bg-no-repeat bg-[url('/img/01Header/angle.png')]"></div>
                <div className="absolute z-50 opacity-70 w-full md:w-1/2 h-full top-0 left-0 bg-right-bottom bg-contain bg-no-repeat scale-x-[-1] scale-y-[-1] bg-[url('/img/01Header/angle.png')]"></div>
                
                <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-left bg-contain bg-no-repeat bg-[url('/img/01Header/lines_left.png')]"></div>
                <div className="hidden md:block absolute top-0 right-0 w-full h-full bg-right bg-contain bg-no-repeat bg-[url('/img/01Header/lines_right.png')]"></div>
                <div className="md:hidden absolute z-50 opacity-80 bottom-[20%] -left-[28%] w-full h-[70%] bg-left bg-contain bg-no-repeat bg-[url('/img/01Header/lines_left_mobile.png')]"></div>
                <div className="md:hidden absolute z-50 opacity-80 -top-[13%] -right-[53%] w-2/3 h-full bg-right bg-contain bg-no-repeat bg-[url('/img/01Header/lines_right_mobile.png')]"></div>


                <div className="_wrapper _header_inner_shadow">
                    <div className="flex flex-row w-full justify-between md:justify-end py-4 md:py-8 xl:py-10">
                        <Social className="md:hidden"/>
                        <Image className="w-[39px] xs:w-auto block" src={burger} alt="menu" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-[55%] flex flex-col pl-[4%]">
                            <Social className="hidden md:flex md:pt-[5%] lg:pt-[10%] xl:pt-[14%]"/>
                            <Image className="mt-[4%] block w-auto md:-ml-[10%]" src={cybercat_ai} alt="CYBERCAT AI" />
                            {/* Уменьшить толщину шрифта */}
                            <div className={`${COOLVETICA} mt-[4%] w-3/4 md:w-2/3 leading-none mx-auto md:mx-0  text-white text-center md:text-left text-[16px] xs:text-[22px] sm:text-[20px] md:text-[22px] lg:text-[24px]`}>Cybercat is a rapidly growing community striving to become <span className="text-_purple">one of the most popular in the crypto world</span></div>
                            <div className="mt-[3%] md:mt-[6%] flex justify-center gap-x-2 md:justify-start pt-3 xs:pt-4 sm:pt-5 md:pt-7 lg:pt-10 xl:pt-16">
                                <div className="relative">
                                    <div className="absolute z-10 top-0 left-0 w-full h-full -skew-x-12 bg-_turquoise before:block before:h-full before:border-black before:border-2 "></div>
                                    <div className="absolute z-20 top-0 left-0 w-full h-full -skew-x-12  before:block before:-mr-[2px] before:-mt-[2px] before:h-full before:border-white before:border-t-2 before:border-r-2"></div>
                                    <a className="px-4 py-2 relative z-40 md:py-7.5 md:px-[70px] block " href="#"> PRESALE </a>
                                </div>
                                <div className="relative">
                                    <div className="absolute z-10 top-0 left-0 w-full h-full -skew-x-12 bg-_purple before:block before:h-full before:border-black before:border-2"></div>
                                    <div className="absolute z-20 top-0 left-0 w-full h-full -skew-x-12  before:block before:-mr-[2px] before:-mt-[2px] before:h-full before:border-_turquoise before:border-t-2 before:border-r-2"></div>
                                    <a className="px-4 py-2 relative z-40 md:py-7.5 md:px-[70px] block" href="#">WHITEPAPER</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="relative w-full md:w-[45%]">
                            <div className="absolute w-[150%] h-[150%] left-[-20%] md:left-[-30%] top-[-25%] md:top-[-25%] bg-center bg-contain bg-no-repeat bg-[url('/img/01Header/eclipse.png')]"></div>
                            <Image className="block md:-mt-[10%] pl-[15%] md:pl-0 relative z-40" src={cat} alt="Cybercat" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}