import image from '../../public/image.avif'

export default function Home() 
{
  return (
    <>
      <div className="max-w-[1320px]">
        <h1>Featured Products</h1>
      </div>

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-[20px]"> 
        <div className='text-center shadow-lg rounded'>
          <div className='overflow-hidden'>
            <Image className="hover:scale-125 duration-1000" src={image} width="250" height="250" />
            <h3>ABC Jewellery Shop</h3>
            <p>Rs 80000</p>
          </div>
        </div>

        <div className='text-center shadow-lg rounded'>
          <div className='overflow-hidden'>
            <Image className="hover:scale-125 duration-1000" src={image} width="250" height="250" />
            <h3>ABC Jewellery Shop</h3>
            <p>Rs 80000</p>
          </div>
        </div>

        <div className='text-center shadow-lg rounded'>
          <div className='overflow-hidden'>
            <Image className="hover:scale-125 duration-1000" src={image} width="250" height="250" />
            <h3>ABC Jewellery Shop</h3>
            <p>Rs 80000</p>
          </div>
        </div>

        <div className='text-center shadow-lg rounded'>
          <div className='overflow-hidden'>
            <Image className="hover:scale-125 duration-1000" src={image} width="250" height="250" />
            <h3>ABC Jewellery Shop</h3>
            <p>Rs 80000</p>
          </div>
        </div>
      </div>
    </>
  )
}
