import React, { useCallback, useEffect } from "react";
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

    const submit = async (data) => {
        if (post) {
            const file = data.image?.[0] ? await storageService.uploadFile(data.image[0]) : null;

            if (file) {
                storageService.deleteFile(post.featuredImage);
            }

            const dbPost = await postService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            if (!data.image?.[0]) {
                return; // extra safeguard
            }
            const file = await storageService.uploadFile(data.image[0]);

            if (file) {
                data.featuredImage = file.$id;
                const dbPost = await postService.createPost({ ...data, userId: user.$id, userName: user.name });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
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
                {errors.title && <p className="text-red-500 text-sm mb-3">{errors.title.message}</p>}

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-1"
                    readOnly
                    {...register("slug", { required: "Slug is required" })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                {errors.content && <p className="text-red-500 text-sm mb-3">Content is required</p>}
            </div>

            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-1"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post ? "Image is required" : false })}
                />
                {errors.image && <p className="text-red-500 text-sm mb-3">{errors.image.message}</p>}

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
                {errors.status && <p className="text-red-500 text-sm mb-3">{errors.status.message}</p>}

                {/* Submit */}
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
