import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { EllipsisIcon } from "../../../icons";

export default function PostHeader() {
  return (
    <div className="flex items-center gap-2">
      <Link>
        <Avatar />
      </Link>
      <div className="flex-1 flex flex-col items-start">
        <Link className="text-sm font-semibold hover:underline">
          โรเบิต ทิงนองนอย
        </Link>
        <small className="text-xs text-gray-500 ">1d</small>
      </div>
      <div className="relative">
        <div className="hover:bg-gray-200 rounded-full h-9 w-9 flex items-center justify-center" role="button" >
          <EllipsisIcon className="fill-gray-500" />
        </div>

        <ul className="absolute right-0 translate-y-1 bg-white rounded-xl border shadow-lg p-2 text-sm w-24 hidden">
          <li className="p2 hover:bg-gray-200 rounded-lg font-semibold cursor-pointer" >edit</li>
          <li className="p2 hover:bg-gray-200 rounded-lg font-semibold cursor-pointer" >Delete</li>
        </ul>
      
      </div>
    
    </div>
  );
}
