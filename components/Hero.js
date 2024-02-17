import Link from 'next/link';
import Image from 'next/image';
import Projects from './Projects';

export default function Hero() {
    return (
        <div className="flex flex-col items-center text-center justify-center h-screen">
            <Image width={200} height={300} className="h-64 w-60" alt="portrait" src="/swiss_portrait.jpg" unoptimized/><br/>
            <h2 className="text-4xl text-black font-semibold pb-3 z-10">
                Hi, I&apos;m <span className="blue">Raihan.</span>
            </h2>
            <h5 className="text-lg z-10">Software Engineer 🇸🇬</h5><br/>
            <div className="text-md text-gray-800 w-11/12 md:w-1/3">I&apos;m a final 
                    year student at the National University of Singapore (NUS), pursuing a Bachelor&apos;s of Computing in Information Systems. 
                    Currently at <b>GovTech</b> as a Software Engineer Intern. <br/><br/>
                    I love bringing ideas to life through code and I am always willing to try out new things. I 
                    aim to build applications that can bring about positive social changes to the community.<br/><br/>
                </div><br/>
            <div className="flex flex-row z-10">
                <Link href="https://www.github.com/raihanyusri/" className="icon-hover">
                    github
                </Link>
                <div className="px-5" />
                <Link href="https://www.linkedin.com/in/raihanyusri/" className="icon-hover">
                    linkedin
                </Link>
                <div className="px-5" />
                <Link href="mailto:raihan.yusri@gmail.com" className="icon-hover">
                    email
                </Link>
            </div>
        </div>
    );
}
