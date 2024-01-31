import Image from "next/image";
import { Lobster } from 'next/font/google'
const pop = Lobster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function Home() {
  return (
    <main className="w-full overflow-hidden h-[600px]  relative bg-no-repeat bg-center bg-cover" style={{backgroundImage: 'url(/images/hero.png)'}}>
     
      <div className="bg-[#1d1e20] flex items-center  w-full h-full opacity-[0.7]">
      </div>
      <div className="absolute top-[120px] sm:top-[250px] w-full h-full  left-3 sm:left-0 ">
      <img src="/images/wel-removebg-preview.png"  className="  text-white sm:ml-[400px]" alt="" />

      </div>

</main>


  );
}
