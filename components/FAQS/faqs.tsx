import React,{useState} from 'react'
import Image from 'next/image'
interface Props {
    image: string;
    header: string;
    content: string;
    image2:string;
  }
const Faqs = (props: Props) => {
    const { header, image, content, image2} = props;
    const [isDown, setIsDown] = useState(false);
  return (
    <div>
      <div className="flex">
        <div className="bg-darkLight w-full flex  lg:items-end">
          <div className="py-32">
            <div className="">
              <h1 className="text-white text-4xl font-bold ">Reliable Services You Can Trust</h1>
              <h1 className="mt-3 text-white text-lg">Water Boring Questions Victoria</h1>
              <button className="mt-3 rounded-full bg-darkBlue w-1/3 h-10 text-white">Free Faqs</button>
            </div>
          </div>
          <div className="flex">
            <img src="/img/Group116.png" alt="s" className="w-full" />
          </div>
        </div>
      </div>
      <div className="border border-gray-400">
        <div className="flex mx-40">
          <h1>Home</h1>
          <div className="ml-2">
            <Image src="/svg/Vector(4).svg" width="10px" height="10px" alt="Vector(4)" />
          </div>
          <h1 className="ml-5 text-darkLight">FAQs</h1>
        </div>
      </div>
      <div className='lg:mx-52'>
        <div  className='text-center text-darkBlue font-extrabold  font-Montserrat text-4xl '>
        <h1>FAQ</h1>
        </div>
        <div className='flex'>
            <div className='border border-gray-400 flex justify-between items-center w-1/2 cursor-pointer ' onClick={() => {
          setIsDown(!isDown);
        }}
      >     
            <h1>Will you find water on my property?</h1>
                    <img src={`/svg/${isDown ? 'Vector(4).svg' : 'Vector(4).svg'}`} alt='Vector(4)' className='w-4 h-3 rotate-90 flex items-end content-end ' /> 
            </div> 
        </div>
        <div className={`drop-down${isDown && 'open'} `}>
        {isDown && <p className="border border-gray-400 w-1/2">Yes we can. Here at D.K & E.M Murray we take pride in leaving minimal impact whilst on site whilst
         being environmentally friendly also.</p>}
      </div>
      </div>
      
    </div>
  );
}

export default Faqs