
export default function Title(props){
    return(
        <>
         <div className="flex flex-row bg-[#333333] justify-center text-white  text-center text-4xl w-full font-serif p-0">
               <h1>{props.titleName}</h1>
            </div> 
        </>
    )
}