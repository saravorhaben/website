import Title from "../components/Title";
import { Link } from "react-router-dom";
import FunBackground from "../components/FunBackground";


export default function Home(){
    return(<>
    
                <Title titleName="Sara Vorhaben" />
                
                <div className="Gradient flex justify-center items-center h-[90vh]" >
                <div className="opaque-block">
                <div className="flex flex-row w-2/3 mx-auto m-4 w-full">
                    <div className="gradient-ring">
                        <img 
                            src="./images/profile.JPG" 
                            alt="Sara Vorhaben" 
                            className="rounded-full"
                            />
                    </div>

                 
                    <div className="flex flex-col m-4 justify-center items-center rounded-xl">
                        <div className="">
                            <h1 className="text-gradient parisienne-regular">Howdy!</h1> 
                        </div >   
                        <p className="welcome_pg">My name is Sara Vorhaben and I'm a Senior Computer Engineering Student at Texas A&M University from Cypress, Texas. I am currently seeking a summer internship, where I can contribute my expertise in software development while gaining hands-on experience in a professional environment. Through my classes and projects, I've built a strong foundation in C++, Python, UX Design, and web development, and I would love to be a part of your team!
                            I'm excited to connect and explore opportunities where I can make an impact! If you're looking for a dedicated and driven engineering student, please reach out!</p>   
                            <div className="button-bar mt-[1em] flex-row">
                                <button className="gradient-button"><Link to="/portfolio">Projects</Link></button>
                                <button className="gradient-button"><Link to="/qualifications">Qualifications</Link></button>
                            </div>
                            
                    </div>
                    </div>

                    
</div>
                    </div>
    </>
    )
}