export default function Company(props) {
    return (
        <div className="flex flex-wrap-reverse items-end justify-evenly pt-20">
            <div className="px-6 h-full lg:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">{props.name}, <span className="text-2xl font-semibold text-gray-600 mb-2">{props.role}</span></h3>
                <h3 className="text-xl font-medium text-gray-600 mb-2">{props.period}</h3>
                <div>
                    {props.desc.map((desc,i) => <p key={i}className="text-lg text-gray-700 text-base">• {desc}</p>)}            
                </div>
                <div className="pt-4 pb-2">
                    {props.skills.map((skill,i) =>
                        <span key={i} className="inline-block bg-beige rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
                        )}
                </div>
            </div>
            <div>
            {props.img === "/ryde.jpeg" ? <img className="w-52 h-28 h-full lg:w-1/9" src={props.img} alt="logo"></img>:
            <img className="w-52 h-52 h-full lg:w-1/9" src={props.img} alt="logo"></img>}
            </div>
        </div>
    )
}
