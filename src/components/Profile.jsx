import Layout from "./Layout";
const Profile = () => {
  return (
    <Layout>
      <div>
        <div className="mx-auto md:py-16 w-5xl shadow-2xl p-8 rounded-md">
          <div className="flex p-6 gap-2 ">
            <i className="ri-user-line text-4xl"></i>
            <h1 className="text-4xl font-semibold">Profile </h1>
          </div>
          <hr className="text-gray-300 my-6 " />
          <div className="mx-auto w-24 h-24 relative mb-6">
            <img src="/images/ava.png" className="w-24 h-24"/>
            <input type="file" accept="image/*" className="h-full w-full absolute left-0 top-0 opacity-0"/>
          </div>
          <form className="grid grid-cols-2">
            <div className="flex flex-col">
            <label className="font-semibold mb-2">FullName</label>
            <input 
            required
            type="text"
            value="Nubeeda Zameer"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <div className="flex flex-col">
            <label className="font-semibold mb-2">Email</label>
            <input 
            type="email"
            value="Nubeeda@gmail.com"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <div className="flex flex-col my-3">
            <label className="font-semibold mb-2">Mobile</label>
            <input 
            type="number"
            value="03042880843"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <div/>
             <div className="flex flex-col my-3 col-span-2">
            <label className="font-semibold mb-2">Area/street/vill</label>
            <input 
            name="Address"
            type="text"
            value="Street 12 madina town khanpur"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <div className="flex flex-col my-3">
            <label className="font-semibold mb-2">City</label>
            <input 
            name="city"
            type="text"
            value="khanpur"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <div className="flex flex-col my-3">
            <label className="font-semibold mb-2">State</label>
            <input 
            name="state"
            type="text"
            value="Punjab"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <div className="flex flex-col my-3">
            <label className="font-semibold mb-2">Country</label>
            <input 
            name="country"
            type="text"
            value="Pakistan"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <div className="flex flex-col my-3">
            <label className="font-semibold mb-2">PostalCode</label>
            <input 
            name="postalcode"
            type="number"
            value="64100"
            className="border border-gray-300 w-96 rounded p-2"
             />
             </div>
             <button className="px-4 py-2 rounded bg-rose-600 text-white w-fit hover:bg-green-600">
             <i className="ri-save-line mr-2"></i>
             Save
             </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Profile;
