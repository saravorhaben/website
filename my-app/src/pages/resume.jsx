import Title from "../components/Title";
import "./new.css";
import Contact from "./contact";
export default function Resume(){
    return(<>
    <Title titleName="Resume"/>
    <div class="page">
        {/* <!-- BAR --> */}
        <div class= "buttonBar">
            <a  href="../../images/SaraVorhabenResume_Spring2026.pdf" className="button">Download PDF Resume</a>
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
        </div>
        <div className="flex flex-row bg-[#333333] justify-between text-white text-center w-full font-serif p-0">
        <Contact/>
        </div>
    </div>
    </>);
}