import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';
import { useState } from "react";
const Home = () => {
  const [products, setProducts]= useState(
    [
      {
        title: "men's shirts",
        thumbnail:"/products/a.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/b.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/c.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/d.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/e.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/f.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/g.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/h.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/i.webp",
        price: 35000,
        discount:20,
      },
      {
        title: "men's shirts",
        thumbnail:"/products/j.webp",
        price: 35000,
        discount:20,
      },
    ]
  )
  return (
    <Layout>
      <div>
        <header>
          <Swiper
            slidesPerView={1}
            navigation={true} 
            modules ={[Navigation,Pagination]}
            pagination={true}
            
          >
            <SwiperSlide>
                <img src="/images/p1.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/p2.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/p3.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/p4.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/p5.jpg"/>
            </SwiperSlide>
          </Swiper>
        </header>
        <div className="md:p-16 p-8">
        <h1 className="font-semibold text-3xl text-center">Latest Products</h1>
        <p className="text-gray-500 text-center md:w-[60%] mx-auto mt-3 mb-12">Lorem ipsum dolor sit,elit. Reprehenderit alias eum nostrum nobis eveniet commodi nulla, corrupti earum, pariatur cum. Culpa itaque nobis mollitia laudantium?</p>
          <div className="md:w-[80%] mx-auto md:grid grid-cols-4 gap-8">
         {
          products.map((item,index)=>(
            <div 
            key={index}
            className="shadow-lg bg-white md:mb-0 mb-12"
            >
              <img src={item.thumbnail}
              className="rounded-t-md h-[270px] w-full object-cover"
              />
              <div className="p-4">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <div className="flex gap-2">
              <label className="font-semibold">PKR{item.price-(item.discount*item.price/100)}</label>
              <del>PKR{item.price}</del>
              <p className="text-gray-500">({item.discount}%)</p>
              </div>
              </div>
              <button className="bg-green-600 text-white w-full text-lg rounded p-2 mt-6">Buy Now</button>
            </div>
            
          ))
         }
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
