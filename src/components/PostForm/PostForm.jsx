import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import service from '../../appwrite/database';
import { useEffect, useCallback } from 'react';
import Input from '../Input';
import Button from '../Button';
import RTE from '../RTE'
import Select from '../Select'

function PostForm({ post }) {

    const { register, handleSubmit, watch, control, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || " ",
            slug: post?.slug || " ",
            content: post?.content || " ",
            status: post?.status || "active"

        }
    })

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
   

    const submit = async (data) => {


        if (post) {
            const file = await data.image[0] ? service.uploadFile(data.image[0]) : null

            if (file) {
                service.deleteFile(data.featureImage)
            }
            const dbPost = await service.updatePost(post?.$id, {
                ...data,
                featureImage: file ? file?.$id : undefined
            })
            if (dbPost) {
                navigate(`/post/${post.$id}`)
            }
        }
        else {
            const file = await service.uploadFile(data.image[0]);
          

            if (file) {
                const fileId = file.$id;
                data.featureImage = fileId;
                const dbPost = await service.createPost({ ...data, userId: userData.$id })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            };

           
        }
    }
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

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
        <form onSubmit={handleSubmit(submit)} >
            <div >
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className=""
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div >
                <Input
                    label="Featured Image :"
                    type="file"
                    className=""
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div >
                        <img
                            src={service.getFilePreview(post.featureImage)}
                            alt={post.title}
                            className=""
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className=""
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}


export default PostForm