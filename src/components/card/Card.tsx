import React from "react";
import { UserCard } from "@/app/types"


export const Card: React.FC<UserCard> = ({ position, phone, email, name, photo }) => {
  return (
    <div className="max-h-64 p-5 grid place-items-center bg-white rounded-xl sm_custom:w-[20.5rem] sm:w-[17.5rem] md:w-[21.5rem] md_custom:w-[19.5rem] lg_custom:w-[23.125rem] ">
      <div className="max-w-16 max-h-16 rounded-full overflow-hidden flex justify-center items-center">
        <img className="w-full h-full " src={photo} alt="profile_photo" />
      </div>
      <div className="text-center max-w-[20rem]">
        <p className="cursor-pointer my-5 truncate" title={name}>
          {name}
        </p>
        <p className="cursor-pointer truncate" title={position}>
          {position}
        </p>
        <p className="cursor-pointer truncate" title={email}>
          {email}
        </p>
        <p className="cursor-pointer truncate" title={phone}>
          {phone}
        </p>
      </div>
    </div>
  )
}
