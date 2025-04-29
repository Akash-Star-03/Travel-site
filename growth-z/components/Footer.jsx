// components/Footer.jsx
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12 px-4 sm:px-8 md:px-16 lg:px-24 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Brand */}
        <div className="flex-1">
          <Image  src="/Darshan Divine (1).png" alt={"Darshan Divine"}   width={"150"} height={"43"} className="text-2xl font-serif font-semibold text-[#551c1c] mb-2"/>

         
          <p>A place which makes your travel easy</p>
        </div>

        {/* Links */}
        <div className="flex flex-1 justify-between gap-6 flex-wrap text-sm">
          <div>
            <h3 className="font-semibold mb-2">About us</h3>
            <ul className="space-y-1">
              <li><a href="#">Our guides</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">FAQ</h3>
            <ul className="space-y-1">
              <li><a href="#">Personal trip</a></li>
              <li><a href="#">Group trip</a></li>
              <li><a href="#">Tour payment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Further information</h3>
            <ul className="space-y-1">
              <li><a href="#">Teams of use</a></li>
              <li><a href="#">Health & safety</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs">
        <p>Copyright 2024 &nbsp; <strong>DarshanDivine, India</strong></p>
        <div className="flex gap-5 mt-4 md:mt-0 md:ml-[-20px]">
          <Image src="/common/image (7).png" alt="Instagram" width={24} height={24} />
          <Image src="/common/image (8).png" alt="Facebook" width={24} height={24} />
          <Image src="/common/image (9).png" alt="YouTube" width={24} height={24} />
          <Image src="/common/image (10).png" alt="LinkedIn" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}
