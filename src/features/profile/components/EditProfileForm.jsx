import Avatar from "../../../components/Avatar";
import PictureForm from "./PictureForm";

export default function EditProfileForm() {
  //console.log(first)
  return (
    <div className="flex flex-col gap-4">
      <PictureForm
      // onSave= {() => {saveProfile}}
        title="Profile Image"
        initialSrc="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        {(src) => (
          <div className="flex justify-center">
            <Avatar src={src} alt="user" className="h-[10.5rem] w-[10.5rem]" />
          </div>
        )}
      </PictureForm>
      <PictureForm
      // onSave={() => {Save Cover}}
        title="Cover Image"
        initialSrc="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        {(src) => (
          <div className="aspect-[1096/404] overflow-hidden flex justify-center items-center rounded-lg">
            <img src={src} alt="cover" />
          </div>
        )}
      </PictureForm>
    </div>
  );
}
