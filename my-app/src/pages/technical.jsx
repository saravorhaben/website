import Title from '../components/Title';
import "./new.css";
import { GitHubCalendar } from 'react-github-calendar';
export default function Technical(){
    return(<>
        <Title titleName="Projects" />
       

        <h2>Completed Projects</h2>
        <div className="grid grid-cols-3 gap-4 p-4">
            <div className="block">
                <p><strong>ShareTea POS</strong></p>
            </div>
            <div className="block">
                <p><strong>ShareTea POS</strong></p>
            </div>
            <div className="block">
                <p><strong>ShareTea POS</strong></p>
            </div>

        </div>
        
        <h2>In Progress Projects</h2>
        <div className="grid grid-cols-3 gap-4 p-4">
            <div className="block">
                <p><strong>School Pick Up System</strong></p>
            </div>
            <div className="block">
                <p><strong>Keeper</strong></p>
            </div>
            

        </div>
        <h2>GitHub Activity</h2>
        <GitHubCalendar username="saravorhaben" />
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