import Image from 'next/image';

export default function About() {
    return (
        <div className="flex flex-wrap items-center justify-evenly pt-10 pb-20 animated animatedFadeInUp fadeInUp">
            <div>
                <Image width={200} height={300} className="h-120 w-96" alt="portrait" src="/swiss.jpg" unoptimized/>
            </div>
            <div className="h-full lg:w-1/2">
                <h3 className="text-4xl font-bold pt-5">About me</h3><br/>
                <div className="text-lg text-gray-800">Hey there! I&apos;m Raihan, a budding software engineer from the sunny island of 🇸🇬. I am currently a final 
                    year student at the National University of Singapore (NUS), pursuing a Bachelor&apos;s of Computing in Information Systems.  <br/><br/>
                    Writing software is something that excites me - I find great joy in the process of bringing ideas to life through code. I aim to 
                    build applications that can bring about positive social changes and impact public good. <br/><br/>
                    <h5 className="text-xl font-bold">Skills</h5>
                </div>
                <div className="flex items-baseline pb-2 pt-2">
                    <p className="flex flex-col text-gray-500 icon-container mr-1">
                        • Programming Languages
                    </p>
                </div>
                <div className="flex items-baseline pl-2">
                    <div className="flex flex-col icon-container mr-1">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/java.svg" />
                        <p className="icon-text text-xs">Java</p>
                    </div>
                    <div className="flex flex-col icon-container">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/js.svg" />
                        <p className="icon-text text-xs">JavaScript</p>
                    </div>
                    <div className="flex flex-col icon-container mr-2">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/ts.svg" />
                        <p className="icon-text text-xs">TypeScript</p>
                    </div>
                    <div className="flex flex-col icon-container mr-1">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/python.svg" />
                        <p className="icon-text text-xs">Python</p>
                    </div>
                </div>
                <div className="flex items-baseline pb-2">
                    <p className="flex flex-col text-gray-500 icon-container mr-1">
                        • Frameworks & Libraries
                    </p>
                </div>
                <div className="flex items-baseline pl-2">
                    <div className="flex flex-col icon-container mr-3">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/react.svg" />
                        <p className="icon-text text-xs">React.js</p>
                    </div>
                    <div className="flex flex-col icon-container mr-3">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/node.svg" />
                        <p className="icon-text text-xs">Node.js</p>
                    </div>
                    <div className="flex flex-col icon-container">
                        <Image alt="icon" width={12} height={12} className="h-8 w-8" src="/icons/express.svg" />
                        <p className="icon-text text-xs">Express</p>
                    </div>
                    <div className="flex flex-col icon-container">
                        <Image alt="icon" width={12} height={12} className="h-8 w-8" src="/icons/springboot.svg" />
                        <p className="icon-text text-xs">SpringBoot</p>
                    </div>
                    <div className="flex flex-col icon-container mr-1">
                        <Image alt="icon" width={12} height={12} className="h-8 w-8" src="/icons/tailwind.svg" />
                        <p className="icon-text text-xs">Tailwind</p>
                    </div>
                </div>
                <div className="flex items-baseline pb-2">
                    <p className="flex flex-col text-gray-500 icon-container mr-1">
                        • Databases
                    </p>
                </div>
                <div className="flex items-baseline pl-2">
                    <div className="flex flex-col icon-container mr-4">
                        <Image alt="icon" width={12} height={12} className="h-9 w-9" src="/icons/mysql.svg" />
                        <p className="icon-text text-xs">MySQL</p>
                    </div>
                    <div className="flex flex-col icon-container mr-2">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/redis.svg" />
                        <p className="icon-text text-xs">Redis</p>
                    </div>
                    <div className="flex flex-col icon-container mr-1">
                        <Image alt="icon" width={12} height={12} className="h-10 w-10" src="/icons/mongodb.svg" />
                        <p className="icon-text text-xs">MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
