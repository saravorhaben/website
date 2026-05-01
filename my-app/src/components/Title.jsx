import "../pages/new.css";
export default function Title(props){
    return(
        <>
         <div className="Heading flex flex-row bg-black justify-center  text-center text-4xl w-full font-serif p-0">
               <h1>{props.titleName}</h1>
            </div> 
        </>
    )
}