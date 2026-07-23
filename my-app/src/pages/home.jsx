import Title from "../components/Title";
import { Link } from "react-router-dom";
import FunBackground from "../components/FunBackground";
import useInView from "../hooks/useInView";

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

I'm looking for full-time software engineering roles — C++ or web, I'm genuinely open to both. If you're hiring, I'd love to connect.</p>   
                            <div className="button-bar mt-[1em]  ">
                                <button className="gradient-button"><Link to="/portfolio">Projects</Link></button>
                                <button className="gradient-button"><Link to="/qualifications">Qualifications</Link></button>
                            </div>
                            
                    </div>
                    </div>
                    </div>
                    

                    <h2>Projects</h2>
                    <div className="horizontal space">
                        <div className="opaque-block ">
                        <p>j</p>
                        </div>
                        <div className="opaque-block ">
                        <p>p</p>
                        </div>
                        <div className="opaque-block ">
                        <p>d</p>
                        </div>
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