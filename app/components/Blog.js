export default function Blog(){
  const blog =[
    {
      id:"1",
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75",
      h:"By Md SohagBurger ,Food",
      des:"Picked up a Brussels burger Sprouts with ham",
      p:"Read More ",
    },
     {
      id:"2",
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75",
      h:"By Md SohagBurger ,Food",
      des:"This prefabricated passive house is highly sustainable",
      p:"Read More ",
    }
  ]
  return(
    <div className="relative mt-[50px]">
      <h2 className="text-2xl text-amber-700 text-center font-semibold">---News & Blog---</h2>
      <h2 className="text-black text-5xl text-center font-bold mt-5">Our Latest News & Blog</h2>
      <div className="md:flex">
        {
        blog.map(blog=>(
          <div key={blog.id} className="space-x-10 md:ml-23 mt-8">
             <img src={blog.img} className="h-[500px] w-[600px]"></img>
             <div className="md:h-[100px] md:w-[550px] md: bg-amber-800 text-white text-center border-2 border-gray-300 ml-[22px] absolute bottom-[-80px]">
              <h2 className="text-xl">{blog.h}</h2>
              <h2 className="text-2xl">{blog.des}</h2>
              <h2 className="text-xl">{blog.p}</h2>
             </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}