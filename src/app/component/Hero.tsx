'use client'
import Image from "next/image"
import dashbordimg from '../../../public/img/buy-property-header-image.webp'
import { CustumButton } from "./CustumButton"
export const Hero = () => {
    const handeScroll = () => {
        console.log("scroll")
    }
    return (
        <div className="flex items-end">
            <div>
                <h1 className="text-6xl font-semibold">Find , book or rent a car
                    -quickly and easly !
                </h1>
                <p className="text-xl ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <CustumButton
                    title="Explore Cars"
                    containerStyles="bg-blue-700 text-white rounded-full mt-10 p-2"
                    handelClick={handeScroll}
                />
            </div>
            <div>
                <Image alt="img"  src={dashbordimg}/>
            </div>
        </div>
    )
}
