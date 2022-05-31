import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineMedium } from "react-icons/ai";

type Inputs = {
  Name: string;
  URL: string;
  Description: string;
  Category: string;
  img: string;
  siteLink: string;
  discordLink: string;
  instagramLink: string;
  mediumLink: string;
  telegramLink: string;
  fee: string;
};

export default function Form() {
  // THis is for drpzone

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps }: any = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles: any) => {
      console.log(acceptedFiles[0].name);
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file: any) => (
    <div key={file.name}>
      <div>
        <Image
          src={file.preview}
          width="200px"
          height="200px"
          alt="this is a image"
        ></Image>
      </div>
    </div>
  ));

  // console.log(files)
  // this is for form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // this is for send data to server

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    fetch("/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="ml-10 mt-10 p-10 border ">
      <h1 className="text-5xl mb-4">Create My Collection</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <p className="font-bold text-xl">Logo Image </p>
          <div className="App">
            {/* this div is for dropzone */}

            <div {...getRootProps()}>
              <input {...getInputProps()} {...register("img")} />
              <div
                style={{ height: "200px", width: "200px" }}
                className="border border-black"
              >
                {images}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-bold text-xl">Feature Image</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-xl">Banner Image</p>
        </div>

        <div className="mb-4">
          <p className="font-bold text-xl">Name</p>

          <input
            className="block border border-green-600 rounded p-3  w-full "
            placeholder="Example: Treasure of the sea"
            {...register("Name", {
              required: {
                value: true,
                message: "Name is empty",
              },
              maxLength: {
                value: 25,
                message: "Maximum 25 word",
              },
            })}
          />

          {errors.Name && (
            <span className="text-red-800">{errors.Name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <p className="font-bold text-xl">URL</p>
          <p className="text-sm text-gray-700">
            Customize your URL on smartxnft. Must only contain lowercase
            letters, numbers, and hyphens.
          </p>
          <input
            className="block border border-green-600 rounded p-3  w-full "
            placeholder="https://smartxnft.io/collection/
            treasure-of-the-sea"
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
        </div>

        <div className="mb-4">
          <p className="font-bold text-xl">Description</p>
          <p className="text-sm text-gray-700">0 of 1000 characters used.</p>
          <input
            className="block border border-green-600 rounded p-3  w-full"
            {...register("Description", {
              required: {
                value: true,
                message: "Description is empty",
              },
              maxLength: {
                value: 1000,
                message: "Maximum 1000 letter",
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
        </div>

        <div className="mb-4">
          <label className="font-bold text-xl">Category:</label>
          <p className="text-sm text-gray-700">
            Adding a category will help make your item discoverable on OpenSea.
          </p>
          <select
            className="border border-green-600 rounded p-2"
            {...register("Category")}
          >
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Photography">Photography</option>
            <option value="Sports">Sports</option>
            <option value="Utility">Utility</option>
          </select>
        </div>

        <br />
        <div className="mb-4">
          <p className="font-bold text-xl">Link</p>
          <div className="flex items-center border border-green-600 rounded p-1 w-full mt-3">
            <BiWorld className="text-2xl text-gray-500" />
            <input
              className=" w-full p-2 outline-0"
              placeholder="Your site.io"
              {...register("siteLink")}
            />
          </div>
          <div className="flex items-center border border-green-600 rounded p-1 w-full mt-3">
            <FaDiscord className="text-2xl text-gray-500" />
            <input
              className=" w-full p-2 outline-0"
              placeholder="https://discord.com/"
              {...register("discordLink")}
            />
          </div>

          <div className="flex items-center border border-green-600 rounded p-1 w-full mt-3">
            <AiOutlineInstagram className="text-2xl text-gray-500" />
            <input
              className=" w-full p-2 outline-0"
              placeholder="https://www.instagram.com/"
              {...register("instagramLink")}
            />
          </div>
          <div className="flex items-center border border-green-600 rounded p-1 w-full mt-3">
            <AiOutlineMedium className="text-2xl text-gray-500 font-serif font-bold" />
            <input
              className=" w-full p-2 outline-0"
              placeholder="https://medium.com/"
              {...register("mediumLink")}
            />
          </div>
          <div className="flex items-center border border-green-600 rounded p-1 w-full mt-3">
            <FaTelegramPlane className="text-2xl text-gray-500" />
            <input
              className=" w-full p-2 outline-0"
              placeholder="https://telegram.org/"
              {...register("telegramLink")}
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="font-bold text-xl">Create earnings</p>
        </div>
        <p className="text-sm text-gray-700">
          Collect a fee when a user re-sells an item you originally created.
          This is deducted from the final sale price and paid monthly to a
          payout address of your choosing.
        </p>
        <a className="text-sm text-blue-600">
          Learn more about creator earnings.
        </a>
        <p className="text-sm text-gray-700"> Percentage fee</p>
        <input
            className=" w-full p-3 outline-1 outline-red-500 border border-green-900 rounded"
            placeholder="e.g. 2.5"
            {...register("fee")}
          />
        <div className="mb-4">
          <p className="font-bold text-xl">BlockChain</p>
          <p className="text-sm text-gray-700">
            Select the blockchain where you&apos;d like new items from this
            collection to be added by default. info
          </p>
          <select
            className="border border-green-600 rounded p-2"
            {...register("Category")}
          >
            <option value="Art">Polygon</option>
            <option value="Music">Ethereum</option>
            <option value="Photography">Klaytn</option>
            <option value="Sports">Solana</option>
         
          </select>
        </div>
        <div className="mb-4">
          <p className="font-bold text-xl">Payment tokens</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-xl">Display theme</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-xl">Explicit & sensitive content</p>
        </div>
        <div>
          <p className="font-bold text-xl">Collaborators</p>
        </div>

        <div className="mt-5">
          <input
            className="border border-green-600 px-3 mt-4 rounded text-xl font-bold"
            type="submit"
            value="Submit changes"
          />
          <input
            className="border border-green-600 px-3 mt-4 rounded text-xl font-bold ml-5 "
            type="button"
            value="Delete Collection"
          />
        </div>
      </form>















    </div>
  );
}
