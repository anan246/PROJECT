export default function Items(){
    const item = [
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
            id:1,
            rating:"4.2(3.1K)",
            title:"Braised chicken legs ",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
            
        },
        {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75",
            id:2,
            rating:"4.9(5.7K)",
            title:"Bone streak",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75",
            id:3,
            rating:"4.8(6.7K)",
            title:"Fish tacos with chipotle crema",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75",
            id:4,
            rating:"5(3.7K)",
            title:"Broken lasagna & parmesan",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75",
            id:5,
            rating:"4.6(6.7K)",
            title:"Seared Scallops with butter",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
        },
         {
            img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75",
            id:6,
            rating:"4.8(6.7K)",
            title:"Double -stack Mushroom",
            p:"4 chicken legs *Chili sauce *Soft Drinks",
        },
         
    ]
    return(
     <div className="relative ">
       
        <div className="grid grid-rows-3 md:grid-cols-3 gap-10 mt-6" >
            {
              item.map(item=>(
               <div key={item.id} className="h-[580px] md:w-[500px] border-2 border-gray-300 rounded-3xl ">
                <img src={item.img} className="border-2 border-gray-300 rounded-t-3xl"></img>
                <h2 className="text-4xl mt-2.5 ml-1.5">{item.rating}</h2>
                <h2 className="text-3xl mt-2.5 ml-1.5">{item.title}</h2>
                <p className="mt-2.5 ml-1.5">{item.p}</p>
                <button className="border-black h-[35px] w-[400px] border-2 rounded-3xl mt-5 ml-6 hover:bg-black hover:text-white">Add to Cart</button>
               </div>
              ))  
            }
            
        </div>
        </div>

    );
}