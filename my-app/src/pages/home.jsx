import Title from "../components/Title";
import { Link } from "react-router-dom";
import FunBackground from "../components/FunBackground";
import useInView from "../hooks/useInView";
import "./new.css";

export default function Home(){
    const [quoteRef, quoteInView] = useInView();

    return(<>
    
                <Title titleName="Sara Vorhaben" />
                
                <div className="Gradient flex flex-col justify-center items-center min-h-dvh " >
                <div className="opaque-block ">
                <div className="flex flex-col mx-auto m-4 w-full md:flex-row sm:max-width-11/12 overflow-hidden">
                    <div className="gradient-ring">
                        <img 
                            src="./images/profile.JPG" 
                            alt="Sara Vorhaben Profile" 
                            className="rounded-full"
                            />
                    </div>

                 
                    <div className="flex flex-col m-4 justify-center items-center rounded-xl sm:max-width-11/12 lg:overflow-hidden">
                
                            <h1   className=" text-gradient parisienne-regular">Howdy!</h1> 
                         
                        <p className="welcome_pg">I'm Sara Vorhaben, a Computer Science M.S. student at Texas A&M University, originally from Cypress, Texas.

My work spans both ends of the stack. In C++, I've built object-oriented systems involving line-of-sight algorithms, collision detection, and 3D graphics with OpenGL. On the web side, I've shipped React frontends from Figma designs, integrated REST APIs, and served as product owner on a full-stack Rails application.

What connects them is the part I actually enjoy: breaking down a problem, designing something clean enough that the next person can extend it, and getting it in front of real users.

I'm looking for full-time software engineering roles — C++ or web! If you're hiring, I'd love to connect.</p>   
                            <div className="button-bar mt-[1em]  ">
                                <button className="gradient-button"><Link to="/portfolio">Projects</Link></button>
                                <button className="gradient-button"><Link to="/qualifications">Qualifications</Link></button>
                            </div>
                            
                    </div>
                    </div>
                    </div>
                    

                    <h2 className="text-white stack-sans-text-sans pt-4 pl-4">Featured Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full">
                        <div className="block">
                            <div
                                className="flex items-center justify-center bg-gray-400 rounded-xl text-white font-bold"
                                style={{ height: "300px", fontSize: "4em" }}
                            >
                                M
                            </div>
                            <p><strong>Dungeon Crawler Game</strong></p>
                            <div className="overlay">
                                <div className="horizontal"><p>C++</p><p>|</p><p>Fall 2023</p></div>
                                <ul>
                                    <li>Implemented a line of sight algorithm that lets monster entities detect players not blocked by wall geometry</li>
                                    <li>Developed grid collision detection and bounds checking to validate every entity move against terrain and map limits</li>
                                    <li>Managed dynamic 2D map memory across runtime resizing with leak-free deallocation</li>
                                </ul>
                            </div>
                            <div className="p-4 flex space-between justify-center text-center">
                                <a className="button" href="https://github.com/saravorhaben/Dungeon-Game">GitHub</a>
                            </div>
                        </div>

                        <div className="block">
                            <img src="./images/Legion.png" alt="Legion Logo"/>
                            <p><strong>Legion Men's Organization Website</strong></p>
                            <div className="overlay">
                                <div className="horizontal"><p>CSCE 431</p><p>|</p><p>Ruby on Rails, Tailwind</p><p>|</p><p>Fall 2025</p></div>
                                <ul>
                                    <li>Served as product owner for a 5-person Agile team, interfacing meetings between the customer, team, and stakeholders to vet requirements</li>
                                    <li>Created and maintained a Jira project to track completion of tasks, deadlines, and sprint progress</li>
                                    <li>Used GitHub Actions to automate testing and manage merging</li>
                                </ul>
                            </div>
                            <div className="p-4 flex space-between justify-center text-center">
                                <a className="button" href="https://legion-tamu-7a09206fbac4.herokuapp.com/">Website</a>
                            </div>
                        </div>

                        <div className="block">
                            <img src="./images/Keeper.jpg" alt="Keeper Logo"/>
                            <p><strong>Keeper</strong></p>
                            <div className="overlay">
                                <div className="horizontal"><p>React, Supabase, PostgreSQL</p><p>|</p><p>August 2025 - Ongoing</p></div>
                                <ul>
                                    <li>Built and deployed a full-stack sports tracking application that lets athletes log games and track stat progression over time, backed by Supabase (Postgres + auth) and hosted on Render</li>
                                    <li>Implemented client-side routing across 9 views (team pages, live game entry, completed game review, profile, settings) using React Router with dynamic route params for teams and individual games</li>
                                    <li>Integrated Supabase authentication behind a React context provider and reusable ProtectedRoute wrapper, restricting game creation, stat entry, and account routes to signed-in users</li>
                                    <li>Designed a CSS custom property system for color, typography, and spacing with full light/dark mode support via prefers-color-scheme</li>
                                </ul>
                            </div>
                            <div className="p-4 flex space-between justify-center text-center">
                                <a className="button" href="https://github.com/saravorhaben/SportStats/">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pb-4">
                        <Link to="/portfolio" className="button">See All Projects</Link>
                    </div>
                    <div
                        ref={quoteRef}
                        className={`opaque-block w-full text-center fade-in-section ${quoteInView ? "is-visible" : ""}`}
                    >
                        <p className="quote">1% Better Every Day &hearts; </p>
                    </div>
                    </div>

                 
      


                
    </>
    )
}