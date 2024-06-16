import React, { ChangeEvent, useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useForm } from "react-hook-form";
import { SimplifiedUser } from "@/app/types";
import { useGetPositionsQuery, useGetTokenQuery, useGetUserByIdQuery, useLazyGetUsersQuery, useRegisterMutation } from "@/app/api/userApi";
import { inputProps } from "@/utils/constants";
import { Loading } from "@/assets/icons/loading";
import { UploadImage } from "../upload-image/UploadImage";
import { RadioButton } from "../radio-button/RadioButton";
import { hasErrorField } from "@/utils/has-error-field";
import { message } from 'antd';
import registeredUser from '@/assets/images/registered_user.png'
 

export const Form = () => {
  useGetTokenQuery()
  const [register, { isLoading }] = useRegisterMutation()
  const [triggerGetUsers] = useLazyGetUsersQuery()
  const {data} = useGetPositionsQuery()
  const user = useGetUserByIdQuery('3') 
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [positionId, setPositionId] = useState(1)
  const [isRegistered, setIsRegistered] = useState(localStorage.getItem('is_registered') ? true : false)
  const [errUploadFile, setErrUploadFile] = useState<string>("")
  const [error, setError] = useState("")

  console.log(user.data?.user.name);
  
  
  const {
    handleSubmit,
    control,
    setValue,
  } = useForm<SimplifiedUser>({
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      position_id: 1,
      phone: "",
      photo: null,
    },
  })

  const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPositionId(Number(event.target.value))
    setValue("position_id", Number(event.target.value))
  }

 const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setSelectedFile(e.target.files[0])
      setErrUploadFile('')
      setValue("photo", e.target.files[0])
    }
  
  }

  const onSubmit = async (data: SimplifiedUser) => { 
    try {
      if (!selectedFile) {
        setErrUploadFile("Поле обязательно для заполнения")
        return
      }

      const formData = new FormData()

      data.name && formData.append("name", data.name)
      data.email && formData.append("email", data.email)
      data.phone && formData.append("phone", data.phone)
      data.position_id && formData.append("position_id", data.position_id.toString())
      selectedFile && formData.append("photo", selectedFile)

      await register({userData: formData}).unwrap()
      await triggerGetUsers({
        page: 1,
        count: 6,
      })

      setIsRegistered(true)
      message.success('Користувач успішно створений!')
    } catch (e) {
      if (hasErrorField(e)) {
        setError(e.data.message)
      }
    }
  }
  setTimeout(() => {
    setError('')
  }, 5000)
  
  console.log(error);
  

  return (
    <>
      <h2 className="text-4xl text-center">
        {!isRegistered
          ? "Working with POST request"
          : "User successfully registered"}
      </h2>
      {!isRegistered ? (
        <form
          className="flex flex-col gap-12 max-w-[24rem] mx-auto mt-16"
          onSubmit={event => {
            event.preventDefault()
            handleSubmit(onSubmit)()
          }}
        >
          <Input errorMessage={error} control={control} {...inputProps.name} />
          <Input errorMessage={error} control={control} {...inputProps.email} />
          <Input
            control={control}
            {...inputProps.phone}
            endContent={
              <p className="text-xs text-[#7E7E7E] ml-2">
                +38 (XXX) XXX - XX - XX
              </p>
            }
            errorMessage={error}
          />
          <div>
            <h2>Select your position</h2>
            <ul className="space-y-2 mt-3">
              {data?.positions.map(data => (
                <RadioButton
                  key={data.id}
                  id={String(data.id)}
                  checked={data.id === positionId}
                  onChange={handlePositionChange}
                  name={data.name}
                  value={data.id}
                  label={data.name}
                  type="radio"
                />
              ))}
            </ul>
          </div>
          <UploadImage
            control={control}
            name="photo"
            handleFileChange={handleFileChange}
            fileName={selectedFile?.name}
            error={errUploadFile || error}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loading /> : "Sign up"}
          </Button>
        </form>
      ) : (
        <div className="w-full flex justify-center mt-12">
          <img src={registeredUser} alt="registered" loading="lazy" />
        </div>
      )}
    </>
  )
};
