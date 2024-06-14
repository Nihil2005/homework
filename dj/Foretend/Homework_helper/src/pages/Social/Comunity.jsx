import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegComment } from 'react-icons/fa';

function PostComponent() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: null });
  const [newComment, setNewComment] = useState({ postId: null, content: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('http:i/api/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleNewPostChange = event => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handleImageChange = event => {
    setNewPost({ ...newPost, image: event.target.files[0] });
  };

  const handleNewPostSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', newPost.title);
    formData.append('content', newPost.content);
    formData.append('image', newPost.image);

    const token = "5bc4bd7cc70014931a98ccaf04f253aedb4264e3"; // Your token here

    axios.post('http:/00/api/api/posts/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        fetchPosts();
        setNewPost({ title: '', content: '', image: null });
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  const handleNewCommentChange = event => {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  };

  const handleNewCommentSubmit = (event, postId) => {
    event.preventDefault();
    newComment.postId = postId;
    axios.post(`http://100/api/api/posts/${postId}/comments/`, newComment)
      .then(response => {
        fetchPosts();
        setNewComment({ postId: null, content: '' });
      })
      .catch(error => {
        console.error('Error creating comment:', error);
      });
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-4xl text-red-400 mt-4 font-bold mb-2">Community Group</h1>
      <form onSubmit={handleNewPostSubmit} className="mb-2">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleNewPostChange}
          className="block w-full border font-bold p-3 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1 text-sm"
        />
        <textarea
          name="content"
          rows="3"
          placeholder="Content"
          value={newPost.content}
          onChange={handleNewPostChange}
          className="block w-full border p-1 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1 text-sm"
        ></textarea>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-1"
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-2 rounded text-sm">
          Create Post
        </button>
      </form>
      <div>
        {posts.map(post => (
          <div key={post.id} className="border p-2 mb-2 rounded-md bg-white shadow-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            {post.image && (
              <div className="post-image-container">
                <img
                  src={post.image}
                  alt="Post"
                  className="post-image"
                />
              </div>
            )}
            <div className="flex items-center mt-1">
              <span className="text-gray-500  text-xl">Posted by {post.user.email}</span>
              <form onSubmit={e => handleNewCommentSubmit(e, post.id)} className="ml-auto">
                <textarea
                  name="content"
                  rows="1"
                  placeholder="Add a comment..."
                  value={newComment.content}
                  onChange={handleNewCommentChange}
                  className="block w-full border p-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                ></textarea>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-1 rounded ml-1 text-xs">
                  <FaRegComment />
                </button>
              </form>
            </div>
            <div className="mt-1">
              <h3 className="text-sm font-semibold">Comments</h3>
              <ul className="list-disc list-inside">
                {post.comments && post.comments.map(comment => (
                  <li key={comment.id} className="text-xs">{comment.content}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostComponent;
