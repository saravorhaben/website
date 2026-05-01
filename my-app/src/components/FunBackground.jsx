// not functional
export default function FunBackground(){
    return(
<div className="relative  w-[10000] h-max">
  <div className="absolute inset-0 bg-gradient-to-br from-[#518CA4] via-[#5227FF] to-[#B497CF]" />
  
  <div className="absolute inset-0 blur-3xl opacity-60 
    bg-[radial-gradient(circle_at_30%_30%,#ffffff22,transparent_40%),
         radial-gradient(circle_at_70%_70%,#00000022,transparent_40%)]" />
</div>
    );
}