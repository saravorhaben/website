import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
         <div className="Header-bar flex flex-row bg-black justify-between text-white text-center w-full  p-4">
                <Link  to="/">Sara Vorhaben</Link>
                <Link to="/portfolio">Technical</Link>
                <Link to="/qualifications">Resume</Link>
                <Link to="/contact">Contact Me</Link>
            </div> 
        </>
    )
}