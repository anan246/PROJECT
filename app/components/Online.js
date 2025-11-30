export default function Online(){
    return(
     <div className="relative h-[900px] md:h-[650px] md:w-[1150px] border-2 border-gray-300 md:ml-[200px] ml-3 mr-3 md:mt-[10px] bg-gray-800 rounded-3xl mb-2.5 ">
       <div className="flex flex-col  md:flex-row mt-10">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" className="h-[300px] ml-[30px] md:h-[500px] mt-6"></img>
        <div>
        <h2 className="text-5xl text-white mt-5">Are you Ready to Start your online Order?</h2>
        <h2 className="text-xl text-white mt-7 md:mt-5">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.<br></br> Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</h2>
        <div className="mt-8">
            <button className="text-xl border-2 border-white rounded-3xl ml-[80px] p-3 bg-white text-black hover:bg-black hover:text-white">Play store</button>
            <button className="text-white text-xl border-2 border-white rounded-3xl p-3 ml-5 bg-amber-900 hover:bg-black hover:text-white">App store</button>
        </div>
        </div>
       </div>
     </div>
    );
}