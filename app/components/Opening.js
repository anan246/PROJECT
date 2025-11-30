export default function Opening(){
    return(
     <div className="relative flex flex-col md:flex-row space-x-5">
        <div className="border-2 border-gray-300 rounded-3xl w-full  md:h-[400px] md:w-[500px]  ml-2 mr-2 md:ml-[150px] mt-[100px]">
           <h2 className="text-4xl font-semibold text-center mt-2.5">Opening Hours</h2>
           <p className="text-xl mt-3 ml-2.5 text-gray-500">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..</p>
            <div className="text-xl font-semibold mt-5 p-2 ">
                <p>Sunday to Tuesday: --------------- 10:00 - 09:00</p>
                <p>Wednesday to Thursday: --------------- 11:30 - 10:30</p>
                <p>Friday to Saturday: --------------- 10:30 - 12:00</p>
                <div className="flex ">
                    <div className="h-[100px] rounded-3xl mt-2.5">
                        <img className="h-[100px] rounded-3xl"src="https://img.freepik.com/premium-vector/phone-icon-symbol-sign-isolate-white-backgroundvector-illustration_112413-619.jpg?semt=ais_hybrid&w=740&q=80"></img>
                    </div>
                <h2 className="text-amber-800 text-2xl mt-10 font-sans">Call Anytime

+964733-378901</h2>
</div>
          
            </div>
        </div>
        <div className="mt-[100px] ">
            <iframe className=" w-full md:w-[760px]" width="760" height="506" src="https://www.youtube.com/embed/F3zw1Gvn4Mk" title="Mr Fox Restaurant Promo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
     </div>
    );
}