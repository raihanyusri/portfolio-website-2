import Link from "next/link";
import Company from "./Company";
import IndivProject from "./IndivProject";

export default function Project() {
  return (
    <div className="bg-gray-50 p-5 ">
      <div className="flex flex-wrap items-center justify-evenly pt-10 pb-20">
        <div className="items-center justify-evenly pt-20">
          <h2 className="text-2xl blue font-semibold pb-3">Projects</h2>
          <div className="grid grid-cols-1 gap-10 gap-y-20 pt-20 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <IndivProject
              name="Heart2Hub"
              type="Hospital Management System"
              desc={`Consists of a web application for healthcare professionals to streamline patient care through agile practices, and a mobile application for increased clarity of a patient's journey.
                    <br/>Project for NUS Module IS4103: Information Systems Capstone Project. (Grade: A)
                    <br/> Won Best Project (1st Place) at the 23rd NUS School of Computing Term Project Showcase (STePS)`}
              image="/h2h.png"
              github="https://github.com/Heart2Hub"
              tech={[
                "React.js",
                "Redux",
                "Ionic",
                "Spring Boot",
                "Node.js",
                "PostgreSQL",
              ]}
            />
            <IndivProject
              name="NUSociety"
              type="Interactive Co-curricular Activity Portal"
              desc={`A web application for university students to manage co-curricular activities including events, attendance, posts, comments and more.
                    <br/>Project for NUS Module IS3106: Enterprise Systems Frontend Development. (Grade: A)`}
              image="/nusociety.png"
              github="https://github.com/lyrador/nusociety"
              tech={["Angular", "TypeScript", "JavaEE", "JSF"]}
            />
            <IndivProject
              name="Parkie"
              type="Mobile App for Parking Availability"
              desc="A mobile application for drivers to check how many parking lots are available at their desired destination."
              image="/parkie.png"
              github="https://github.com/raihanyusri/Parkie"
              tech={["React Native", "Expo", "JavaScript"]}
            />
            <IndivProject
              name="Personal Website"
              type="This Website!"
              desc="A web application to showcase my work and serve as my portfolio."
              image="/website.png"
              github="https://github.com/raihanyusri/portfolio-website-2"
              demo="https://raihanyusri.vercel.app/"
              tech={["Next.js", "TailwindCSS"]}
            />
            <IndivProject
              name="CookWhat?"
              type="Recipe Searcher"
              desc="A web application for aspiring cooks to search for recipes and add them to favourites for future reference, if they are logged in."
              image="/cookwhat.png"
              github="https://github.com/raihanyusri/recipe-searcher"
              demo="https://recipe-searcher-beige.vercel.app/"
              tech={["React.js", "Firebase"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
