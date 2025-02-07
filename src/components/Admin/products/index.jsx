import { useState } from "react"
import Layout from "../Layout"
const Products = () =>{
    const [products, setProducts] = useState([
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/a.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/b.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/c.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/d.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/e.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/f.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/g.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/h.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/i.webp"
        },
        {
            title:"Men's shirts slim blue",
            price:3500,
            discount: 20,
            description:"this is best shirt available in online market",
            image:"/products/j.webp"
        },
    ])
    return(
        <Layout>
            <div>
            <h1 className="text-lg font-semibold pb-3">Products</h1>
            <div className="grid md:grid-cols-4 gap-8 ">
               {
                products.map((item,index)=>(
                    <div key={index} className="bg-white shadow-lg rounded-md">
                        <img src={item.image}
                        className="rounded-t-md h-[270px] w-full object-cover"
                        />
                        <div className="p-4">
                        <h1 className="text-md capitalize font-semibold">{item.title}</h1>
                        <p className="text-gray-500">{item.description.slice(0,50)}</p>
                        <div className="flex gap-2 mt-1">
                            <p>PKR{item.price - (item.price*item.discount)/100}</p>
                            <del>{item.price}</del>
                            <label className="text-gray-600 ">({item.discount}% Off)</label>
                        </div>
                        </div>
                        
                    </div>
                ))
               }
            </div>
            </div>
        </Layout>
        
    )
    }
    export default Products