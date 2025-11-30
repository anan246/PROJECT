import Footer from "../components/Footer"
import Opening from "../components/Opening"

export default function(){
    const contact=[
{
    img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75",
    id:1,
    sub:"Hotline",
    p:"+4733378901"
},
{
    img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75",
     id:2,
    sub:"Our Location",
    p:"55 Main Street, The Grand Avenue 2nd Block, New York City"
},
{
    img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75",
     id:3,
  sub:"Official Email",
    p:"info@restan.com "
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
          <div className="text-white text-5xl font-semibold text-center mt-10 md:mt-40">Contact Us
</div>
        <div className="text-white text-xl text-center mt-5"> ⌂ Home-contact
</div>
        </div>
                <div className="md:mt-30 mt-20 space-y-10 flex flex-col md:flex-row">
 {
            contact.map(contact=>(
              <div className="flex flex-col  rounded-2xl md:ml-20  h-60 h-60 w-full md:w-95 border border-gray-200 items-center" key={contact.id} >
                <img className=" h-20 rounded-2xl w-20 dark:border mt-8 border-white " src={contact.img}></img>
                <div className="ml-[50px] md:ml-[30px] items-center  mt-5 space-y-5">
                
                <strong className="text-4xl hover:text-yellow-600  text-black ">{contact.sub}</strong>
                
                <div className="text-1xl mt-4  flex flex-col text-gray-500">
                  <h2 >{contact.p}</h2>
                  </div>
              </div>
              </div>
            ))
          }
</div>
<div className="flex flex-col h-180 w-full  md:w-250  mt-10 rounded-2xl border border-gray md:ml-70">
  <strong className="text-2xl text-yellow-600 mt-20 md:ml-90 ml-11">-----KEEP IN TOUCH-----</strong>
 <strong className="text-4xl md:text-5xl text-black mt-5 md:ml-70 ml-10">Send us a Massage</strong>
 <input type="text" id="1" placeholder="Name" className="border-2 border-gray-300 dark:text-black ml-5 mt-8 p-5 rounded-2xl h-[50px]  md:w-[900px] bg-gray-200"></input>
<div className="flex flex-col md:flex-row">
   <input type="email" id="1" placeholder="Email" className="border-2 border-gray-300 dark:text-black ml-3 mt-8 p-5 rounded-2xl h-[50px] md:w-[450px] bg-gray-200"></input>
    <input type="type" id="1" placeholder="Phone" className="border-2 border-gray-300 dark:text-black ml-3 mt-8 p-5 rounded-2xl h-[50px] md:w-[450px] bg-gray-200"></input>
</div>
 <input type="text" id="1" placeholder="Your Message" className="border-2 bottom-[-50px] border-gray-300 dark:text-black ml-5 mt-8 p-5 rounded-2xl h-[200px] md:w-[900px] bg-gray-200"></input>
<button className="bg-yellow-600 w-40 h-10 ml-7 mt-8 rounded-2xl">Get In Touch</button>
</div>
   <Opening />
   <Footer />
        </div>
    )}