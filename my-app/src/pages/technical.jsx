import Title from '../components/Title';
import "./new.css";
import { GitHubCalendar } from 'react-github-calendar';
export default function Technical(){
    return(<>
        <Title titleName="Projects" />
       

        <h2>Completed Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <div className="block">
                <img src="./images/ShareTeaLogo.png" alt="Share Tea Logo"/>
                <p><strong>ShareTea POS</strong></p>
                <div className= "overlay">
                    <p>Developed an interface to improve checkout for ShareTea for customers and a new POS system for employees.</p>
                    <p><strong>Dates:</strong> January 2025 - May 2025</p>
                    <p><strong>Technologies: </strong> React, Java, JavaScript, PostgreSQL, Tailwind CSS, GitHub Projects, API integration</p>
                </div>
                <div className="p-4 flex space-between">
                <a className="button"  href=" https://project3deployment.onrender.com">Frontend Link</a>
                <a className="button" href="https://project3deployment-backend.onrender.com/">Backend Link</a>
            </div></div>
            <div className="block ">
                <img src="./images/theo.jpg" alt="Theo Logo"/>
                <p><strong>Theo</strong></p>
                <div className= "overlay">
                    <p>Developed a web application to connect tutors to students at their school.</p>
                    <p><strong>Dates: </strong> May 2025 - August 2025</p>
                    <p><strong>Technologies: </strong>React, PostgreSQL, Tailwind CSS, Figma, Github Projects, Google OAuth</p>
                </div>
                <div className="p-4 flex space-between">
                <a className="button"  href="theo.teamup.org">Theo Site</a>
                </div>
            </div>
            <div className="block">
                <img src="./images/Legion.png" alt="Legion Logo"/>
                <p><strong>Legion Men's Organization</strong></p>
                <div className= "overlay">
                    <p>Developed a web application for Legion Men's Organization allowing them to keep track of members, volunteer hours, and events.</p>
                    <p><strong>Dates:</strong> August 2025 - December 2025</p>
                    <p><strong>Technologies: </strong>Ruby on Rails, Tailwind CSS, Figma, Docker, Heroku, Github Projects, Google OAuth</p>
                </div>
                <div className="p-4 flex space-between">
                <a className="button"  href="https://legion-tamu-7a09206fbac4.herokuapp.com/">Legion Site</a>
                </div>
            </div>

        </div>
        
        <h2>In Progress Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <div className="block">
                <img src="./images/wranglers.png" alt="Team Logo" className="gridImg"/>
                <p><strong>School Pick Up System</strong></p>
                <div className= "overlay">
                    <p>Working on developing a school pick up system for students being picked up from school.</p>
                    <p><strong>Dates:</strong> January 2026 - Ongoing</p>
                    <p><strong>Technologies: </strong>React, PostgreSQL, Tailwind CSS, ClickUp, Supabase, Python, JavaScript, Google OAuth</p>
                </div>
                <div className="p-4 flex space-between justify-center text-center">
                <a className="button"  href="https://github.com/JackUehlingerTAMU/TheWranglers">GitHub</a>
                <a className="button"  href="https://thewranglers.onrender.com/">Currently Deployed Version</a>
                </div>
            </div>
            <div className="block">
                <img src="./images/Keeper.jpg" alt="Keeper Logo"/>
                <p><strong>Keeper</strong></p>
                <div className= "overlay">
                    <p>Working on developing a stat tracker for sports teams.</p>
                    <p><strong>Dates:</strong> August 2025 - Ongoing</p>
                    <p><strong>Technologies: </strong>React, PostgreSQL, Tailwind CSS, Supabase, JavaScript, Google OAuth</p>
                </div>
                <div className="p-4 flex space-between">
                <a className="button"  href="https://github.com/saravorhaben/SportStats/">Github</a>
                </div>
            </div>
            

        </div>
       
            {/* <div className="wholePage">
    
                {/* {Projects} */}
                {/* <div className="grid grid-cols-3 gap-4 p-4">

                     <div className={styles.projBox}>
                        <img src="./images/theo.jpg"/>
                        <div className="proj-description">
                            <a href="https://theo.teamup.org/"><h2>Theo</h2></a>

                        </div>
                    </div>

                      <div className={styles.projBox}>
                        <img src="./images/keeper.jpg"/>
                        <div className="proj-description">
                            <a href=""><h2>Keeper</h2></a>

                        </div>
                    </div>


                    <div className={styles.projBox}>
                        <img src="./images/ShareTeaLogo.png"/>
                        <div className="proj-description">
                            <a href="https://docs.google.com/document/d/130NxxotuonhPjNqStFXHQO_rtzS-D27MGg5WzBccGYU/edit?usp=sharing"><h2>  
                                Sharetea POS Redesign
                            </h2></a>
                        </div>
                    </div>


                   
                    <div className={styles.projBox}>
                        <img src="./images/ShareTeaLogo.png"/>
                        <div className="proj-description">
                            <a href="https://github.com/CSCE331-Spring2025/project2-team00"><h2> Sharetea Employee Interface </h2></a>
                        </div>
                        
                    </div>


                    <div className={styles.projBox}>
                        <img src="./images/Theremin.png"/>
                        <div className="proj-description">
                            <a href="https://github.com/saravorhaben/Theremin/tree/main"><h2>Arduino Theremin</h2></a>
                        </div>
                    </div> */}

                   




                    
                    
            
                        {/* <div class="third_light">
                            <h2>Other Projects I've Made</h2>
                            <ul>
                                <li><a href="portfolio.html">Theramin</a>: Designed a theramin with the Eta Kappa Nu project team using an arduino, speaker, and ultrasonic sensors.<br> </li>
                                <li><a href="portfolio.html">Hangman</a>: Created a Hangman game that can have multiple players and keeps track of scores.<br></li>
                                <li>Dungeon Crawler Game: Used C++ to create a game with multiple levels<br> </li>
                                <li>Traffic Controller: Created a traffic controller that simulates a red light at a farm road intersection.<br></li>
                                <li>Basic CPU: Created a 5 stage pipelined CPU in Verilog <br></li>
                            </ul> 
                        </div>  */}

                        
                   
                {/* </div>

        
        
     
                
                <div className="container">
                    
                        <div className="box">
                            <a href="https://github.com/saravorhaben">GitHub Link</a>
                        </div>
                        <div className="box">
                            <a href="https://docs.google.com/document/d/1YADevJS-kKg9v8TdATa5FGB6BMKXgDpTx1bLgVq33h0/edit?tab=t.0#heading=h.hjautw98nc87">Resume Link</a>
                        </div>
                </div>
            </div>
    */}
       
    
    
      

      
       
        
        

  
       
        {/* <script src="toggleControls.js"></script> */}



    
    </>)
}