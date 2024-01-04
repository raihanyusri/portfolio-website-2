import Link from 'next/link';
import Company from './Company';

export default function Experience() {
    return (
        <div className="items-center justify-evenly pt-20 pb-20 bg-zinc-50">
            <div className="container mx-auto p-5 mb-10">
                <h3 className="w-10/12 mx-auto text-4xl font-bold pb-10">Experience</h3><br/>
                <Company 
                    name="National University of Singapore"
                    role="Teaching Assistant"
                    desc={["Served as teaching assistant for module IS2103: Enterprise Systems Server-side Design & Development", 
                            "Graded practical examinations, coding assignments and responded to student queries",]}
                    period="Aug 2023 - Nov 2023"
                    location="Singapore"
                    img="/nus.png"
                    skills={["JavaEE"]}/>
                <Company 
                    name="NUS Enterprise"
                    role="Software Engineer Intern"
                    desc={["In a team of 3, developed a web application for local hydroponics company ComCrop focusing on improving process management", 
                            "Implemented a simulation feature which allows farmers to create a virtual model of their future plantations for better planning and decision making",
                        "Successfully eliminated manual pen-and-paperwork for farm managers by 100%"]}
                    period="Aug 2023 - Nov 2023"
                    location="Singapore"
                    img="/nus_enterprise.png"
                    skills={["React.js", "Django", "React Native"]}/>
                <Company 
                    name="Ryde"
                    role="Software Engineer Intern"
                    desc={["Singlehandedly built a web view for the Ryde mobile application help center, allowing 450,000 active users to view relevant articles related to their trip", 
                            "Reduced customer service touchpoints by centralizing user queries to Zendesk, increasing operational efficiency of the CX team by 50%",
                            "Built an internal feature for the CX team to create and update user-facing forms using from scratch, to be displayed together with certain articles",
                            "Developed an internal tool for Firebase Remote Config management integrated with Google Cloud Platform Pub/Sub queue"]}
                    period="Jan 2023 - Jun 2023"
                    location="Singapore"
                    img="/ryde.png"
                    skills={["React.js", "Node.js", "Express.js", "MongoDB", "Redis"]}/>
                <Company 
                    name="NTUC LearningHub"
                    role="Software Developer Intern"
                    desc={["Developed and streamlined API integration with SkillsFutureSG, a workflow which processes ~10,000 requests daily",
                            "Implemented multithreading for batch processing, improving runtime by 50% and significantly saving countless man-hours",
                            "Updated live data of over 90,000 trainees in Microsoft SQL with regards to course status, enrolment, and attendances"]}
                    period="May 2022 - July 2022"
                    location="Singapore"
                    img="/lhub.png"
                    skills={["Java", "SQL", "API Development", "MuleSoft"]}/>
                <Company 
                    name="Singapore National Co-operative Federation"
                    role="IT Intern"
                    desc={["Self-initiated a project to automate sending weekly deliverables using Microsoft Power Automate to reduce manual work",
                            "Authored an IT project implementation manual that is currently being used as a reference by over 70 affiliates",
                            "Conducted thorough evaluation and drafted Request for Quotations in the selection process of IT vendors for the company"]}
                    period="May 2021 - July 2021"
                    location="Singapore"
                    img="/sncf.jpeg"
                    skills={["Microsoft Power Automate", "Microsoft Excel"]}/>
            </div>
        </div>
    )
}
