import Link from 'next/link';
import Company from './Company';

export default function IndivProject(props) {
    return (
        <div class="max-w-md rounded-xl overflow-hidden shadow-md">
            <img className="w-full" src={props.image} alt="project"/>
            <div class="px-6 py-4">
                <h3 class="font-bold text-xl">{props.name}</h3>
                <h3 class="text-lg font-medium blue mb-2">{props.type}</h3>
                <p class="text-gray-700 text-base">
                    {props.desc}<br/>
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {props.tech.map(tech => <span class="inline-block bg-beige rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>)}
            </div>
        </div>
    )
}
