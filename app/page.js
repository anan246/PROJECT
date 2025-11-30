import Items from "./components/Items";
  import Online from "./components/Online";
import Opening from "./components/Opening";
  import Link from "next/link";
  import Chef from "./components/Chef";
  import Blog from "./components/Blog";
  import Footer from "./components/Footer";
  
export default function hotel(){
  
  const food = [
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=1920&q=75",
      id:1,
      title:"chicken alfredo"
    },
     {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F28.jpg&w=1920&q=75",
      id:2,
      title:"hot beverage"
    },
     {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=1920&q=75",
      id:3,
      title:"salmon fry"
    },
     {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75",
      id:4,
      title:"cheese cake"
    },
     
  ]
  const service = [
        {
           img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75",
           id:1,
           title:"Quality Foods",
           p:"Belonging sir curiosity discovery extremity yet forfeited prevailed own off.",
           p1:" Traveling by introduced of mr terminated"
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75",
            id:2,
            title:"Fast Delivery",
            p:"Belonging sir curiosity discovery extremity yet forfeited prevailed own off.",
            p1:" Traveling by introduced of mr terminated",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75",
            id:3,
            title:"Delicious Recipes",
            p:"Belonging sir curiosity discovery extremity yet forfeited prevailed own off.",
            p1:" Traveling by introduced of mr terminated.",
        }

    ]
  return (
   <div className="relative bg-contain bg-center h-[500px]  md:h-[800px] " style={{
      backgroundImage: "url('images/banner.jpg')"
    }}>
   
        
        
    
    <div className=" flex items-center px-5 mx-5 space-x-4 pt-3">
      <h2 className="  hidden md:block text-lg text-white font-semibold bg-none">Phone: +4733378901</h2>
      <h2 className="  hidden md:block text-lg text-white font-semibold bg-none">Email: food@restan.com</h2>
      <h2 className="  hidden md:block text-lg text-white font-semibold bg-none ml-[600px]">175 10h Street, Office 375 Berlin, De 21562</h2>
    </div>
    <hr className="border-1 border-white mt-2"></hr>
    <div className="flex mt-8 ">
      <div  className="flex ml-[80px] space-x-5 ">
      <select className="hidden md:block text-lg font-semibold text-white border-black-1">
        <option>Home</option>
        </select>
        
        <Link href="/About">
        <button className="hidden md:block text-lg font-semibold text-white border-black-1">About us</button>
        </Link>
        
         
        <Link href="/Menu">
        <button className="hidden md:block text-lg font-semibold text-white border-black-1">Menu</button>
        </Link>
        <Link href="/Login">
        <button className="hidden md:block text-lg font-semibold text-white border-black-1">Login</button>
        </Link>
        </div>
        <div className="absolute left-1/2 ">
        <img  className={"h-[80px] w-[150px]   mt-[10px] ml-[-50px] "}src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"></img>
        </div>
        <div className="flex ml-[700px] space-x-5">
         <select className="hidden md:block text-lg font-semibold text-white border-black-1 ">
        <option className="text-black bg-none">Shop</option>
        <option className="text-black bg-none">Shop single</option>
        <option  className="text-black bg-none">Shop single two</option>
        <option className="text-black bg-none">Cart</option>
        </select>
        
        <Link href="/contact">
         <button className="hidden md:block text-lg font-semibold text-white border-black-1 ">Contact us</button></Link>
        
        <Link href="/blog">
         <button className="hidden md:block text-lg font-semibold text-white border-black-1 ">Blog</button></Link>
         
        
      
      </div>
    </div>
    <div className=" text-4xl md:text-8xl text-white font-semibold flex items-center justify-center  mt-[150px] md:mt-[200px] ">
      Best Restaurant


    </div>
    <div className="flex items-center justify-center mt-5 md:mt-15">
    <div className="rounded-full border-2 border-white w-40 h-40 text-xl text-white font-bold flex items-center justify-center pl-5  hover:bg-black hover:text-white">
      Best Food Since - 1865
    </div>
    </div>

    <div className="hidden md:block h-30 w-30 border-2 border-gray-300 rounded-full ml-[200px] absolute bottom-30">
      <img  className="hidden md:block h-30 w-30 border-2 border-gray-300 rounded-full " src="https://t3.ftcdn.net/jpg/05/53/00/78/360_F_553007886_vpgBDlwAyAaCTABowvIaPMPg437haVKR.jpg"></img>
    </div>
     

    
    <div className="flex md:space-x-[500px]  ">
    <div className=" flex flex-col h-[450px] w-350 md:w-[400px] border-2 border-gray-300 bg-white text-black pb-[50px] space-y-5 p-2 mt-[100px] md:mt-2.5 rounded-4xl ml-1 md:ml-15">
      <div className=" text-black text-3xl font-semibold">
        <h2 className="mt-9 flex items-center justify-center">Book a table</h2>
      </div>
      <input className="text-black border-2 border-gray-300 rounded-3xl p-2 mt-2" placeholder="Name" type="text"></input>
      <select className="text-black border-2 border-gray-300 rounded-3xl p-2">
        <option >1 person</option>
        <option>2 person</option>
        <option>3 person</option>
        <option>4 person</option>
        <option>5 person</option>
        <option>6 person</option>
        
      </select>
      <input className="text-black border-2 border-gray-300 rounded-3xl p-2" placeholder="Date" type="date"></input>
      <select className="text-black border-2 border-gray-300 rounded-3xl p-2" >
        <option>10:00 am</option>
        <option>11:00 am</option>
        <option>12:00 am</option>
        <option>1:00 am</option>
        <option>2:00 am</option>
      </select>
      <button className="bg-amber-500 text-black border-2 border-gray-300 rounded-3xl p-2 mt-3 hover:bg-black hover:text-white">Book now!</button>
    </div>
    <div >
      <h2 className=" text-5xl dark:text-white text-black font-semibold absolute top-[800px] md:mt-5 mt-[200px] ml-[-300px]  ">Our popular category </h2>
    </div>
    <div className=" md:flex  md:flex absolute md:top-[900px] top-[1100px] ml-[2px] md:ml-[700px]  ">
      {
        food.map(food=>(
          <div key={food.id}>
            <img src={food.img} className="h-[300px] w-[400px] md:h-[200px] md:w-[300px] p-3 "></img>
            <h2>{food.title}</h2>
          </div>
        ))
      }
    </div>
  </div>
     <div className="flex flex-col  md:flex-row  mt-[500px] md:mt-[100px] space-y-20 md:space-x-60 pl-8 ml-10  ">
            {
                service.map(service=>(
                    <div key={service.id}>
                        <img src={service.img} className="h-[100px] w-[100px]"></img>
                        <h2 className="text-xl w-full ">{service.title}</h2>
                        <p>{service.p}</p>
                        <p>{service.p1}</p>
                    </div>
                ))
            }
        </div>
        <div className="h-[800px] md:h-[500px] w-full md:w-[1050px] border-2 border-gray-200 bg-amber-500 rounded-3xl  md:ml-[250px] mt-12 md:flex space-x-16">
          <div className="items-center">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75" className="w-[100px] h-[60px] md:h-[150px] pl-2.5"></img>
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75" className="mr-[200px] w-[1000px] md:w-[400px] pl-1.5 h-[250px] md:h-[300px]  md:pl-15"></img>
          </div>
          <div className="items-center">
          <h2 className="text-black text-5xl font-semibold w-full  mt-20 ">Explore Irresistible Promotions!</h2>
          <p className="text-sm mt-5">Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.<br></br> To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.</p>
          </div>
          
        </div>
        <button className="md:ml-[750px] ml-[30px]  absolute mt-[-140px]  md:top-[1950px] border-2 border-gray-300 p-3 hover:bg-black hover:text-white rounded-3xl bg-amber-700">Order today</button>
        
        <Items />
        <Online />
        <Opening /> 
        <Chef />
       <Blog />
       <Footer />
    </div>
   
  );
}