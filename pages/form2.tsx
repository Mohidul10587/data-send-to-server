import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import Dropzone from "dropzone"

type Inputs = {
  Name: string;
  URL: string;
  Description: string;
};

export default function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data); 

  return (
    <div className="flex justify-center">
   

      <form  onSubmit={handleSubmit(onSubmit)}>
        <p>Name</p>

        <input
          className="block border border-black"
          {...register("Name", {
            required: {
              value: true,
              message: "Description is empty",
            },
            maxLength: {
              value: 100,
              message: "Maximum 20 letter",
            },
           
          })}
        />
        {errors.Name && (
          <span className="text-red-800">{errors.Name.message}</span>
        )}

        <p>URL</p>
        <input
          className="block border border-black"
          {...register("URL", {
            required: {
              value: true,
              message: "URL is empty",
            },
          })}
        />
        {errors.URL && (
          <span className="text-red-800">{errors.URL.message}</span>
        )}
        <p>Description</p>
        <input
          className="block border border-black"
          {...register("Description", {
            required: {
              value: true,
              message: "Description is empty",
            },
            maxLength: {
              value: 100,
              message: "Maximum 1500 letter",
            },
            minLength: {
              value: 10,
              message: "Minimum 10 letter",
            },
          })}
        />
        {errors.Description && (
          <span className="text-red-800">{errors.Description.message}</span>
        )}

        <br />

        <input className="border border-black px-3" type="submit" />
      </form>
    </div>
  );
}
