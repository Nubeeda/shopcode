import Layout from "./Layout"
const Contact = () =>{
    return (
        <Layout>
            <header className="mx-auto md:py-16 shadow-lg md:w-[50%] bg-white">
            <img src="./images/contact.avif" className="w-full"/>
            <div className="p-8">
            <form className=" space-y-6">
          <div className="flex flex-col mb-2">
            <label className="font-semibold pb-2">Name</label>
            <input
              required
              name="text"
              type="fullname"
              placeholder="John doe"
              className="border p-2 border-slate-300 rounded"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold pb-2">Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="border p-2 border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold pb-2">Message</label>
            <textarea
              required
              name="message"
              placeholder="Message"
              className="border p-2 border-slate-300 rounded"
              rows={4}
            />
          </div>

          <button className="bg-blue-600 text-white font-semibold w-30 py-2 mb-2 rounded mt-4 hover:bg-rose-600">
            Get Quote
          </button>
        </form>
                
            </div>
            
            </header>
            
        </Layout>
        
    )
}
export default Contact