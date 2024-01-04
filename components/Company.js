import Image from 'next/image';

export default function Company(props) {
    return (
        <div className="flex flex-wrap-reverse items-end justify-evenly mb-20 border rounded-xl p-6 bg-white shadow hover:shadow-lg">
            <div className="px-6 h-full lg:w-2/3">
                <div className="flex justify-between mt-10">
                    <h3 className="text-2xl font-semibold mb-2">{props.name}</h3>
                    <h3 className="text-xl font-medium text-gray-600 mb-2">{props.period}</h3>
                </div>
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold italic text-gray-600 mb-2">{props.role}</h3>
                    <h3 className="text-xl font-medium italic text-gray-600 mb-2">{props.location}</h3>
                </div>
                <div className="pt-3">
                    {props.desc.map((desc,i) => <p key={i} className="text-lg text-gray-700 text-base pb-3 pl-1">•&nbsp;&nbsp;{desc}</p>)}            
                </div>
                <div className="pt-4 pb-2">
                    {props.skills.map((skill,i) =>
                        <span key={i} className="inline-block bg-beige rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">{skill}</span>
                        )}
                </div>
            </div>
            <div>
                <Image width={100} height={100} className="mt-10 w-40 h-28 h-full lg:w-1/9" src={props.img} alt="logo" unoptimized></Image>
            </div>
        </div>
    )
}
