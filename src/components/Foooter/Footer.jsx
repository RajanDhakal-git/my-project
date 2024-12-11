

const Footer = () => {

    return (
        <div className='lg:px-20 bg-black py-20'>

            <div className='grid  grid-cols-1  md:grid-cols-3  lg:grid-cols-4 gap-7'>
                <div className="text-center">
                <h1 className="font-bold text-xl mb-5">FOREX</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad, a eaque officiis eligendi blanditiis odio necessitatibus.</p>
                </div>
                <div className=" flex flex-col gap-4 px-10">
                    <h1 className="font-bold text-xl">Navigate</h1>
                    {[" Advertisers", "Developers","Resources","Company", "Connect "].map((item, indx) => {
                            return (
                                <div key={indx}>{item}</div>
                            )
                        })}
                </div>
                <div>
                <div className=" flex flex-col gap-4 px-10">
                    <h1 className="font-bold text-xl">PRIVACY & TOS</h1>
                    {[" Advertiser Agreement", "Acceptable Use Policy","Privacy Policy","Technology Privacy","Developer Agreement"].map((item, indx) => {
                            return (
                                <div key={indx}>{item}</div>
                            )
                        })}
                </div>
                </div>
                <div>
                <div className=" flex flex-col gap-4 px-10">
                    <h1 className="font-bold text-xl">Phone</h1>
                    {[" Mailing Address:xx00 E. Union Ave", "Suite 1100. Denver, CO 80237","+977 98000000","support@yourdomain.com"].map((item, indx) => {
                            return (
                                <div key={indx}>{item}</div>
                            )
                        })}
                </div>
                </div>
            </div>

        </div>
    )
}

export default Footer