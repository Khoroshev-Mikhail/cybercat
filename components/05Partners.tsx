import Image from "next/image";
import partners from "../public/img/05Partners/partners.png"
import partner_1 from "../public/img/05Partners/1.png"
import partner_2 from "../public/img/05Partners/2.png"
import partner_3 from "../public/img/05Partners/3.png"
import partner_4 from "../public/img/05Partners/4.png"
import partner_5 from "../public/img/05Partners/5.png"
import partner_6 from "../public/img/05Partners/6.png"


export default function Partners(){
    return(
        <section id="05Partners" className="_section">
            <div className="_wrapper flex flex-col">
                <Image className="mx-auto _header" src={partners} alt="PARTNERS"/>
            </div>
            <div className="mt-9 flex flex-row flex-wrap justify-between gap-y-10">
                <div className="flex flex-col justify-center w-1/2 md:w-1/3">
                    <Image className="w-[70%] mx-auto" src={partner_1} alt=""/>
                </div>
                <div className="flex flex-col justify-center w-1/2 md:w-1/3">
                    <Image className="w-[70%] mx-auto" src={partner_2} alt=""/>
                </div>
                <div className="flex flex-col justify-center w-1/2 md:w-1/3">
                    <Image className="w-[70%] mx-auto" src={partner_3} alt=""/>
                </div>
                <div className="flex flex-col justify-center w-1/2 md:w-5/12">
                    <Image className="w-[70%] mx-auto md:ml-auto md:pr-[5%]" src={partner_4} alt=""/>
                </div>
                <div className="flex flex-col justify-center w-1/2 md:w-2/12">
                    <Image className="w-1/4 md:w-[60%] mx-auto" src={partner_5} alt=""/>
                </div>
                <div className="flex flex-col justify-center w-1/2 md:w-5/12">
                    <Image className="w-[70%] mx-auto md:mr-auto md:pl-[5%]" src={partner_6} alt=""/>
                </div>
            </div>
        </section>
    );
}