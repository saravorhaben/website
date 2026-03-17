import Title from "../components/Title";
import { Link } from "react-router-dom";

export default function Home(){
    return(<>
                <Title titleName="Sara Vorhaben" />
                <div className="flex flex-row w-2/3 mx-auto m-4">
                    <div className="column_even">
                        <img 
                            src="./images/IMG_0804.JPG" 
                            alt="Description of image" 
                            />
                    </div>

                 
                    <div className="flex flex-col m-4">
                        <div className="greeting">
                            <h2 className="text-4xl mb-4 font-bold text-[#477f96]">Howdy!</h2> 
            
                        </div>   
                        <p className="welcome_pg">My name is Sara Vorhaben and I'm a Senior Computer Engineering Student at Texas A&M University from Cypress Texas. I am currently seeking a summer internship, where I can contribute my expertise in software development, embedded systems, and AI, while gaining hands-on experience in a professional environment. Through my classes and projects, I've built a strong foundation in C++, Python, hardware design, and web development, and I would love to be a part of your team!
                            I'm excited to connect and explore opportunities where I can make an impact! If you're looking for a dedicated and driven engineering student, please reach out!</p>   
                            <div className="flex flex-row">
                                <button><Link to="/technical">Projects</Link></button>
                                <button><Link to="/contact">Contact</Link></button>
                            </div>
                            
                    </div>

                    

                    </div>
    </>
    )
}