import Image from "next/image";
import mission from '../public/img/03Mission/mission.png'
import cat from '../public/img/03Mission/cat.png'
import cat_mobile from '../public/img/03Mission/cat_mobile.png'

export default function Mission(){
    return(
        <section id="03Mission" className="_section mt-[9%]">
            <div className="_wrapper">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-2/3">
                        <Image className="block mx-auto md:mx-0" src={mission} alt="MISSION"/>
                        <div className="mt-5 md:mt-0 bg-_turquoise py-16 _text_to_30px text-[#1C1C1C]">
                            The Сybercat memtoken community is growing at an incredible pace. Using DEFI financial instruments, we will show the whole world that cyber cats are cooler than any dogs, SHIBE, DOGE, etc.
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-start">
                        <Image className="hidden md:block aspect-[595/450]" src={cat} alt="cybercat"/>
                        <Image className="md:hidden" src={cat_mobile} alt="cybercat"/>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}