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
          <hr className="text-gray-300 my-6" />
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
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Profile;
