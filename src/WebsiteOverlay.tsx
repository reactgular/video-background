import {VFC} from 'react';
import {BiMenu} from 'react-icons/bi';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

export const WebsiteOverlay: VFC = () => {
    return <div className="flex flex-col absolute w-full h-full z-10 p-10 text-white">
        <div className="flex">
            <div className="text-lg font-bold uppercase">Travel</div>
            <div className="ml-auto text-4xl font-bold uppercase"><BiMenu/></div>
        </div>
        <div className="flex font-bold flex-col my-auto max-w-[38rem] backdrop-blur-[40px] p-4 rounded-3xl">
            <div className="uppercase text-8xl">Never stop</div>
            <div className="uppercase text-5xl mb-6">Exploring the world</div>
            <div className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </div>
            <button className="mr-auto px-6 py-2 bg-white text-lg text-black uppercase rounded-lg font-bold">Explore</button>
        </div>
        <div className="flex text-3xl gap-8 mt-auto">
            <FaFacebookF/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
    </div>;
};
