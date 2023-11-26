

const InternShip = () => {
    return (
        <div className="text-center my-6">
            <h2 className="text-3xl font-bold text-gray-600 text-center my-6">We Offer InternShip</h2>
            <h3 className="text-xl font-bold text-gray-600 text-center my-4">
                You will interrested in internship please connect us
            </h3>
            <div  className="bg-slate-300 lg:max-w-lg w-[80%] md:w-[75%] lg:w-[85%]  p-8 rounded-lg shadow-lg mx-auto">

             <h1 className="lg:text-4xl md:text-2xl font-extrabold text-center text-gray-600  mb-6">
                InternShip Form
            </h1>
            <form className="space-y-4 text-left">
                <div>
                    <label className="block text-black lg:text-lg md:text-base font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div>
                    <label className="block text-black lg:text-lg md:text-base   font-medium">Photo URL</label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div>
                    <label className="block text-black lg:text-lg md:text-base font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div>
                    <label className="block text-black lg:text-lg md:text-base  font-medium">Address</label>
                    <input
                        type="text"
                        name="password"
                        placeholder="Address"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div>
                    <label className="block text-black lg:text-lg md:text-base  font-medium">Phone Number</label>
                    <input
                        type="text"
                        name="password"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="text-center">
                    <button className=" bg-slate-400 hover:bg-slate-700 text-black lg:text-xl font-semibold py-3 px-6 rounded-xl transition duration-300 w-48">
                        Connect Us
                    </button>
                </div>
            </form>
            </div>   
        </div>
    );
};

export default InternShip;