import Link from 'next/link';
import Company from './Company';

export default function Experience() {
    return (
        <div className="items-center justify-evenly pt-10 pb-20">
            <div className="flex justify-center">
            <h3 className="text-4xl font-bold ">Experience</h3><br/>
            </div>
            <Company 
                name="Ryde"
                role="Software Engineer Intern"
                desc={["Developed and enhanced features for RydeHELP, a customer support service serving ~2 million users ", 
                        "Integrated a forms tool with the company's internal CMS, optimizing workflow of the customer support team by 50%"]}
                period="Jan 2023 - Present"
                location="Singapore"
                img="/ryde.jpeg"
                skills={["MongoDB", "Express", "React.js", "Node.js"]}/>
            <Company 
                name="NTUC LearningHub"
                role="Software Developer Intern"
                desc={["Designed and developed APIs for integration with SkillsFutureSG, streamlining the workflow which processes ~5,000 requests daily",
                        "Utilized SQL to manipulate data of over 90,000 trainees, while administering the company’s MSSQL database",
                        "Supported the development of virtualized APIs by creating sample API request/response messages"]}
                period="May 2022 - July 2022"
                location="Singapore"
                img="/lhub.png"
                skills={["Java", "SQL", "REST APIs", "MuleSoft"]}/>
            <Company 
                name="Singapore National Co-operative Federation"
                role="IT Intern"
                desc={["Automated sending of weekly deliverables using Microsoft Power Automate, an initiative to reduce manual work",
                        "Authored a manual for IT project implementation, to be referenced by >70 of the company’s affiliates"]}
                period="May 2021 - July 2021"
                location="Singapore"
                img="/sncf.jpeg"
                skills={["Microsoft Power Automate", "Microsoft Excel"]}/>
        </div>
    )
}
