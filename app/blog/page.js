import Footer from "../components/Footer"
export default function(){
    const blog=[
{
    img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75",
    id:1,
    h1:"⌂ 12 August, 2024  👤 john Baus",
    sub:"Picked up a Brussels burger Sprouts.",
    p:"Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    button:"Read More"
},
{
    img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75",
     id:2,
    h1:"⌂ 13 August, 2024  👤 Admin",
    sub:"This prefabricated passive house highly",
    p:"Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    button:"Read More"
},
{
    img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75",
     id:3,
    h1:"⌂ 13 August, 2024  👤 john Baus",
    sub:"Overcame breeding point concerns has.",
    p:"Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    button:"Read More "
},


    ]
    return(
        
    <div className="relative dark:bg-white">
      <div className="hidden md:block md:h-[50px] w-full bg-yellow-800 flex items-center ">
        <div className="flex text-white text-1xl ml-5">
            <h2>Phone: +4733378901</h2>
         <h2 className="ml-4"> Email: food@restan.com</h2>
        </div>
       <div className="flex ml-[1000px] mt-[-10px] text-white">
        <select className="text-2xl">
          <option>English</option>
          <option>Kannada</option>
          <option>Hindi</option>
          <option>Marathi</option>
          <option>Telugu</option>
        </select>
        <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-5">
          F
        </div>
          <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-5">
          I
        </div>
          <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-5">
          T
        </div>
       </div>
      </div>
      <div  className="h-[300px] md:h-[550px] bg-contain w-full md:w-[1530px]" style={{
        backgroundImage:"url('images/menu3.jpg')"
      }}>
        <div className="relative flex">
           <div className="h-[80px] pt-5">
            <img  className="h-[50px] md:h-[80px] ml-38 md:ml-8" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"></img>
           </div>
           <div className="hidden md:block text-white text-xl mt-12 ml-[300px] ">
            <select className="pl-4">
            <option>Home</option>
         </select>
           <select className="pl-4">
             <option>Pages</option>
           </select>
           <select className="pl-4">
             <option>Menu</option>
          </select>
            <select className="pl-4">
             <option>Blog</option>
          </select>
            <select className="pl-4">
             <option>Shop</option>
           </select>
           </div>
           <div className="hidden md:block text-white border-2 border-white p-5 h-[70px] w-[200px] text-2xl  mt-5 ml-[300px] hover:bg-white hover:text-black">
            Reservation
           </div>
        </div>
        <hr className="border-1 border-white mt-2"></hr>
          <div className="text-white text-5xl font-semibold text-center mt-10 md:mt-40">Blog Standard
</div>
        <div className="text-white text-xl text-center mt-5"> Homeblog-standard
</div>
        </div>
        <div className="md:mt-30 mt-20 space-y-10">
 {
            blog.map(blog=>(
              <div className="flex flex-col rounded-2xl   ml-5 mr-5 md:ml-70 h-185 md:h-200  md:w-[1000px] border border-gray-200 items-center" key={blog.id} >
                <img className=" h-[500px]  rounded-2xl w-full dark:border border-white " src={blog.img}></img>
                <div className="ml-[50px] md:ml-[80px] mt-5 space-y-5">
                <h2 className="mt-2 hover:text-yellow-600 dark:text-black ">{blog.h1}</h2>
                <strong className="text-4xl hover:text-yellow-600 text-black ">{blog.sub}</strong>
                
                <div className="text-1xl mt-4  flex flex-col text-gray-500">
                  <h2 >{blog.p}</h2>
                  </div>
              <button className="bg-yellow-600 rounded-4xl text-bold hover:bg-blue-900 text-white h-15 w-40">{blog.button}</button>
              </div>
              </div>
            ))
          }
</div>
       <Footer />
        </div>
)}