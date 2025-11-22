export default function menu(){
  const menu =[
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75",
      id:1,
      title:"Chicken Alfredo",
      p:"Ricotta / goat cheese / beetroot",
      rate:"$20"
    },
     {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75",
      id:2,
      title:"Fish chips",
      p:"Atlantic / chips / salad / tartare",
      rate:"$50"
    },
     {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75",
      id:3,
      title:"Ebony Fillet Steak",
      p:"Truffle mash / pepper sauce",
      rate:"$80"
    },
     {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75",
      id:4,
      title:"Chicken Grill",
      p:"Ricotta / goat cheese / beetroot",
      rate:"$50"
    },
  ]
  return(
    <div className="Relative">
     <div className="hidden md:block md:h-[50px] w-full bg-yellow-800 flex items-center">
      <div className="text-white text-xl ml-5">
        <a className="pl-1.5">Phone: +4733378901</a>
        <a className="pl-5"> Email: food@restan.com</a>
      </div>
       <div className="flex items-center justify-center ml-[850px] mt-[-15px]">
        <select className="text-white text-xl">
          <option>English</option>
        </select>
        <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-blue-700 flex items-center justify-center ml-[25px]">
          F
        </div>
         <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-pink-700 flex items-center justify-center ml-[25px]">
          I
        </div>
         <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-blue-800 flex items-center justify-center ml-[25px]">
          T
        </div>
        
       </div>
       
     </div>
     <div className="bg-contain h-[400px] md:h-[550px] w-full md:w-[1530px]"style={{
      backgroundImage: "url('images/menu3.jpg')"
     }}>
      
        <div className=" flex">
          <div className="">
        <img  className={"h-[100px] w-[140px] ml-15 pt-4"}src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"></img>
        </div>
        <div className=" hidden md:block text-white text-2xl mt-10 ml-[230px] space-x-3">
          <select>
            <option>Home</option>
          </select>
           <select>
            <option>Pages</option>
          </select>
           <select>
            <option>Menu</option>
          </select>
           <select>
            <option>Blog</option>
          </select>
           <select>
            <option>Shop</option>
          </select>
        </div>
        <div className=" hidden md:block text-xl text-white border-white border-2 p-5 flex items-center mt-4 ml-[450px]">
          Reservation
        </div>
       
        </div>
        <hr className="border-0.5 border-gray-400 mt-4"></hr>
         <div className="text-5xl text-white mt-[90px] text-center font-semibold">
          Restaurant Best Food
        </div>
     </div>
     <div className="flex md:flex-row flex-col space-x-[-20px] ">
      <div className="h-[600px] w-full  md:w-[500px] mt-[50px] md:ml-[70px] dark:border border-white ml-[50px]">
        <img src="https://www.1mg.com/articles/wp-content/uploads/2025/08/731.jpg"></img>
      </div>
      <div className="md:ml-[100px] ">
        <div className="flex ml-[600px] mt-5  " >
          <h2 className="hidden md:block h-[30px] border-2 border-gray-500 dark:text-white text-black w-[50px] flex items-center justify-center ml-2.5 mr-10 pl-2">Half</h2>
          <h2 className="hidden md:block h-[30px] border-2 border-gray-500 dark:text-white text-black w-[50px] flex items-center justify-center ml-8 pl-2">Full</h2>
        </div>
        <div className="md:ml-[300px] mt-2 mr-10">
          {
            menu.map(menu=>(
              <div className="flex pt-5 items-center space-x-6" key={menu.id}>
                <img className="hidden md:block rounded-full h-[125px] dark:border border-white " src={menu.img}></img>
                <div className="ml-[50px] md:ml-[80px] mt-5">
                <h2 className="flex-col">{menu.title}</h2>
                <h2>{menu.p}</h2>
                </div>
                <div className="text-3xl mt-4 ml-[50px] flex flex-col text-yellow-800">
                  <h2>{menu.rate}</h2>
              </div>
              </div>
            ))
          }
        </div>
      </div>
     </div>
     <div className="h-[600px] dark:border border-white  w-full md:w-[1200px] bg-gray-800 border-black border-2 md:ml-[165px] mt-[100px] rounded-3xl flex">
      <div className="">
        <h2 className="text-5xl text-white mt-10 ml-7 font-semibold">30 Minutes Delivery!</h2>
        <h2 className="text-white text-2xl ml-3.5 mt-18">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. <br></br>The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</h2>
          <button className="border-2 border-gray-600 p-5 text-white text-2xl ml-8 mt-[70px] md:mt-[100px] rounded-3xl bg-amber-900 hover:bg-black hover:text-white">Order Now!</button>
      </div>
      <div>
        <img  className="hidden md:block h-[500px] mt-5 "  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"></img>
      </div>
     </div>
    </div>
  );
}