import Link from 'next/link';
import Company from './Company';
import IndivProject from './IndivProject';

export default function Project() {
    return (
        <div className="items-center justify-evenly pt-10">
            <div className="flex justify-center">
            <h3 className="text-4xl font-bold ">Projects</h3><br/>
            </div>
            <div class="grid grid-cols-1 gap-6 gap-y-20 pt-20 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <IndivProject 
                name="NUSociety"
                type="Interactive Co-curricular Activity Portal"
                desc="A web application for university students to manage co-curricular activities including events, attendance, posts, comments and more."
                image="/nusociety.png"
                tech={["Angular.js", "TypeScript", "Java", "JakartaEE", "JSF", "JPQL"]}/>
            <IndivProject 
                name="Parkie"
                type="Mobile App for Parking Availability"
                desc="A mobile application for drivers to check how many parking lots are available at their desired destination."
                image="/parkie.png"
                tech={["React Native", "Expo", "JavaScript"]}/>
            <IndivProject 
                name="Personal Website"
                type="This Website!"
                desc="A web application to showcase my work and serve as my portfolio."
                image="/website.png"
                tech={["Next.js", "TailwindCSS"]}/>
            <IndivProject 
                name="CookWhat?"
                type="Recipe Searcher"
                desc="A web application for aspiring cooks to search for recipes and add them to favourites for future reference, if they are logged in."
                image="/cookwhat.png"
                tech={["React.js", "Firebase"]}/>
            </div>
        </div>
    )
}
