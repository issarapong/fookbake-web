import { useParams } from "react-router-dom";
import CoverImage from "./CoverImage";
import ProfileInfo from "./ProfileInfo";
import ProfileWrapper from "./ProfileWrapper";
import { useEffect } from "react";
import useProfile from "../hooks/useProfile";
import MeAction from "./MeAction"
import FriendAction from "./FriendAction"
import UnknowAction from "./UnknownAction"
import RequesterAction from "./RequesterAction"
import ReceiverAction from "./ReceiverAction";

const actionMapping = {
  ME: <MeAction />,
  FRIEND: <FriendAction />,
  UNKNOWN: <UnknowAction />,
  REQUESTER: <RequesterAction />,
  RECEIVER: <ReceiverAction />
  
}

  //ME: 
  //FRIEND: 
  //UNKNOWN: 
 // REQUESTER: 
 // RECEIVER: มีปุ่ม Cancle  / delete


export default function ProfileContainer() {
  const { profileUserId } = useParams(); // { profileUserId: 5}  /src/route/Router.jsx

  const { fetchProfile, profileUser, statusWithAuthenticatedUser } = useProfile(); // consume ค่า ดึงค่า

  useEffect(() => {
    fetchProfile(profileUserId);
  }, [profileUserId, fetchProfile]);

  return (
    <ProfileWrapper cover={<CoverImage src={profileUser.coverImage} />}>
      <ProfileInfo action={actionMapping[statusWithAuthenticatedUser]} />
    </ProfileWrapper>
  );
}
