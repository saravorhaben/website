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
            <a  href="../../images/Sara_Vorhaben_Resume_2026.pdf" className="opaque-button">
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
                <p>Computer Science Graduate Student with strong development experience in React, Java, and 
Python. Seeking full time opportunities to apply advanced technical skills, creativity, and 
problem solving abilities toward building impactful digital solutions.</p>
            </div>
            <div className="block">
                <h2>Skills</h2>
                <p><strong>Languages: </strong>Java, Python, C/C++, JavaScript, SQL, HTML/CSS</p>
                <p><strong>Frameworks: </strong>React, Node.js, Ruby on Rails, Tailwind</p>
                <p><strong>Cloud & DevOps: </strong>AWS, Google Cloud, Docker, GitHub Actions, Supabase</p>
                <p><strong>Developer Tools: </strong>Git, VS Code, Figma, Jira, WordPress, Make (Integromat)</p>
            </div>

            <div className="block">
                <h2>Education</h2>
                <h3><strong>Texas A&M University, College Station, TX</strong></h3>
                <div className="flex flex-row flex-wrap justify-between gap-x-4">
                    <p>Master of Computer Science</p>
                    <p className="text-right">GPA 4.0 &nbsp;|&nbsp; Expected May 2027</p>
                </div>
                <p>Relevant Coursework: Human & Computer Interaction, Artificial Intelligence, Information Storage and Retrieval, Cloud Computing, Operating Systems</p>
                <br/>
                <div className="flex flex-row flex-wrap justify-between gap-x-4">
                    <p>Bachelor of Science - Computer Engineering, Minor - Mathematics</p>
                    <p className="text-right">GPA 3.71 &nbsp;|&nbsp; May 2026</p>
                </div>
                <p>Relevant Coursework: Software Engineering, Accessible Computing, Computer System Design, Software Security, Computer Graphics, Communication and Cryptography</p>
                <br/>
                <div className="flex flex-row flex-wrap justify-between gap-x-4">
                    <h3><strong>Texas A&M University, Louvain-la-Neuve, Belgium — Study Abroad</strong></h3>
                    <p className="text-right">GPA 4.0 &nbsp;|&nbsp; Summer 2024</p>
                </div>
                <p>Relevant Coursework: Computer Architecture, Advanced Computer Architecture</p>
            </div>

            <div className="block">
                <h2>Work Experience</h2>
                <h3><strong>Incuentro — Software Developer Intern</strong></h3>
                <div className="horizontal"><p>Make, Google Apps Script, HTML/CSS</p><p>|</p><p>May 2026 - Present</p></div>
                <ul>
                    <li>Created an automated content pipeline in Make that generates monthly publishing calendars and branded HTML/CSS assets, saving about 4 hours of company time a week</li>
                    <li>Built a Google Apps Script with a custom sidebar UI to read and write files in Google Drive</li>
                </ul>

                <h3><strong>Apps For Good — Software Developer Intern</strong></h3>
                <div className="horizontal"><p>React, Vite, Tailwind, Figma</p>  <p>|</p>  <p>June 2025 - August 2025</p>  <p>|</p>  <p>theo.teamup.org</p></div>
                    <ul>
                        <li>Developed reusable & responsive React components as a member of the Theo Frontend Team</li>
                        <li>Connected API endpoints to components and handled errors gracefully for calendar data requests</li>
                    </ul>
            </div>

            <div className="block">
                <h2>Projects</h2>
                <em>For more projects, see Technical page</em>

                <h3><strong>Keeper Sports Stats Tracker — Personal Project</strong></h3>
                <div className="horizontal"><p>React</p><p>|</p><p>Ongoing</p><p>|</p><p><a href="https://github.com/saravorhaben/SportStats/" target="_blank" rel="noopener noreferrer">GitHub</a></p></div>
                <ul>
                    <li>Designed a live game-tracking interface in React.js supporting real-time stat entry across 14+ categories (goals, assists, steals, ejections, saves, etc.) for two teams simultaneously</li>
                    <li>Implemented Google OAuth authentication and protected routing using React Context</li>
                </ul>

                <h3><strong>Car Rider Pickup — Senior Capstone, Backend Lead</strong></h3>
                <div className="horizontal"><p>Node.js, Supabase</p><p>|</p><p>Jan 2026 - May 2026</p><p>|</p><p><a href="https://thewranglers.onrender.com/" target="_blank" rel="noopener noreferrer">Website</a></p></div>
                <ul>
                    <li>Implemented a pickup system that reduced the time to pick up students by 25%</li>
                    <li>Developed the relational schema in Supabase, built the Node.js server and API layer</li>
                    <li>Implemented authentication and role-based access for school staff and parents</li>
                </ul>

                <h3><strong>Legion Men’s Organization Website — Product Owner</strong></h3>
                <div className="horizontal"><p>CSCE 431</p><p>|</p><p>Ruby on Rails, Tailwind </p><p>|</p><p>Aug 2025 - Dec 2025</p><p>|</p><p> <a href="https://legion-tamu-7a09206fbac4.herokuapp.com/" target="_blank" rel="noopener noreferrer">Website</a></p></div>
                <ul>
                    <li>Served as product owner for a 5-person team to design the Legion Men's Organization website</li>
                    <li>Facilitated recurring meetings with the client, development team, and stakeholders to gather requirements and confirm deliverables met their needs</li>
                    <li>Created and maintained a Jira project to track completion of tasks, deadlines, and sprint progress</li>
                    <li>Wrote automated test suite and GitHub Actions pipeline that gated all merges on passing tests</li>
                </ul>
            </div>

            <div className="block">
                <h2>Organizations</h2>
                <h3><strong>Society of Women Engineers — Member (Aug 2022 - Current)</strong></h3>
                <h3><strong>Eta Kappa Nu — Member (Aug 2024 - May 2026)</strong></h3>
                <ul>
                    <li>Theremin Project Team: created a theremin using an Arduino and infrared sensors</li>
                </ul>
                <h3><strong>Texas A&M Club Water Polo — Treasurer (2024-2025), Member (Aug 2022 - May 2026)</strong></h3>
                <ul>
                    <li>Maintained an annual operating budget, processed dues and purchases, and applied for yearly allocation funding</li>
                </ul>
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