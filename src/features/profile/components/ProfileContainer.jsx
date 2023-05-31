import Avatar from "../../../components/Avatar";
import Modal from "../../../components/Modal";
import { PenIcon } from "../../../icons";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
export default function ProfileContainer() {
    const [open ,setOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-green-100 to-amber-100 shadow">
      <div className="max-w-[68.5rem] max-h-[25.25rem] overflow-hidden flex justify-center items-center mx-auto rounded-b-lg aspect-[1096/404]">
        <img
          src="https://pilanesberggamereserve.co.za/images/daytour/69678730.jpg"
          alt="cover"
        />
      </div>
      <div className="max-w-[66.5rem] mx-auto flex items-end gap-4 px-4 pb-4">
        <div className="-mt-8">
          <Avatar
            src="https://pilanesberggamereserve.co.za/images/daytour/69678730.jpg"
            className="h-[10.5rem] w-[10.5rem] ring ring-white"
          />
        </div>
        <div className="flex-1 mb-4">
          <h2 className="text-3xl font-bold">Green FAi</h2>
          <span className="block text-gray-500 py-1 font-semibold">
            5 Friends
          </span>
          <div className="flex -space-x-2">
            <Avatar
              src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[2rem] w-[2rem] ring-2 ring-white"
            />
            <Avatar
              src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[2rem] w-[2rem] ring-2 ring-white"
            />
            <Avatar
              src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[2rem] w-[2rem] ring-2 ring-white"
            />
            <Avatar
              src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[2rem] w-[2rem] ring-2 ring-white"
            />
            <Avatar
              src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[2rem] w-[2rem] ring-2 ring-white"
            />
          </div>
        </div>
        <div>
          <button className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300" 
          onClick={() => setOpen(true)} >
            <div className="flex gap-2 items-center">
              <PenIcon />
              <span className="font-semibold">Edit Profile</span>
            </div>
          </button>
          <Modal
            title="Edit Profile"
            open={open}
            onClose={() => setOpen(false)}
            width={44}
          >
            <EditProfileForm />
          </Modal>
        </div>
      </div>
    </div>
  );
}