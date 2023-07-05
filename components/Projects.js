import Link from 'next/link';
import Company from './Company';
import IndivProject from './IndivProject';

export default function Project() {
    return (
        <div className="items-center justify-evenly pt-20">
            <div className="flex justify-center">
                <h3 className="w-10/12 mx-auto text-4xl font-bold">Projects</h3><br/>
            </div>
            <div className="grid grid-cols-1 gap-6 gap-y-20 pt-20 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <IndivProject 
                name="NUSociety"
                type="Interactive Co-curricular Activity Portal"
                desc={`A web application for university students to manage co-curricular activities including events, attendance, posts, comments and more.
                    <br/>Built for NUS Module IS3106: Enterprise Systems Frontend Development.
                    <br/> Grade: A`}
                image="/nusociety.png"
                github="https://github.com/lyrador/nusociety"
                tech={["Angular", "TypeScript", "JavaEE", "JSF"]}/>
            <IndivProject 
                name="Parkie"
                type="Mobile App for Parking Availability"
                desc="A mobile application for drivers to check how many parking lots are available at their desired destination."
                image="/parkie.png"
                github="https://github.com/raihanyusri/Parkie"
                tech={["React Native", "Expo", "JavaScript"]}/>
            <IndivProject 
                name="Personal Website"
                type="This Website!"
                desc="A web application to showcase my work and serve as my portfolio."
                image="/website.png"
                github="https://github.com/raihanyusri/portfolio-website-2"
                demo="https://raihanyusri.vercel.app/"
                tech={["Next.js", "TailwindCSS"]}/>
            <IndivProject 
                name="CookWhat?"
                type="Recipe Searcher"
                desc="A web application for aspiring cooks to search for recipes and add them to favourites for future reference, if they are logged in."
                image="/cookwhat.png"
                github="https://github.com/raihanyusri/recipe-searcher"
                demo="https://recipe-searcher-beige.vercel.app/"
                tech={["React.js", "Firebase"]}/>
            </div>
        </div>
    )
}
