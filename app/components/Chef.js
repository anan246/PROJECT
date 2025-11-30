export default function Chef(){
  const chef =[
    {
      id:"1",
      img:"https://media.istockphoto.com/id/2030133420/photo/happy-black-cook-serving-a-meal-in-the-kitchen-in-restaurant-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=FD82J5GsVYSB9BzPCpc0qSXa_lbHIm-8LHI-tpGkviE=",
      title:"Alexander Petllo",
      p:"Assistant Chef",
    },
    {
      id:"2",
      img:"https://hips.hearstapps.com/hmg-prod/images/host-judge-gordon-ramsay-in-the-hells-kitchen-semi-finals-news-photo-1718650477.jpg?crop=1.00xw:0.650xh;0,0.0433xh&resize=480:*",
      title:"Mendia Juxef",
      p:"Burger King",
    },
    {
      id:"3",
      img:"https://biyopos.com/wp-content/uploads/2024/09/michelin-starred-chinese-chef-fine-dining.png",
      title:"Petro William",
      p:"Main Chef",
    }
  ]
  return(
    <div className="relative mt-[50px] ">
    <h2 className="text-xl text-amber-700 text-center font-semibold">----MASTER CHEFS----</h2>
    <h2 className="text-5xl text-black font-bold text-center mt-5">Meet Our Special Chefs</h2>
    <div className="md:flex md:ml-[130px] mt-[50px]">
      {
        chef.map(chef=>(
          <div key={chef.id} className="md:ml-[70px] ml-[10px]" >
            <img src={chef.img} className=" h-[300px]  w-[300px] rounded-full"></img>
            <div className="text-center h-[100px] w-[300px] border-2 border-gray-300 bg-amber-800 ml-3 text-white rounded-3xl  absolute bottom-[-30px] pt-3 ">
              <h2 className="text-3xl ">{chef.title}</h2>
              <h2 className="text-2xl pt-2">{chef.p}</h2>
            </div>
          </div>

        ))
      }
    </div>
      
    </div>
    
  )
}