import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <div className="flex flex-wrap items-center justify-evenly pt-10 pb-20 animated animatedFadeInUp fadeInUp">
            <div className="h-full lg:w-23/100">
                <Image className="h-120 w-96 rounded-full" src="/swiss_portrait.jpg" />
            </div>
            <div className="h-full lg:w-1/2">
                <h3 className="text-4xl font-bold pt-5">About me</h3><br/>
            <div className="text-lg text-gray-800">I am a Penultimate Year student at the National University of Singapore (NUS), pursuing a 
            <span className="font-semibold"> Bachelor&apos;s of Computing in Information Systems </span>with a Minor in Management. I am currently working as a Software Engineer at
            <span className="font-semibold"><Link href="https://rydesharing.com"> Ryde</Link></span>. <br/><br/>
            My focus is in <span className="font-semibold">Full-Stack Development</span> - specifically creating intuitive and seamless user experiences using the latest technologies. 
            My other interests lie in Mobile Development and IoTs - technologies which I believe hold immense potential for the future.<br/><br/>
            Here are a few technologies I&apos;been working with recently:<br/>
            <div className="grid grid-cols-1 md:grid-cols-2 w-1/3 text-base text-gray-600">
                <div>- Java</div>
                <div>- JavaScript</div>
                <div>- React.js</div>
                <div>- React Native</div>
                <div>- Node.js</div>
                <div>- MongoDB</div>
            </div>
            </div>
            
            </div>
        </div>
    )
}
