import Link from 'next/link';
import Company from './Company';

export default function Experience() {
    return (
        <div className="items-center justify-evenly pt-20 pb-20 bg-zinc-50">
            <div className="container mx-auto p-5 mb-10">
                <h3 className="w-10/12 mx-auto text-4xl font-bold pb-10">Experience</h3><br/>
                <Company 
                    name="Ryde"
                    role="Software Engineer Intern"
                    desc={["Singlehandedly built a web view for the Ryde mobile application help center, allowing users to view relevant articles related to their trip and submit queries via forms", 
                            "Reduced customer service touchpoints by centralizing user queries to Zendesk, increasing operational efficiency by 50%",
                            "Built an internal feature to create and update user-facing forms using Node.js, MongoDB and Redis from scratch",
                            "Added features in the internal web portal to streamline the process of approving organizations for the company's B2B solution (Ryde For Corporate)",
                            "Worked in a team of 2 to develop an internal tool for Firebase Remote Config management with Google Cloud Platform Pub/Sub queue for logging",
                            "Proposed and implemented a Node.js script to update Braze SMS subscription statuses of all 450,000 active users of the Ryde mobile application"]}
                    period="Jan 2023 - Jun 2023"
                    location="Singapore"
                    img="/ryde.png"
                    skills={["React.js", "Node.js", "Express.js", "MongoDB", "Redis"]}/>
                <Company 
                    name="NTUC LearningHub"
                    role="Software Developer Intern"
                    desc={["Developed and streamlined API integration with SkillsFutureSG, a workflow which processes ~10,000 requests daily, by migrating code from Java to MuleSoft",
                            "Implemented multithreading for batch processing, improving runtime by 60% and significantly saving countless man-hours",
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
