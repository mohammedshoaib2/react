import React, { useState } from "react";
import { Button, InputComponent, SelectOptions } from "../components/index";
import { useForm } from "react-hook-form";

function PostForm({ post }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: post ? post["$id"] : "",
      title: post ? post["title"] : "",
      slug: post ? post["slug"] : "",
      content: post ? post["content"] : "",
      featuredImage: post ? post["featuredImage"] : "",
    },
  });
  const [loader, setLoader] = useState(false);
  const handlePostSubmit = (data) => {
    setLoader(true);
    console.log(data);
  };
  return (
    <div className="w-3/4 h-full justify-center items-center flex flex-col flex-wrap py-10 px-10">
      <h1 className="text-2xl font-bold">Add Post</h1>
      <form onSubmit={handleSubmit(handlePostSubmit)} className="w-full">
        <div className="flex  w-full mt-20 gap-5">
          <div className="flex flex-1 flex-col gap-10">
            <InputComponent
              placeholder={"title"}
              {...register("title", { required: true })}
            />
            <InputComponent
              placeholder={"slug"}
              {...register("slug", { required: true })}
            />
          </div>
          <div className="flex flex-1 flex-col gap-10">
            <InputComponent
              type="file"
              {...register("image", { required: true })}
            />
            <SelectOptions
              options={["active", "inactive"]}
              placeholder="Browse File"
              {...register("status", { required: true })}
            />
            <Button loader={loader} type="Submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
