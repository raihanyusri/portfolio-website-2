import Image from 'next/image';

export default function Achievements() {
    return (
        <div className="flex flex-wrap items-center justify-evenly p-5 pt-10 pb-20">
                <div className="h-full">
                    <h2 className="text-xl blue font-semibold pb-3">
                        Achievements
                    </h2>
                    <ul>
                        <li><span className="font-semibold">2024: </span>Certificate of Distinction, ICT Solutioning Knowledge Area</li>
                        <li><span className="font-semibold">202: </span>Best Project Award (1st Place), NUS School of Computing (23rd STePs), IS4103 Information Systems Capstone Project</li>
                        <li><span className="font-semibold">2021: </span>Top Students, IS1103 Ethics in Computing, NUS</li>
                        <li><span className="font-semibold">2020: </span>Singapore National Co-operative Federation Scholarship</li>
                        <li><span className="font-semibold">2017: </span>School Colours Award, Victoria Junior College Hockey</li>
                    </ul>
                    <h2 className="text-xl blue font-semibold pt-5 pb-3">
                        Involvements
                    </h2>
                    <ul>
                        <li><span className="font-semibold">2022 - Present: </span>Programming Instructor, Saturday Kids</li>
                        <li><span className="font-semibold">2024: </span>Google Developer Student Club, Hack for Good</li>
                        <li><span className="font-semibold">2023: </span>NUS School of Computing Teaching Assistant, IS2103: Enterprise Systems Server-side Design & Development (Backend development, JavaEE)</li>
                        <li><span className="font-semibold">2021: </span>Shopee Ultra-Hackthon, Top 25%</li>
                        <li><span className="font-semibold">2021: </span>NUS Hack & Roll 2021</li>
                        <li><span className="font-semibold">2020: </span>Shopee Product & Design Competition</li>
                    </ul>
                </div>
            </div>
    )
}
