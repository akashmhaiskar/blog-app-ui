import { myAxios, privateAxios } from "./Helper";


//create post function
export const createPost = (postData) => {
    console.log(postData)
  return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData)
  .then((response) => response.data);
};

// get all posts

export const loadAllPosts = (pageNumber, pageSize)=>{

  return myAxios.get(`/posts/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`).then((response) => response.data);
}

//load post for given post id
export const loadPost=(postId)=>{
  return myAxios.get("/posts/" + postId).then((response) => response.data); 
}

export const createComment=(comment,postId)=>{
  return privateAxios.post(`comments/post/${postId}/comments`, comment)
}


//upload post banner image

export const uploadPostImage=(image,postId)=>{
  let formData=new FormData()
  formData.append("image",image)
  return privateAxios.post(`/post/image/upload/${postId}`,formData,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
  .then((response)=>response.data)
};

// get category wise post
export function loadPostCategoryWise(categoryId)
{
  return privateAxios.get(`/category/${categoryId}/posts`).then(res=>res.data);
}