import { useState } from "react"
import Layout from "./Layout"
const Category=()=>{
    const [category, setCategory] = useState([
        {
            title:"Electronics",
        },
        {
            title:"Mobiles",
        },
        {
            title:"Men's fashion",
        },
        {
            title:"Women's fashion",
        },
        {
            title:"Child Clothes",
        },
        {
            title:"Vehicles",
        },
    ])
    return(
        <Layout>
             <div className="md:p-16 p-8">
                <div className="md:w-[70%] mx-auto md:grid grid-cols-4 md:gap-16 gap-8">
                {
                    category.map((item,index)=>(
                        <div key={index}
                        className="hover:bg-orange-500 hover:text-white rounded bg-white shadow-lg flex justify-center items-center md:mb-0 mb-12 "
                        >
                            <i className="ri-menu-search-line text-6xl"></i>
                            <h1 className="text-2xl font-bold">{item.title}</h1>
                        </div>
                    ))
                }
                </div>
             </div>
        </Layout>
       
    )
}
export default Category