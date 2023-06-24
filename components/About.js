import Image from 'next/image';

export default function About() {
    return (
        <div className="flex flex-wrap items-center justify-evenly pt-10 pb-20 animated animatedFadeInUp fadeInUp">
            <div className="h-full lg:w-23/100">
                <Image width={200} height={300} className="h-120 w-96" src="/swiss_portrait.jpg" />
            </div>
            <div className="h-full lg:w-1/2">
                <h3 className="text-4xl font-bold pt-5">About me</h3><br/>
                <div className="text-lg text-gray-800">Hey there! I'm Raihan, a budding software engineer from the sunny island of 🇸🇬. I am currently a final 
                year student at the National University of Singapore (NUS), pursuing a Bachelor&apos;s of Computing in Information Systems.  <br/><br/>
                Writing software is something that excites me - I find great joy in the process of bringing ideas to life through code. I aim to 
                build applications that can bring about positive social changes and impact public good. <br/><br/>
                <h5 className="text-xl font-bold">Skills</h5>
                </div>
                <div className="flex items-baseline pt-2 pb-5">
                    <Image width={12} height={12} className="h-10 w-10 mr-3" src="/icons/java.svg" />
                    <Image width={12} height={12} className="h-10 w-10 mr-3" src="/icons/js.svg" />
                    <Image width={12} height={12} className="h-10 w-10 mr-3" src="/icons/python.svg" />
                </div>
                <div className="flex items-baseline pt-2">
                    <Image width={12} height={12} className="h-10 w-10 mr-3" src="/icons/react.svg" />
                    <Image width={12} height={12} className="h-10 w-10 mr-3" src="/icons/node.svg" />
                    <Image width={12} height={12} className="h-8 w-8 mr-3" src="/icons/express.svg" />
                    <Image width={12} height={12} className="h-10 w-10 mr-3" src="/icons/mongodb.svg" />
                    <Image width={12} height={12} className="h-9 w-9 mr-3" src="/icons/mysql.svg" />
                    <Image width={12} height={12} className="h-10 w-10 mr-3" src="/icons/redis.svg" />
                </div>
            </div>
        </div>
    )
}
