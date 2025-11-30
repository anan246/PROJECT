"use client";
import { useState} from "react";
export default function Items(){
  const [selectedCategory, setSelectedCategory] = useState("Main Dishes");
  const [cart, setCart] = useState([]);
    const item = [
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
            id:1,
            rating:"4.2(3.1K)",
            title:"Braised chicken legs ",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
            category:"Main Dishes",
            
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75",
            id:2,
            rating:"4.9(5.7K)",
            title:"Bone streak",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
            category:"Main Dishes",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75",
            id:3,
            rating:"4.8(6.7K)",
            title:"Fish tacos with chipotle crema",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
            category:"Main Dishes",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75",
            id:4,
            rating:"5(3.7K)",
            title:"Broken lasagna & parmesan",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
            category:"Main Dishes",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75",
            id:5,
            rating:"4.6(6.7K)",
            title:"Seared Scallops with butter",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
            category:"Main Dishes",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75",
            id:6,
            rating:"4.8(6.7K)",
            title:"Double -stack Mushroom",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
            category:"Main Dishes",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F7.jpg&w=1920&q=75",
            id:"7",
            rating:"4.9(5.7K)",
            title:"Vanilla Cupcakes",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Deserts",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F8.jpg&w=1920&q=75",
            id:"8",
            rating:"4.8(6.7K)",
            title:"chocolate brownie",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Deserts",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F9.jpg&w=1920&q=75",
            id:"9",
            rating:"4.8(6.7K)",
            title:"Croissants Sweet Rolls Muffin",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Deserts",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F10.jpg&w=1920&q=75",
            id:"10",
            rating:"4.8(6.7K)",
            title:"White Chocolate Cheesecake",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Deserts",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F11.jpg&w=1920&q=75",
            id:"11",
            rating:"4.8(6.7K)",
            title:"Lemon Meringue Pie",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Deserts",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F12.jpg&w=1920&q=75",
            id:"12",
            rating:"4.8(6.7K)",
            title:"Mixed Berry Mousse",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Deserts",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F13.jpg&w=1920&q=75",
            id:"13",
            rating:"4.8(6.7K)",
            title:"Salmon fry",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Sea food",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F14.jpg&w=1920&q=75",
            id:"14",
            rating:"4.8(6.7K)",
            title:"Basa",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Sea food",
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F15.jpg&w=1920&q=75",
            id:"15",
            rating:"4.8(6.7K)",
            title:"Spicy stuffed clams",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Sea food",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F16.jpg&w=1920&q=75",
            id:"16",
            rating:"4.8(6.7K)",
            title:"Cajun red crab",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Sea food",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F17.jpg&w=1920&q=75",
            id:"17",
            rating:"4.8(6.7K)",
            title:"Crustaceans such as lobsters",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Sea food",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F18.jpg&w=1920&q=75",
            id:"18",
            rating:"4.8(6.7K)",
            title:"The cephalopod mollusks",
            p:"4 chicken legsChili sauceSoft Drinks",
            category:"Sea food",
        },
         
         
    ];
    const categories =["Main Dishes", "Deserts", "Sea food"];
    const filteredItems = item.filter((i) => i.category === selectedCategory);
    const addToCart = (item) => {
      setCart([...cart, item]);
    };
    return(
     <div className="relative z-0">
       <div>
          <p className="text-amber-800 text-center mt-5 text-3xl">Food Menu</p>
          <p className="text-5xl font-semibold text-center mt-1.5">Our Specials Menu</p>
          <div className="flex justify-center gap-6 mt-6">
            {categories.map((cat) =>(
              <button key={cat}
                 onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full border-2 text-xl font-semibold ${
                    selectedCategory === cat ? "bg-amber-800 text-white" : "bg-white text-black"
                  
                  }`}>
                 {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4" >
            {
              filteredItems.map(item=>(
               <div key={item.id} className="h-[600px]  w-full md:w-[500px] border-2 border-gray-300 rounded-3xl ">
                <img src={item.img} className="border-2 border-gray-300 rounded-t-3xl"></img>
                <h2 className="text-4xl mt-2.5 md:ml-1.5">{item.rating}</h2>
                <h2 className="text-3xl mt-2.5 md:ml-1.5">{item.title}</h2>
                <p className="mt-2.5 md:ml-1.5">{item.p}</p>

                <button onClick={() => addToCart(item)} className="border-black h-[35px] w-full md:w-[400px] border-2 rounded-3xl mt-5 md:ml-6 hover:text-black">Add to cart</button>
               </div>
              ))  
            }
            
        </div>
        <div className="mt-2">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items </p>
          ):(
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="text-lg">{item.title}</li>
              ))}
            </ul>
          )}
        </div>
        </div>

    );
}