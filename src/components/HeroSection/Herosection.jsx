import React from 'react';
import bgShadow from '../../assets/bgShadow.png';
import bgImg from '../../assets/bgMain.png';
const Herosection = () => {
    return (
        <div className='w-11/12 mx-auto bg-black rounded-lg'>
            <div className="hero min-h-screen bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${bgShadow})` }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <img src={bgImg} alt="Background" className="mb-5 rounded-lg mx-auto" />
                        <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 opacity-80">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn bg-[#E7FE29] text-black font-bold outline-2 outline-[#E7FE29]">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Herosection;