

const Contact = () => {
    return (
        <div>

            <h2 className="lg:text-4xl md:text-3xl text-xl font-extrabold text-center mt-3">CONTACT US</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="Message" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-slate-500 font-extrabold text-xl">SEND</button>
                            </div>
                        </form>
                    </div>
                    <div >
                        <p className="font-bold text-2xl">Corporate Office: (937) 306-7508</p>
                        <p className="font-bold text-2xl">Address: 3131 Elbee Road Moraine, Ohio 45439</p>
                        <h2 className="text-xl font-medium">ForHuman Resources, contact:</h2>
                        <h3 className="font-normal text-lg">Melissa JonesDirector,<br /> Human Resources</h3>
                        <h2 className="text-xl font-medium">For Staffing Inquiries, contact:</h2>
                        <h3 className="font-normal text-lg">Mike McGuirk <br />
                            Recruiting Manager</h3>
                        <h2 className="text-xl font-medium">For Program Information, contact:</h2>
                        <h3 className="font-normal text-lg"> David Jones <br />
                            Director of Programs</h3>
                        <h2 className="text-xl font-medium"> For Security Questions, contact:</h2>
                        <h3 className="font-normal text-lg"> Teresa Yost
                            VP, Proposal Development/Facility Security Officer</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;