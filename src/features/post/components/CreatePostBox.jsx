import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Avatar from "../../../components/Avatar";

export default function CreatePostBox() {
 const {id, firstName, profileImage } = useSelector(state => state.auth.user)
  return (
    <div className="bg-white rounded-lg border shadow px-4 py-3 flex gap-2 ">
     <div>
        <Link to={`/profile/${id}`} >
    
      <Avatar src={profileImage}/>
      </Link>
     </div>
     <div className="rounded-full bg-gray-200 text-gray-500 px-3 py-1.5 hover:bg-gray-300 flex-1" role="button" > What's on you mind, {firstName}

     </div>
    </div>
  );
}
