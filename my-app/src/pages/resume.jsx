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
        <div className="text-center text-white pb-2">
            <p>Cypress, TX &nbsp;|&nbsp; (832) 453-2065 &nbsp;|&nbsp; sara.vorhaben@gmail.com &nbsp;|&nbsp; saravorhaben.onrender.com &nbsp;|&nbsp; github.com/saravorhaben</p>
        </div>
        <div class="mainContent">
            <div className="block">
                <p>Computer Science M.S. student at Texas A&M University with a Mathematics minor and hands-on C++ experience across 3D graphics. Skilled in vector and geometric math, algorithm implementation, and Agile development. Seeking a full-time software development role building C++ scientific or simulation software.</p>
            </div>
            <div className="block">
                <h2>Projects</h2>
                <em>For more projects, see Technical page</em>
                <h3><strong>Dungeon Crawler Game</strong></h3>
                <div className="horizontal"><p>C++</p><p>|</p><p>Fall 2023</p><p>|</p><p>GitHub</p></div>
                <ul>
                    <li>Implemented a line of sight algorithm that lets monster entities detect players not blocked by wall geometry</li>
                    <li>Developed grid collision detection and bounds checking to validate every entity move against terrain and map limits</li>
                    <li>Managed dynamic 2D map memory across runtime resizing with leak-free deallocation</li>
                </ul>

                <h3><strong>Computer Graphics Shading</strong></h3>
                <div className="horizontal"><p>C++, OpenGL, GLM</p><p>|</p><p>Fall 2025</p></div>
                <ul>
                    <li>Applied 3D vector and matrix math (model/view/projection matrices, normal matrices, reflection vectors) using GLM to transform geometry and compute lighting</li>
                    <li>Built and debugged a real-time rendering pipeline, translating plane and solid geometry into per-fragment shading</li>
                </ul>

                <h3><strong>Legion Men’s Organization Website</strong></h3>
                <div className="horizontal"><p>CSCE 431</p><p>|</p><p>Ruby on Rails, Tailwind </p><p>|</p><p>Fall 2025 </p><p>|</p><p> Website</p></div>
                <ul>
                    <li>Served as product owner for a 5-person Agile team, interfacing meetings between the customer, team, and stakeholders to vet requirements</li>
                    <li>Created and maintained a Jira project to track completion of tasks, deadlines, and sprint progress</li>
                    <li>Used GitHub Actions to automate testing and manage merging</li>
                </ul>
            </div>

            <div className="block">
                <h2>Work Experience</h2>
                <h3><strong>Software Developer — Content Operations & Automation</strong></h3>
                <div className="horizontal"><p>Incuentro</p><p>|</p><p>JavaScript, Google Apps Script, HTML/CSS, Make</p><p>|</p><p>May 2026 - Current</p></div>
                <ul>
                    <li>Built and maintained an automated content pipeline generating monthly publishing calendars and HTML/CSS assets</li>
                    <li>Developed a Google Apps Script backend and sidebar UI to read and write files in Google Drive, integrated with a scheduling spreadsheet</li>
                </ul>

                <h3><strong>Theo Project Team — Apps For Good Summer Intern</strong></h3>
                <div className="horizontal"><p>Apps for Good </p><p>|</p>  <p>React, Vite, Tailwind, Figma</p>  <p>|</p>  <p>Summer 2025 </p>  <p>|</p>  <p>theo.teamup.org </p></div>
                    <ul>
                        <li>Built and styled reusable React components from Figma designs for a tutoring platform connecting students with tutors</li>
                        <li>Connected API endpoints to components and handled errors gracefully in a highly interactive Agile team</li>
                    </ul>
            </div>

            <div className="block">
                <h2>Education</h2>
                <div className="horizontal">
                <h3><strong>Texas A&M University, College Station, TX </strong></h3>
                </div>
                        <p>Master of Science - Computer Science &nbsp;|&nbsp; Expected August 2027</p>
                        <p>Bachelor of Science - Computer Engineering, Minor - Mathematics &nbsp;|&nbsp; Summa Cum Laude, GPA 3.683 &nbsp;|&nbsp; May 2026</p>
                        <p>Relevant Coursework: Computer Graphics, Software Engineering, Computer System Design, Software Security, Computer Architecture, Communication and Cryptography</p>
                <div className="horizontal">
                    <h3><strong>Texas A&M University, Louvain-la-Neuve, Belgium — Study Abroad	 </strong></h3>   <p> GPA: 4.0 | Summer 2024  </p>
                </div>
                <p>Relevant Coursework:  Computer Architecture, Advanced Computer Architecture</p>
            </div>

            <div className="block">
                <h2>Activities</h2>
                <h3><strong>Texas A&M Club Water Polo, — Treasurer(2024-2025), Member(2022-2026) </strong></h3>
                <ul>
                    <li>Maintained an annual operating budget, processed dues and purchases, and applied for yearly allocation funding</li>
                </ul>
                <h3><strong>Eta Kappa Nu — Theremin Project Team Member (2024-2026)</strong></h3>
                    Created a theremin using an Arduino and infrared sensors

            </div>
            <div className="block">
                <h2>Skills</h2>
                <p><strong>Languages & Graphics: </strong>C++, Python, Java, JavaScript, Ruby, SQL, Verilog, OpenGL, GLM, 3D vector and matrix math, computational geometry</p>
                <p><strong>Tools & Platforms: </strong>Linux/UNIX, Git, GitHub Actions, Jira, Agile/Scrum, React, Ruby on Rails, Tailwind CSS, Figma, APIs</p>
            </div>
        
        <div className="block">
            <h2>Certifications</h2>
            <div className="flex flex-row flex-wrap justify-evenly items-center gap-4">
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