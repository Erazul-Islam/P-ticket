const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img className="ml-56" src="https://i.ibb.co/bzYs6dq/banner.png" alt="" />
                <p className="text-4xl absolute lg:bottom-80 lg:left-[550px] text-white font-bold">End to End Travel with Green Line</p>
                <button className="btn absolute bottom-64 border-none rounded lg:left-[750px] text-black bg-[#1DD100]">Buy Ticket</button>
                <div className="flex gap-4 absolute left-[500px]">
                    <div className="flex pt-3 pl-2 bg-white w-52 h-20 rounded-2xl gap-2 border-4 border-l-0 border-r-0 border-t-0 border-indigo-200 border-b-[#1DD100]">
                        <img className="w-12 mt-1 h-12" src="https://i.ibb.co/N2hqc80/people.png" alt="" />
                        <div>
                            <p className="font-bold text-black text-2xl">500K+</p>
                            <span>Registered Users</span>
                        </div>
                    </div>
                    <div className="flex pt-3 pl-2 bg-white w-52 h-20 rounded-2xl gap-2 border-4 border-l-0 border-r-0 border-t-0 border-indigo-200 border-b-[#1DD100]">
                        <img className="w-12 mt-1 h-12" src="https://i.ibb.co/QnpqN7x/ticket-cupon.png" alt="" />
                        <div>
                            <p className="font-bold text-black text-2xl">1.7Lacks</p>
                            <span>Tickets Sold</span>
                        </div>
                    </div>
                    <div className="flex pt-3 pl-2 bg-white w-52 h-20 rounded-2xl gap-2 border-4 border-l-0 border-r-0 border-t-0 border-indigo-200 border-b-[#1DD100]">
                        <img className="w-12 mt-1 h-12" src="https://i.ibb.co/gFcBqWz/stoppage.png" alt="" />
                        <div>
                            <p className="font-bold text-black text-2xl">80K+</p>
                            <span>Rental Partners</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;