export default function Loading(){
  return <div> {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((e,i)=>{ return <div className=" flex justify-around items-center animate-pulse w-full rounded-lg bg-gray-200 h-16">
  <span className="w-24 h-8 bg-gray-300 rounded-lg " />
  <span className="w-24 h-8 bg-gray-300 rounded-lg " />
  <span className="w-24 h-8 bg-gray-300 rounded-lg " />
</div>
})}
</div>
}