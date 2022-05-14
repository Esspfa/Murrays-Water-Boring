import React from 'react'
import Button from './button'
interface Props {
   heading:string
   paragraph:string
   clickme:string
   src:string;
  }
export const Header = (props: Props) => {
    const {heading,paragraph,clickme,src}=props
  return (
    <div className="bg-lightBlue w-full lg:flex">
    <div className="">
      <div className="px-4 sm:text-center justify-center">
        <h1 className="text-white font-black lg:text-5xl font-montserrat ">{heading}</h1>
        <h1 className=" text-white text-lg">{paragraph}</h1>
        <Button classes="rounded-full bg-darkBlue  h-10 text-white">{clickme}</Button>
      </div>
    </div>
    <div className="">
      <img src={src} alt="s" className="w-full" />
    </div>
    </div>
  )
}
export default Header;