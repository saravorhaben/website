import Title from "../components/Title";
import "./new.css";
import Contact from "./contact";
import { useEffect } from "react";
export default function Resume(){
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);
    return(<>
    <Title titleName="Resume"/>
    <div class="Gradient ">
        {/* <!-- BAR --> */}
        <div className="button-bar-full">
        
        <div className= "button-bar-left">
            <a  href="../../images/SaraVorhabenResume_Spring2026.pdf" className="opaque-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </a>
            <a  href="https://github.com/saravorhaben" className="opaque-button"><img src="https://cdn.simpleicons.org/github" alt="GitHub"   width="32"/></a>
            <a  href="https://www.linkedin.com/in/sara-vorhaben/" className="opaque-button"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="LinkedIn"    width="32"/></a>
        </div>

        <div className="button-bar-right">
        <h1 className="name stack-sans-text-sans">Sara Vorhaben</h1>
        </div>
        </div>
        <div class="mainContent">
            <div className="block">
                <h2>Education</h2>
                <div className="horizontal">
                <h3><strong>Texas A&M, College Station, TX — Computer Engineering </strong></h3> <p>GPA: 3.683 | Graduation Spring 2026</p>
                </div>
                        <p>Bachelor of Science - Computer Engineering, Minor - Mathematics    </p>                                        
                        <p>Relevant Coursework: Software Engineering, Computer System Design, Software Security, Computer Graphics, Communication and Cryptography</p>
                <div className="horizontal">
                    <h3><strong>Texas A&M, Louvain La Neuve, Belgium — Study Abroad	 </strong></h3>   <p> GPA: 4.0 | Summer 2024  </p>    
                </div>                                                                             
                <p>Relevant Coursework:  Computer Architecture, Advanced Computer Architecture</p>
            </div>
            <div className="block">
                <h2>Projects</h2>
                <em>For more projects, see Technical page</em>
                <h3><strong>Legion Men’s Organization Website</strong></h3>
                <div className="horizontal"><p>CSCE 431</p><p>|</p><p>Ruby on Rails, Tailwind </p><p>|</p><p>Fall 2026 </p><p>|</p><p> Website</p></div>
                <ul>
                    <li>Served as product owner for a 5-person team to design the Legion Men’s Organization website </li>
                    <li>Interfaced meetings between the customer, team and other stakeholders to ensure all needs were met</li>
                    <li>Created and maintained a Jira project to track completion of tasks, deadlines, and sprint progress</li>
                </ul>


                <h3><strong>Theo Project Team — Apps For Good Summer Intern</strong></h3>
                <div className="horizontal"><p>Apps for Good </p><p>|</p>  <p>React, Vite, Tailwind, Figma</p>  <p>|</p>  <p>Summer 2025 </p>  <p>|</p>  <p>theo.teamup.org </p></div>
                    <ul>
                        <li>Frontend Development Member of Theo, a tutoring platform to connect students with tutors</li>
                        <li>Built and styled reusable React components based on Figma designs </li>
                        <li>Connected API endpoints to components and handled errors gracefully</li>
                        <li>Implemented responsive design techniques using tailwind to ensure usability across devices </li>
                    </ul>
            </div>

            <div className="block">
                <h2>Activities</h2>
                <h3><strong>Texas A&M Club Water Polo, — Treasurer(2024-2025), Member(2022-2026) </strong></h3>
                <ul>
                    <li>Collected and processed dues, payments, and purchases from players and external parties.</li>
                    <li>Created and maintained an annual operating budget, ensuring alignment with team objectives.</li>
                    <li>Applied for yearly allocation funding to secure financial resources.</li>
                </ul>
                <h3><strong>Eta Kappa Nu — Member (2024-Present)</strong></h3>
                    Theremin Project Team Member (2024)- Created a theremin using an arduino and infrared sensors

            </div>
            <div className="block">
                <h2>Skills</h2>
                <p>Java, Python, JavaScript, Next.js,  C++, React, Ruby on Rails, Git, Jira, Figma, Tailwind CSS, SQL, Verilog, Github, APIs
            </p>
            </div>
        
        <div className="block">
            <h2>Certifications</h2>
            <div class="horizontal">
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="1e8503be-03a7-4f90-9ecf-cb3cfed02f96" data-share-badge-host="https://www.credly.com"></div>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5de380f3-f613-414d-bd92-7215eb0e2d8a" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </div>
        </div>
        </div>
        <div className="flex flex-row bg-black justify-between text-white text-center w-full font-serif p-0">
        <Contact/>
        </div>
    </div>
    </>);
}