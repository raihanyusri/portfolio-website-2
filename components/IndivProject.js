import Image from "next/image"

export default function IndivProject(props) {
    return (
        <div className="max-w-md rounded-xl overflow-hidden shadow-md">
            <Image width={100}  height={100} className="w-full" src={props.image} alt="project"/>
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl">{props.name}</h3>
                <h3 className="text-lg font-medium blue mb-2">{props.type}</h3>
                <p className="text-gray-700 text-base">
                    {props.desc}<br/>
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.tech.map((tech,i) => <span key={i} className="inline-block bg-beige rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>)}
            </div>
        </div>
    )
}
