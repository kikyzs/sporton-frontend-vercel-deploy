import Image from "next/image";
import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white mt-52">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={144}
          />
          <p className="text-white mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="w-105 grid grid-cols-2 text-white">
          <div className="flex gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Product</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#" className="items-center flex gap-2"><FiInstagram/> Instagram</Link>
            <Link href="#" className="items-center flex gap-2"><FiFacebook/> Facebook</Link>
            <Link href="#" className="items-center flex gap-2"><AiFillTikTok/> Tiktok</Link>
            <Link href="#" className="items-center flex gap-2"><FiYoutube/> Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between">
          <div>SportsOn © 2025 All Rights Reserverd.</div>
          <div className="grid grid-cols-2 w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
