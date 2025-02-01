import Button from "@/components/Button"
import Card from "@/components/Card"
 import LocationSelector from "@/components/FrontLanding/LocationSelector"
import { CARCARD } from "@/types/types"
import { Link } from "lucide-react"
import Image from "next/image"
import link from "next/link"


const carDetails: CARCARD[] = [
    {
        name: 'Audi E-Tron GT',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/images/nisan.png',
        heart: true,
        carType: 'Sport',
        icons: true,
    },
    {
        name: 'BMW X5',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/images/bmw23.png',
        heart: false,
        carType: 'Hatchback',
        icons: true,
    },
    {
        name: 'Rolls- Royce Phantom',
        currPrice: '$99.00/',
        oldPrice: '$200.00/',
        cardType: 'mobile',
        image: '/images/phantom.png',
        heart: true,
        carType: 'Sedan',
        icons: true,
    },
    {
        name: 'MG HS',
        currPrice: '$99.00/',
        image: '/images/car2.svg',
        carType: 'Sedan',
        heart: false,
        icons: true,
        oldPrice: '$200.00/',
        cardType: 'mobile',
    },
    {
      name: 'Changan Oshan X7',
      currPrice: '$99.00/',
      image: '/images/oshanx7.png',
      carType: 'SUV',
      heart: false,
      icons: true,
      oldPrice: '$200.00/',
      cardType: 'mobile',
  },
  {
    name: 'Corolla Cross',
    currPrice: '$60.0/',
    image: '/images/toyota1.png',
    carType: 'SUV',
    heart: false,
    icons: true,
    oldPrice: '$200.00/',
    cardType: 'mobile',
},
  
]
const Category = () => {
    return (
        <div className="flex justify-between ">
            <div className="min-w-72 border-t hidden lg:flex flex-col p-6 gap-6">
                <div className="text-xs opacity-50">TYPE</div>

                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Sports <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    SUV <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    MPV <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Sedan <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Coupe <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Hatchback <span className="opacity-50">(12)</span>
                </div>

                <div className="text-xs opacity-50">CAPACITY</div>

                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    2 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    4 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    6 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/images/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    8 Person <span className="opacity-50">(12)</span>
                </div>

                <div className="text-xs opacity-50">PRICE</div>


                <div className="flex gap-2 items-start flex-col">
                    <Image className="w-full" src='/images/seekbar.svg' alt="checkbox-icon" width={100} height={100} />
                    Max. $100.00
                </div>
            </div>
            <div className="md:px-16 px-6 py-8 bg-[#f6f7f9] w-full">
                <LocationSelector currentPage={'category'} />


                <div className="flex justify-start 2xl:justify-center overflow-hidden">
                    <div className="flex gap-8 py-6  max-w-[1308px] flex-wrap">
                        {carDetails.map((obj, key) => (
                            <Card key={key} data={{
                                cardType: 'mobile-now',
                                name: obj.name,
                                currPrice: obj.currPrice,
                                image: obj.image,
                                carType: obj.carType,
                                heart: obj.heart,
                                icons: obj.icons,
                                oldPrice: obj.oldPrice,
                            }} />
                        ))}
                        {carDetails.map((obj, key) => (
                            <Card key={key} data={{
                                cardType: 'mobile-now',
                                name: obj.name,
                                currPrice: obj.currPrice,
                                image: obj.image,
                                carType: obj.carType,
                                heart: obj.heart,
                                icons: obj.icons,
                                oldPrice: obj.oldPrice,
                            }} />
                        ))}
                        {carDetails.map((obj, key) => (
                            <Card key={key} data={{
                                cardType: 'mobile-now',
                                name: obj.name,
                                currPrice: obj.currPrice,
                                image: obj.image,
                                carType: obj.carType,
                                heart: obj.heart,
                                icons: obj.icons,
                                oldPrice: obj.oldPrice,
                            }} />
                        ))}
                    </div>
                </div>


                <div className="flex justify-center mt-12">
                    <div className="flex w-full justify-center relative max-w-[1308px]">
                     <link  href="/rentalForm/CarRecommendationPage" />
                      <button className="bg-[#3563E9] hover:bg-[#213c8f] rounded-[4px] text-white
             p-[20px] font-[600] text-[16px]">
              Show more Car
            </button>
                   
                     
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Category