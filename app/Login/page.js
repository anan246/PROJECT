import Blog from "../components/Blog";
import Footer from "../components/Footer";
export default function Login(){
    return(
    <div className="relative">
      <div className="hidden md:block h-[50px] w-full bg-yellow-800 flex items-center ">
        <div className="flex text-white text-2xl ml-5">
            <h2>Phone: +4733378901</h2>
         <h2 className="ml-4"> Email: food@restan.com</h2>
        </div>
       <div className="flex items-center justify-center ml-[900px] text-white mt-[-18px]">
        <select className="text-2xl">
          <option>English</option>
          <option>Kannada</option>
          <option>Hindi</option>
          <option>Marathi</option>
          <option>Telugu</option>
        </select>
        <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-blue-600 flex items-center justify-center ml-5">
          F
        </div>
          <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-pink-700 flex items-center justify-center ml-5">
          I
        </div>
          <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-blue-800 flex items-center justify-center ml-5">
          T
        </div>
       </div>
      </div>
      <div  className="h-[300px] md:h-[550px] bg-contain md:w-[1530px]" style={{
        backgroundImage:"url('images/menu3.jpg')"
      }}>
        <div className="relative flex">
           <div className="h-[80px] pt-5">
            <img  className="h-[80px] ml-8" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"></img>
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
           <div className="hidden md:block text-white border-2 border-white rounded-4xl p-5 h-[80px] w-[200px] text-2xl  mt-5 ml-[300px] hover:bg-white hover:text-black">
            Reservation
           </div>
        </div>
        
          <div className="text-white text-5xl font-semibold text-center mt-10">Login</div>
        <div className="text-white text-xl text-center mt-5">Login</div>
         
     
      </div>
      <div className="flex flex-col md:flex-row">
        <div>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75" className="  dark:border border--white h-[500px] md:h-[700px] w-[600px] md:ml-[200px] mt-[50px]"></img>
        </div>
        <div className="h-[700px] w-full md:w-[600px] border-2 border-gray-300 rounded-2xl hover:bg-black hover:text-white bg-white md:ml-[50px] mt-[50px]">
           <h2 className="text-amber-600 text-5xl font-semibold ml-[50px] mt-[50px]">Welcome back</h2>
           <h2 className="text-xl  dark:text-black text-gray-700 ml-[50px] mt-[50px]">Enter your email and password to continue</h2>
           <div className="mt-[50px] ml-[50px]">
            <div className="">
                <input type="text" id="1" placeholder="Email*" className="border-2 border-gray-300 dark:text-black  p-5 rounded-2xl h-[50px] md:w-[500px] bg-gray-200"></input>
            </div>
            <div>
                <input type="password" id="2" placeholder="Password*" className="border-2 border-gray-300 dark:text-black  p-5 rounded-2xl h-[50px] md:w-[500px] mt-5 bg-gray-200"></input>
            </div>
           
           </div>
           <button className="text-white border-2 border-gray-300 bg-amber-700 p-5 rounded-2xl h-[50px] md:w-[500px] mt-15 ml-[50px] flex items-center justify-center">Login</button>
           <h2 className="text-3xl text-black  mt-9 font-semibold text-center ">Or Login With</h2>
           <div className="flex ml-[50px] mt-[50px]">
               <div className="border-2 border-gray-300 p-5 text-white bg-gray-400 h-[50px] w-[150px] flex items-center text-center text-2xl justify-center">
            Google
           </div>
           <div className="border-2 border-gray-300 p-5 text-white bg-gray-400 h-[50px] w-[150px] flex items-center text-center text-2xl md:ml-[180px] justify-center">
            Facebook
           </div>
           </div>
          
        </div>
      </div>
      <Blog />
      <Footer />
      </div>
    );
}