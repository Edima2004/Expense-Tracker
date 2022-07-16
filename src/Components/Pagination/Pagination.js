import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Numbers from "./Numbers";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log("error!");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

//  changePage
  const paginate=((num)=>(
   setCurrentPage(num)
  ))

//  get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return <div>
   <h2>Pagination</h2>
  <Posts posts= {currentPosts} loading={loading}/>
  <Numbers postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
  </div>;
};

export default Pagination;
