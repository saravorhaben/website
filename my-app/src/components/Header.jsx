import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
         <div className="flex flex-row bg-[#333333] justify-between text-white text-center w-full font-serif p-0">
                
                <Link to="/portfolio">Technical</Link>
                <Link to="/qualifications">Resume</Link>
                <Link to="/">Sara Vorhaben</Link>
                
            </div> 
        </>
    )
}