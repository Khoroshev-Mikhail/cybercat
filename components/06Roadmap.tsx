import Image from "next/image";
import roadmap from '../public/img/06Roadmap/roadmap.png';
import { DRUK_CYR } from "@/pages/_app";

export default function Roadmap(){
    return(
        <section id="06Roadmap" className="_section relative">
            
            <div className="absolute z-30 w-1/2 lg:w-full h-full bg-contain lg:bg-auto bottom-0 -left-0  bg-left-bottom bg-no-repeat bg-[url('/img/06Roadmap/lines_left.png')]"></div>
            <div className="absolute z-30 w-1/2 lg:w-full h-full bg-contain lg:bg-auto top-0 -right-0  bg-right-top bg-no-repeat bg-[url('/img/06Roadmap/lines_right.png')]"></div>

            <div className="_wrapper flex flex-col">
                <div className="w-full">
                    <Image className="w-full" src={roadmap} alt="ROADMAP" />
                </div>
                <div className="text-white text-[30px] grid grid-cols-12 grid-rows-4 md:grid-rows-12 ">
                    <div className="col-span-12 md:col-span-6 row-span-1 md:row-span-6">
                        <p className={`${DRUK_CYR} text-[50px] text-_turquoise `}>PHASE 1</p>
                        <ul className="pl-4 list-image-[url(/img/06Roadmap/list_images.svg)]">
                            <li className="pl-2">Start Cybercat AI </li>
                            <li className="pl-2">Presale </li>
                            <li className="pl-2">Listing on DEX </li>
                            <li className="pl-2">5555 holders</li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 row-span-1 md:row-span-6">
                        <p className={`${DRUK_CYR} text-[50px] text-_turquoise `}>PHASE 1</p>
                        <ul className="pl-4 list-image-[url(/img/06Roadmap/list_images.svg)]"> 
                            <li className="pl-2">Listed on Coinmarketcap  </li>
                            <li className="pl-2">Listed on</li>
                            <li className="pl-2">CoingeckoPartnership</li>
                            <li className="pl-2">55555 holders</li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 row-span-1 md:row-span-6">
                        <p className={`${DRUK_CYR} text-[50px] text-_turquoise `}>PHASE 1</p>
                        <ul className="pl-4 list-image-[url(/img/06Roadmap/list_images.svg)]">
                            <li className="pl-2">555555 holders</li>
                            <li className="pl-2">Listing CEX</li>
                            <li className="pl-2">New Partnerships </li>
                            <li className="pl-2">Global marketing  </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 row-span-1 md:row-span-6">
                        <p className={`${DRUK_CYR} text-[50px] text-_turquoise `}>PHASE 1</p>
                        <ul className="pl-4 list-image-[url(/img/06Roadmap/list_images.svg)]">
                            <li className="pl-2">New Listing CEX </li>
                            <li className="pl-2">Focus on global development </li>
                            <li className="pl-2">We're catching up with SHIBA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}