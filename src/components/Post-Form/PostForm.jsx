import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import storageService from "../../appwrite/storage";
import postService from "../../appwrite/post";
import Button from "../Button";
import Input from "../Input";
import RTE from "../RTE";
import Select from "../Select";
import { nanoid } from "nanoid";
import { errorAlert, successAlert } from "../../utils";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const [rteLoaded, setRteLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRteLoaded(true), 500); // adjust time as needed
        return () => clearTimeout(timer);
    }, []);

    const submit = async (data) => {
      try {
        if (post) {
          // UPDATE POST
          const file = data.image?.[0]
            ? await storageService.uploadFile(data.image[0])
            : null;

          if (file) {
            await storageService.deleteFile(post.featuredImage);
          }

          const dbPost = await postService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
          });

          if (dbPost) {
            successAlert("Post updated successfully");
            navigate(`/post/${dbPost.$id}`);
          } else {
            errorAlert("Failed to update post. Please try again.");
          }
        } else {
          // CREATE POST
          if (!data.image?.[0]) {
            return errorAlert("Please select an image before submitting.");
          }

          const file = await storageService.uploadFile(data.image[0]);

          if (!file) {
            return errorAlert("Image upload failed. Try again.");
          }

          data.featuredImage = file.$id;
          const dbPost = await postService.createPost({
            ...data,
            userId: user.$id,
            userName: user.name,
          });

          if (dbPost) {
            successAlert("Post created successfully");
            navigate(`/post/${dbPost.$id}`);
          } else {
            errorAlert("Failed to create post. Please try again.");
          }
        }
      } catch (err) {
        console.error("Error in submit:", err);
        errorAlert("Something went wrong. Please try again later.");
      }
    };
    const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
        const baseSlug = value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

        const uniqueSuffix = nanoid(3);
        const trimmedBase = baseSlug.slice(0, 36 - (uniqueSuffix.length + 1));
        const finalSlug = `${trimmedBase}-${uniqueSuffix}`;

        return finalSlug;
    }
    return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
          {/* Title */}
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-1"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mb-3">{errors.title.message}</p>
          )}
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-1"
            readOnly
            {...register("slug", { required: "Slug is required" })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          {!rteLoaded ? (
            <div className="flex items-center justify-center h-40">
              <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></span>
              <span className="ml-3">Loading editor...</span>
            </div>
          ) : (
            <RTE
              label="Content :"
              name="content"
              control={control}
              defaultValue={getValues("content")}
            />
          )}{" "}
          {errors.content && (
            <p className="text-red-500 text-sm mb-3">Content is required</p>
          )}
        </div>

        <div className="w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-1"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", {
              required: !post ? "Image is required" : false,
            })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mb-3">{errors.image.message}</p>
          )}

          {post && (
            <div className="w-full mb-4">
              <img
                src={storageService.getFileView(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}

          {/* Status */}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-1"
            {...register("status", { required: "Status is required" })}
          />
          {errors.status && (
            <p className="text-red-500 text-sm mb-3">{errors.status.message}</p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    );
}
