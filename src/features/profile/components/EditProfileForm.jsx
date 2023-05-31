import Avatar from "../../../components/Avatar";
import PictureForm from "./PictureForm";
import Loading from "../../../components/Loading"
import * as userService from "../../../api/user-api"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileImage as updateAction, updateCoverImage as updateCover } from '../../auth/slice/auth-slice'

export default function EditProfileForm() {
  //console.log(first)
  const [isLoading, setIsLoading] = useState(false)

  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  const updateProfileImage = async input => {
    const formData = new FormData()
    formData.append('profileImage', input)
    setIsLoading(true)
   const res = await userService.updateUserImage(formData)
   setIsLoading(false)
   dispatch(updateAction(res.data.profileImage))

  };

  const updateCoverImage = async input => {
    const formData = new FormData()
    formData.append('coverImage', input)
    setIsLoading(true)
   const res = await userService.updateUserImage(formData)
   setIsLoading(false)
   dispatch(updateCover(res.data.coverImage))

  }
  return (
    <>
    {isLoading && <Loading />}
    <div className="flex flex-col gap-4">
      <PictureForm
       onSave= {updateProfileImage}
        title="Profile Image"
        initialSrc={user.profileImage}
      >
        {(src) => (
          <div className="flex justify-center">
            <Avatar src={src}  className="h-[10.5rem] w-[10.5rem]" />
          </div>
        )}
      </PictureForm>
      <PictureForm
      onSave= {updateCoverImage}
        title="Cover Image"
        initialSrc={user.coverImage}
      >
        {(src) => (
          <div className="aspect-[1096/404] overflow-hidden flex justify-center items-center rounded-lg">
            <img src={src} alt="cover" />
          </div>
        )}
      </PictureForm>
    </div>
    </>
  );
}
