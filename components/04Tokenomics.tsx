import Image from "next/image";
import tokenomics from '../public/img/04Tokenomics/tokenomics.png'
import cats_coins from '../public/img/04Tokenomics/cats_coins.png'

export default function Tokenomics(){
    return(
        <section id="04Tokenomics" className="_section relative pt-24 pb-28 md:pb-60 overflow-hidden">

            <div className="absolute -top-[0%] -left-[10%] w-[120%] h-[120%] bg-center bg-contain bg-no-repeat bg-[url('/img/04Tokenomics/grid.png')]"></div>
            
            <div className="absolute z-30 w-1/2 lg:w-full bg-contain lg:bg-auto h-full bottom-0 -left-0  bg-left-bottom bg-no-repeat bg-[url('/img/04Tokenomics/lines_left.png')]"></div>
            <div className="absolute z-30 w-1/2 lg:w-full bg-contain lg:bg-auto h-full top-0 -right-0 bg-right-top bg-no-repeat bg-[url('/img/04Tokenomics/lines_right.png')]"></div>

            <div className="_wrapper flex flex-col ">
                <Image className="block mx-auto" src={tokenomics} alt="TOKENOMICS"/>
                
                <div className="flex flex-col">
                    <div className="mx-auto text-center text-white">777 000 000 CYBERCAT</div>
                    <Image className="block mx-auto" src={cats_coins} alt="CYBERCAT's COINS"/>
                </div>
                
                <div className="flex flex-col uppercase text-white [&>div>div]:border-2">
                    <div className="w-full flex flex-col justify-center md:flex-row">
                        <div className="w-full md:w-1/3 flex justify-between">
                            <div>presale</div>
                            <div className="text-_purple">44%</div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-between">
                            <div>liquidity</div>
                            <div className="text-_purple">22%</div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-between">
                            <div>marketing</div>
                            <div className="text-_purple">12%</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center md:flex-row">
                        <div className="w-full md:w-1/3 flex justify-between">
                            <div>cex</div>
                            <div className="text-_purple">12%</div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-between">
                            <div>for cat food</div>
                            <div className="text-_purple">10%</div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto text-center text-white">
                    CYBERCAT Token SOL:<br className="hidden md:"/> <span className="text-_purple">xxxxxxxxxxxxxxx</span>
                </div>
            </div>
        </section>
    );
}