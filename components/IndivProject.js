import Image from "next/image"
import Link from "next/link"

export default function IndivProject(props) {
    return (
        <div className="max-w-md rounded-xl overflow-hidden shadow-md">
            <div className="flex justify-center items-center">
                <Image width={100} height={100} className="w-3/4" src={props.image} alt="project" unoptimized />
            </div>
            <div className="px-6 py-4">
                <h3 className="font-bold text-md">{props.name}</h3>
                <h3 className="text-sm font-medium blue mb-2">{props.type}</h3>
                <p className="text-sm text-gray-700 text-base" style={{ whiteSpace: "pre-line" }}>
                    {props.desc.split("<br/>").join("\n")}<br/>
                </p>
            </div>
            <div className="px-6 pt-4">
                {props.tech.map((tech,i) => <span key={i} className="inline-block bg-beige rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{tech}</span>)}
            </div>
            <div className="px-6 py-4 mb-6">
                <div className="float-right">
                    <div className="flex flex-row">
                    {props.github ? 
                    <Link href={props.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6d6d6d" className="bi bi-github" viewBox="0 0 16 16" style={{ marginRight: 10}}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </Link> : ""}
                    {props.demo ?
                    <Link href={props.demo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16" style={{ color: 'gray'}}>
                        <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                        <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                    </Link> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}
