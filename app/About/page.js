import Blog from "../components/Blog";
import Footer from "../components/Footer";
export default function(){
  return(
   <div className="relative">
      <div className="hidden md:block md:h-[50px] w-full bg-yellow-800 flex items-center">
        <div className="flex text-white text-2xl ml-5">
            <h2>Phone: +4733378901</h2>
         <h2 className="ml-4"> Email: food@restan.com</h2>
        </div>
       <div className="flex ml-[1000px] mt-[-10px]  items-center justify-center  text-white">
        <select className="text-2xl mt-[-10px]">
          <option>English</option>
          <option>Kannada</option>
          <option>Hindi</option>
          <option>Marathi</option>
          <option>Telugu</option>
        </select>
        <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-blue-600 flex items-center justify-center ml-5 mt-[-10px]">
          F
        </div>
          <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-pink-700 flex items-center justify-center ml-5 mt-[-10px]">
          I
        </div>
          <div className="h-[30px] w-[30px] text-white border-white rounded-full bg-blue-800 flex items-center justify-center ml-5 mt-[-10px]">
          T
        </div>
       </div>
      </div>
      <div  className="h-[300px] md:h-[550px] bg-contain w-full md:w-[1530px]" style={{
        backgroundImage:"url('images/menu3.jpg')"
      }}>
        <div className="relative flex">
           <div className="h-[80px] pt-5">
            <img  className="h-[50px] md:h-[80px] ml-8" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"></img>
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
           <div className="hidden md:block text-white border-2 border-white p-5 h-[80px] w-[200px] text-2xl  mt-5 ml-[300px] hover:bg-white hover:text-black">
            Reservation
           </div>
        </div>
        
          <div className="text-white text-5xl font-semibold text-center mt-10">About Us</div>
        <div className="text-white text-xl text-center mt-5">Home -about-us</div>
       
     
      </div>
      <hr className="border-2 border-white mt-2"></hr>
      <div className="relative bg-yellow-200 h-[400px] md:h-[500px] w-full">
        <div className="text-yellow-700 text-3xl text-center pt-7">----OUR TRUSTED 8K HAPPY PARTNER----</div>
        <div className="h-[150px] w-[300px] md:h-[200px] md:w-[1400px] md:ml-[60px] ml-3 mt-[50px] md:mt-[100px] md:bg-contain" style={{
          backgroundImage:"url('images/hotel.png')"
        }}></div>
      </div>
      <div className="flex md:flex-row flex-col md:space-x-5  ">
        <div className="flex space-x-8 mt-[100px] ml-5">
          <img className="h-[500px] w-[400px]" src="https://images.stockcake.com/public/e/c/9/ec99397d-f907-4b71-b645-479318f7c71e_large/chef-serving-food-stockcake.jpg"></img>
          <img  className="hidden md:block h-[500px] w-[400px]"src="https://www.shutterstock.com/image-photo/restaurant-kitchen-portrait-confident-chef-600nw-2645077225.jpg"></img>
        </div>
        <div className="h-[500px] w-full md:w-[700px] border-gray-200 border-2 mt-23">
            <h2 className="text-amber-700 text-3xl font-semibold ml-[50px] mt-[50px]">About us</h2>
             <h2 className="text-5xl dark:text-white text-black font-semibold mt-5 ml-[50px]">We Invite You
               To Visit Our Restaurant</h2>
               <p className="text-amber-700 mt-5 ml-[50px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. <br></br>The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting</p>
               <button className="border-2 border-white p-5 bg-amber-800 text-white hover:bg-black ml-[50px] mt-8">Discover more</button>
        </div>
      </div>
      <Blog />
      <Footer />
   </div>
  );
}