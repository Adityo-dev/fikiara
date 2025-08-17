"use client";
import { communityPost } from "@/data/communityPost";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const reactionsList = [
  { type: "like", emoji: "👍", color: "text-black" },
  { type: "love", emoji: "❤️", color: "text-black" },
  { type: "care", emoji: "🤗", color: "text-black" },
  { type: "haha", emoji: "😂", color: "text-black" },
  { type: "wow", emoji: "😮", color: "text-black" },
  { type: "sad", emoji: "😢", color: "text-black" },
  { type: "angry", emoji: "😡", color: "text-black" },
];

export default function FacebookClone() {
  const [activeTab, setActiveTab] = useState("all");
  const [posts, setPosts] = useState(communityPost);
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [commentInputs, setCommentInputs] = useState({});
  const [showReactions, setShowReactions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const fileInputRefs = useRef({});
  const reactionTimeoutRef = useRef(null);

  const currentUser = "You";
  const currentAvatar = "/instructor4.png";

  // Custom relative time formatting
  const formatTime = (date) => {
    const now = new Date("2025-08-17T05:42:00+06:00"); // Updated to current time
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60)
      return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60)
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24)
      return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30)
      return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12)
      return `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
    return `${Math.floor(diffInMonths / 12)} year${
      Math.floor(diffInMonths / 12) !== 1 ? "s" : ""
    } ago`;
  };

  // Handle image upload preview
  useEffect(() => {
    if (newImage) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(newImage);
    } else {
      setImagePreview(null);
    }
  }, [newImage]);

  // Handle post submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim() && !imagePreview) return;

    const newPostObj = {
      id: Date.now(),
      user: currentUser,
      avatar: currentAvatar,
      date: new Date(),
      content: newPost,
      image: imagePreview,
      reactions: {},
      comments: [],
      showComments: false,
      isAdmin: false, // New posts by currentUser are not admin
    };

    setPosts([newPostObj, ...posts]);
    setNewPost("");
    setNewImage(null);
    setImagePreview(null);
    if (fileInputRefs.current["main"])
      fileInputRefs.current["main"].value = null;
  };

  // Reactions logic
  const handleReaction = (postId, type, commentId = null) => {
    setPosts(
      posts.map((post) => {
        if (post.id !== postId) return post;

        const targetReactions = commentId
          ? post.comments.find((c) => c.id === commentId)?.reactions || {}
          : post.reactions;
        const currentReaction = Object.keys(targetReactions).find((key) =>
          targetReactions[key].includes(currentUser)
        );

        const newReactions = { ...targetReactions };
        if (currentReaction) {
          newReactions[currentReaction] = newReactions[currentReaction].filter(
            (u) => u !== currentUser
          );
          if (newReactions[currentReaction].length === 0) {
            delete newReactions[currentReaction];
          }
        }

        if (!currentReaction || currentReaction !== type) {
          newReactions[type] = [...(newReactions[type] || []), currentUser];
        }

        if (commentId) {
          return {
            ...post,
            comments: post.comments.map((c) =>
              c.id === commentId ? { ...c, reactions: newReactions } : c
            ),
          };
        }

        return { ...post, reactions: newReactions };
      })
    );
    setShowReactions(null);
  };

  // Get current user's reaction
  const getUserReaction = (reactions) =>
    Object.keys(reactions || {}).find((key) =>
      reactions[key].includes(currentUser)
    );

  // Get reaction summary
  const getReactionSummary = (reactions) => {
    const reactionTypes = Object.keys(reactions || {}).filter(
      (type) => reactions[type].length > 0
    );
    if (reactionTypes.length === 0) return null;

    return (
      <div className="flex items-center">
        {reactionTypes.slice(0, 3).map((type) => (
          <span key={type} className="text-sm -mr-1">
            {reactionsList.find((r) => r.type === type)?.emoji}
          </span>
        ))}
        <span className="text-xs ml-1">
          {Object.values(reactions).reduce(
            (sum, users) => sum + users.length,
            0
          )}
        </span>
      </div>
    );
  };

  // Handle comment submission
  const handleAddComment = (postId, parentId = null, image = null) => {
    const commentText = commentInputs[`${postId}-${parentId || "main"}`];
    if (!commentText?.trim() && !image) return;

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: parentId
                ? updateCommentWithReply(
                    post.comments,
                    parentId,
                    commentText,
                    image
                  )
                : [
                    ...post.comments,
                    {
                      id: Date.now(),
                      user: currentUser,
                      avatar: currentAvatar,
                      content: commentText,
                      date: new Date(),
                      likes: [],
                      image,
                      reactions: {},
                      replies: [],
                    },
                  ],
            }
          : post
      )
    );

    setCommentInputs((prev) => ({
      ...prev,
      [`${postId}-${parentId || "main"}`]: "",
    }));
  };

  // Update comments with a reply
  const updateCommentWithReply = (comments, parentId, content, image) =>
    comments.map((comment) =>
      comment.id === parentId
        ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                user: currentUser,
                avatar: currentAvatar,
                content,
                date: new Date(),
                likes: [],
                image,
                reactions: {},
                replies: [],
              },
            ],
          }
        : {
            ...comment,
            replies: updateCommentWithReply(
              comment.replies,
              parentId,
              content,
              image
            ),
          }
    );

  // Handle comment like
  const handleCommentLike = (postId, commentId) =>
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: toggleCommentLike(post.comments, commentId),
            }
          : post
      )
    );

  const toggleCommentLike = (comments, commentId) =>
    comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            likes: comment.likes.includes(currentUser)
              ? comment.likes.filter((u) => u !== currentUser)
              : [...comment.likes, currentUser],
          }
        : { ...comment, replies: toggleCommentLike(comment.replies, commentId) }
    );

  // Filter posts based on active tab and search term
  const filteredPosts = posts.filter((post) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "my" && post.user === currentUser) ||
      (activeTab === "admin" && post.isAdmin); // Updated to use isAdmin
    const matchesSearch =
      searchTerm === ""
        ? true
        : post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Sample offers (static for now)
  const offers = [
    {
      id: 1,
      image: "/design1.png",
      title: "50% Off on Premium",
      description: "Limited time offer!",
      url: "#",
    },
    {
      id: 2,
      image: "/design1.png",
      title: "Free Trial",
      description: "Try our app for free!",
      url: "#",
    },
  ];

  return (
    <section className="bg-[#F5F1EA] pt-6">
      <div className="container mx-auto px-4 flex min-h-screen font-sans text-black">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-[#FFFFFF] p-4 shadow-sm h-screen sticky top-0 rounded-md">
          {/* Search */}
          <input
            type="text"
            className="w-full p-3 bg-[#EBEBEB] border border-[#EBEBEB] rounded-md outline-none focus:border-[#FFA41F] transition-colors"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Tabs */}
          <div className="flex flex-col gap-4 mt-6">
            {["all", "my", "admin"].map((tab) => (
              <button
                key={tab}
                className={`w-full text-left px-4 py-3 rounded-md font-semibold text-[#101B24] border border-[#FFA41F] cursor-pointer ${
                  activeTab === tab ? "bg-[#FFA41F]" : "bg-transparent "
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "all"
                  ? "All Posts"
                  : tab === "my"
                  ? "My Posts"
                  : "Admin Posts"}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-1/2 px-4 overflow-y-auto max-h-screen pb-[200px]">
          {/* Create Post */}
          <div className="bg-[#FFFFFF] p-4 rounded-md shadow-sm mb-4 sticky top-0 z-10">
            <form onSubmit={handlePostSubmit}>
              <div className="flex items-start space-x-2 mb-3">
                <img
                  src={currentAvatar}
                  className="w-12 h-12 rounded-full object-cover"
                  alt="User"
                />
                <input
                  type="text"
                  className="w-full p-3 bg-[#EBEBEB] border border-[#EBEBEB] rounded-md outline-none focus:border-[#FFA41F] transition-colors"
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                />
              </div>

              {imagePreview && (
                <div className="relative mb-3">
                  <img
                    src={imagePreview}
                    className="w-full rounded-lg max-h-80 object-contain"
                    alt="Preview"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 w-10 h-10 bg-red-500 text-white rounded-full cursor-pointer "
                    onClick={() => {
                      setNewImage(null);
                      setImagePreview(null);
                      if (fileInputRefs.current["main"])
                        fileInputRefs.current["main"].value = null;
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}

              <div className="flex justify-between items-center border-t border-[#FFA41F66] pt-3">
                <button
                  type="button"
                  className="flex items-center hover:bg-[#FFA41F66] text-[#101B24] rounded-md px-3 py-2 cursor-pointer"
                  onClick={() => fileInputRefs.current["main"]?.click()}
                >
                  <span className="mr-1">📷</span> Photo
                </button>
                <input
                  type="file"
                  ref={(el) => (fileInputRefs.current["main"] = el)}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setNewImage(e.target.files[0])}
                />
                <button
                  type="submit"
                  className={`px-6 py-2 rounded-md ${
                    !newPost.trim() && !imagePreview
                      ? "bg-[#FFA41F66] cursor-not-allowed"
                      : "bg-[#FFA41F] text-[#101B24] cursor-pointer"
                  }`}
                  disabled={!newPost.trim() && !imagePreview}
                >
                  Post
                </button>
              </div>
            </form>
          </div>

          {/* Posts */}
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-md shadow-sm mb-4">
              {/* Post Header */}
              <div className="p-3 flex items-center">
                <img
                  src={post.avatar}
                  className="w-10 h-10 rounded-full mr-2"
                  alt={post.user}
                />
                <div>
                  <p className="font-semibold">{post.user}</p>
                  <p className="text-xs">{formatTime(post.date)} · 🌍</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-2">
                <p className="mb-3 whitespace-pre-line">{post.content}</p>
                {post?.image && (
                  <Image
                    width={600}
                    height={600}
                    src={post.image}
                    className="w-full rounded-lg max-h-96 object-contain bg-gray-100"
                    alt="Post"
                  />
                )}
              </div>

              {/* Reactions Bar */}
              <div className="px-4 py-2 border-t border-b border-[#FFA41F66] flex justify-between">
                <div className="flex items-center">
                  {getReactionSummary(post.reactions)}
                </div>
                <div className="text-sm">
                  {post.comments.length} comment
                  {post.comments.length !== 1 ? "s" : ""}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-4 py-1 flex justify-around relative">
                <button
                  className={`flex items-center justify-center w-full py-1 rounded hover:bg-[#FFA41F66] text-[#101B24] cursor-pointer ${
                    getUserReaction(post.reactions)
                      ? reactionsList.find(
                          (r) => r.type === getUserReaction(post.reactions)
                        )?.color
                      : ""
                  }`}
                  onMouseEnter={() => {
                    clearTimeout(reactionTimeoutRef.current);
                    setShowReactions({ postId: post.id, commentId: null });
                  }}
                  onMouseLeave={() => {
                    reactionTimeoutRef.current = setTimeout(
                      () => setShowReactions(null),
                      500
                    );
                  }}
                  onClick={() => handleReaction(post.id, "like")}
                >
                  {getUserReaction(post.reactions)
                    ? reactionsList.find(
                        (r) => r.type === getUserReaction(post.reactions)
                      )?.emoji
                    : "👍"}
                  <span className="ml-1">
                    {getUserReaction(post.reactions) || "Like"}
                  </span>
                </button>

                <button
                  className="flex items-center justify-center w-full py-1 rounded hover:bg-[#FFA41F66] text-[#101B24] cursor-pointer"
                  onClick={() =>
                    setPosts(
                      posts.map((p) =>
                        p.id === post.id
                          ? { ...p, showComments: !p.showComments }
                          : p
                      )
                    )
                  }
                >
                  💬 Comment
                </button>

                <button className="flex items-center justify-center w-full py-1 rounded hover:bg-[#FFA41F66] text-[#101B24]">
                  <a
                    href={`/profile/${post.user}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ↪ Share
                  </a>
                </button>

                {showReactions?.postId === post.id &&
                  showReactions.commentId === null && (
                    <div
                      className="absolute bg-white p-2 rounded-full shadow-sm flex space-x-1 -top-12 left-4 border border-gray-200"
                      onMouseEnter={() =>
                        clearTimeout(reactionTimeoutRef.current)
                      }
                      onMouseLeave={() => {
                        reactionTimeoutRef.current = setTimeout(
                          () => setShowReactions(null),
                          500
                        );
                      }}
                    >
                      {reactionsList.map((reaction) => (
                        <button
                          key={reaction.type}
                          className={`hover:bg-[#FFA41F66] text-[#101B24] rounded-full text-2xl hover:scale-125 transform transition cursor-pointer ${
                            post.reactions[reaction.type]?.includes(currentUser)
                              ? reaction.color
                              : null
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReaction(post.id, reaction.type);
                          }}
                          title={
                            reaction.type.charAt(0).toUpperCase() +
                            reaction.type.slice(1)
                          }
                        >
                          {reaction.emoji}
                        </button>
                      ))}
                    </div>
                  )}
              </div>

              {/* Comments Section */}
              {post.showComments && (
                <div className="px-4 pb-3">
                  {post.comments.map((comment) => (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      postId={post.id}
                      currentUser={currentUser}
                      currentAvatar={currentAvatar}
                      formatTime={formatTime}
                      handleAddComment={handleAddComment}
                      handleCommentLike={handleCommentLike}
                      handleReaction={handleReaction}
                      commentInputs={commentInputs}
                      setCommentInputs={setCommentInputs}
                      showReactions={showReactions}
                      setShowReactions={setShowReactions}
                      reactionTimeoutRef={reactionTimeoutRef}
                      getUserReaction={getUserReaction}
                      fileInputRefs={fileInputRefs}
                    />
                  ))}

                  {/* Add Comment */}
                  <div className="flex items-center mt-2">
                    <img
                      src={currentAvatar}
                      className="w-8 h-8 rounded-full mr-2"
                      alt="You"
                    />
                    <div className="flex-1 relative flex items-center">
                      <input
                        type="text"
                        className="flex-1 bg-gray-100 rounded-full px-3 py-2 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write a comment..."
                        value={commentInputs[`${post.id}-main`] || ""}
                        onChange={(e) =>
                          setCommentInputs({
                            ...commentInputs,
                            [`${post.id}-main`]: e.target.value,
                          })
                        }
                        onKeyPress={(e) => {
                          if (
                            e.key === "Enter" &&
                            commentInputs[`${post.id}-main`]?.trim()
                          ) {
                            handleAddComment(post.id, null, null);
                            e.preventDefault();
                          }
                        }}
                      />
                      <input
                        type="file"
                        ref={(el) =>
                          (fileInputRefs.current[`${post.id}-main`] = el)
                        }
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const reader = new FileReader();
                          reader.onloadend = () =>
                            handleAddComment(post.id, null, reader.result);
                          if (e.target.files[0])
                            reader.readAsDataURL(e.target.files[0]);
                        }}
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                        <button
                          className="text-black hover:text-gray-600"
                          title="Add emoji"
                          onClick={() =>
                            fileInputRefs.current[`${post.id}-main`]?.click()
                          }
                        >
                          📷
                        </button>
                        <button
                          className={`text-sm font-semibold ${
                            commentInputs[`${post.id}-main`]?.trim()
                              ? "text-black hover:underline"
                              : "text-gray-400 cursor-not-allowed"
                          }`}
                          onClick={() => {
                            if (commentInputs[`${post.id}-main`]?.trim()) {
                              handleAddComment(post.id, null, null);
                            }
                          }}
                          disabled={!commentInputs[`${post.id}-main`]?.trim()}
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 bg-[#ffffff] p-4 shadow-sm h-screen sticky top-0">
          <h3 className="font-semibold text-2xl border-b border-[#FFA41F66] pb-1.5 mb-4">
            Offers
          </h3>
          <div className="overflow-y-auto hide-scrollbar">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="mb-4 p-4 bg-gray-50 rounded-md shadow-sm flex gap-4 items-center"
              >
                {/* Image */}

                <Image
                  src={offer?.image}
                  alt={offer.title}
                  width={200}
                  height={200}
                  className="w-24 h-24 rounded-lg object-contain"
                />

                {/* Text + Button */}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {offer.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{offer.description}</p>
                  </div>
                  <button className="mt-2 self-start px-4 py-1 w-full rounded-md bg-[#FFA41F] text-[#101B24] cursor-pointer">
                    Go Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Comment({
  comment,
  postId,
  currentUser,
  currentAvatar,
  formatTime,
  handleAddComment,
  handleCommentLike,
  handleReaction,
  commentInputs,
  setCommentInputs,
  showReactions,
  setShowReactions,
  reactionTimeoutRef,
  getUserReaction,
  fileInputRefs,
}) {
  const [showReply, setShowReply] = useState(false);
  const localFileInputRef = useRef(null);

  return (
    <div className="mt-3">
      <div className="flex">
        <img
          src={comment.avatar}
          className="w-8 h-8 rounded-full mr-2"
          alt={comment.user}
        />
        <div className="flex-1">
          <div
            className={`bg-gray-100 rounded-2xl p-2 ${
              comment.replies.length > 0 ? "ml-8" : ""
            }`}
          >
            <div className="flex items-baseline">
              <span className="font-semibold text-sm mr-2">{comment.user}</span>
              <span className="text-xs">{formatTime(comment.date)}</span>
              {comment.replies.length > 0 && (
                <span className="text-xs ml-2 text-gray-500">
                  {comment.replies.length} reply
                  {comment.replies.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>
            <p className="text-sm mt-1">{comment.content}</p>
            {comment.image && (
              <div className="relative mt-2">
                <img
                  src={comment.image}
                  className="w-full rounded-lg max-h-48 object-contain bg-gray-100"
                  alt="Comment"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-black rounded-full p-1"
                  onClick={() =>
                    setPosts(
                      posts.map((p) =>
                        p.id === postId
                          ? {
                              ...p,
                              comments: p.comments.map((c) =>
                                c.id === comment.id ? { ...c, image: null } : c
                              ),
                            }
                          : p
                      )
                    )
                  }
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center mt-1 ml-2 space-x-3">
            <button
              className={`flex items-center justify-center w-full py-1 rounded  ${
                getUserReaction(comment.reactions)
                  ? reactionsList.find(
                      (r) => r.type === getUserReaction(comment.reactions)
                    )?.color
                  : ""
              }`}
              onMouseEnter={() => {
                clearTimeout(reactionTimeoutRef.current);
                setShowReactions({ postId, commentId: comment.id });
              }}
              onMouseLeave={() => {
                reactionTimeoutRef.current = setTimeout(
                  () => setShowReactions(null),
                  500
                );
              }}
              onClick={() => handleReaction(postId, "like", comment.id)}
            >
              {getUserReaction(comment.reactions)
                ? reactionsList.find(
                    (r) => r.type === getUserReaction(comment.reactions)
                  )?.emoji
                : "👍"}
              <span className="ml-1">
                {getUserReaction(comment.reactions) || "Like"}
              </span>
            </button>

            <button
              className="text-xs font-semibold text-black hover:underline"
              onClick={() => handleCommentLike(postId, comment.id)}
            >
              Like {comment.likes.length > 0 ? `(${comment.likes.length})` : ""}
            </button>
            <button
              className="text-xs text-black hover:underline"
              onClick={() => setShowReply(!showReply)}
            >
              Reply{" "}
              {comment.replies.length > 0 ? `(${comment.replies.length})` : ""}
            </button>
          </div>

          {showReactions?.postId === postId &&
            showReactions.commentId === comment.id && (
              <div
                className="absolute bg-white p-2 rounded-full shadow-sm flex space-x-1 -top-12 left-4 border border-gray-200"
                onMouseEnter={() => clearTimeout(reactionTimeoutRef.current)}
                onMouseLeave={() => {
                  reactionTimeoutRef.current = setTimeout(
                    () => setShowReactions(null),
                    500
                  );
                }}
              >
                {reactionsList.map((reaction) => (
                  <button
                    key={reaction.type}
                    className={`text-2xl hover:scale-125 transform transition ${
                      comment.reactions[reaction.type]?.includes(currentUser)
                        ? reaction.color
                        : "hover:text-gray-600"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReaction(postId, reaction.type, comment.id);
                    }}
                    title={
                      reaction.type.charAt(0).toUpperCase() +
                      reaction.type.slice(1)
                    }
                  >
                    {reaction.emoji}
                  </button>
                ))}
              </div>
            )}

          {/* Reply Input */}
          {showReply && (
            <div className="flex items-center mt-2 ml-8">
              <img
                src={currentAvatar}
                className="w-8 h-8 rounded-full mr-2"
                alt="You"
              />
              <div className="flex-1 relative flex items-center">
                <input
                  type="text"
                  className="flex-1 bg-gray-100 rounded-full px-3 py-2 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write a reply..."
                  value={commentInputs[`${postId}-${comment.id}`] || ""}
                  onChange={(e) =>
                    setCommentInputs({
                      ...commentInputs,
                      [`${postId}-${comment.id}`]: e.target.value,
                    })
                  }
                  onKeyPress={(e) => {
                    if (
                      e.key === "Enter" &&
                      commentInputs[`${postId}-${comment.id}`]?.trim()
                    ) {
                      handleAddComment(postId, comment.id, null);
                      e.preventDefault();
                    }
                  }}
                />
                <input
                  type="file"
                  ref={localFileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const reader = new FileReader();
                    reader.onloadend = () =>
                      handleAddComment(postId, comment.id, reader.result);
                    if (e.target.files[0])
                      reader.readAsDataURL(e.target.files[0]);
                  }}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <button
                    className="text-black hover:text-gray-600"
                    title="Add emoji"
                    onClick={() => localFileInputRef.current?.click()}
                  >
                    📷
                  </button>
                  <button
                    className={`text-sm font-semibold ${
                      commentInputs[`${postId}-${comment.id}`]?.trim()
                        ? "text-black hover:underline"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (commentInputs[`${postId}-${comment.id}`]?.trim()) {
                        handleAddComment(postId, comment.id, null);
                      }
                    }}
                    disabled={!commentInputs[`${postId}-${comment.id}`]?.trim()}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Replies */}
          {comment.replies.map((reply) => (
            <div key={reply.id} className="ml-12 mt-2">
              <Comment
                comment={reply}
                postId={postId}
                currentUser={currentUser}
                currentAvatar={currentAvatar}
                formatTime={formatTime}
                handleAddComment={handleAddComment}
                handleCommentLike={handleCommentLike}
                handleReaction={handleReaction}
                commentInputs={commentInputs}
                setCommentInputs={setCommentInputs}
                showReactions={showReactions}
                setShowReactions={setShowReactions}
                reactionTimeoutRef={reactionTimeoutRef}
                getUserReaction={getUserReaction}
                fileInputRefs={fileInputRefs}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ### পরিবর্তনের বিবরণ
// 1. **পোস্ট ডেটা স্ট্রাকচার**:
//    - প্রতিটি পোস্টে নতুন ফিল্ড `isAdmin: boolean` যোগ করা হয়েছে।
//    - ID 1, 2 এর জন্য `isAdmin: true` সেট করা হয়েছে (অ্যাডমিন পোস্ট: "Fikira1", "Fikira2")।
//    - ID 3–10 এর জন্য `isAdmin: false` সেট করা হয়েছে (রেগুলার ইউজার পোস্ট)।
//    - উদাহরণ (ID 1):
//      ```javascript
//      {
//        id: 1,
//        user: "Fikira1",
//        avatar: "/favicon.png",
//        date: new Date("2025-08-16T09:30:00+06:00"),
//        content: "Announcing our new AI-powered analytics platform! Launching next month. 🚀 #AI #TechInnovation",
//        image: "/analytics-platform.jpg",
//        reactions: { like: ["User2", "User5"], love: ["User3"], wow: ["You"] },
//        comments: [...],
//        showComments: false,
//        isAdmin: true
//      }
//      ```

// 2. **ফিল্টার লজিক**:
//    - `filteredPosts` ফাংশনে `adminUsers.includes(post.user)` এর পরিবর্তে `post.isAdmin` চেক করা হচ্ছে:
//      ```javascript
//      const matchesTab =
//        activeTab === "all" ||
//        (activeTab === "my" && post.user === currentUser) ||
//        (activeTab === "admin" && post.isAdmin);
//      ```
//    - ফলাফল:
//      - **All Posts**: সব 10টি পোস্ট (ID 1–10)।
//      - **My Posts**: শুধু ID 3 (`user: "You"`)।
//      - **Admin Posts**: শুধু ID 1, 2 (`isAdmin: true`)।

// 3. **নতুন পোস্ট**:
//    - `handlePostSubmit` ফাংশনে নতুন পোস্টে `isAdmin: false` যোগ করা হয়েছে:
//      ```javascript
//      const newPostObj = {
//        id: Date.now(),
//        user: currentUser,
//        avatar: currentAvatar,
//        date: new Date(),
//        content: newPost,
//        image: imagePreview,
//        reactions: {},
//        comments: [],
//        showComments: false,
//        isAdmin: false // New posts are not admin
//      };
//      ```
//    - এটি নিশ্চিত করে যে `currentUser` ("You") দিয়ে তৈরি পোস্ট রেগুলার ইউজার পোস্ট হিসেবে চিহ্নিত হবে।

// 4. **অ্যাডমিন অ্যারে সরানো**:
//    - `const adminUsers = ["Fikira1", "Fikira2"]` লাইনটি সরিয়ে ফেলা হয়েছে, কারণ এখন অ্যাডমিন চিহ্নিত করতে `isAdmin` ফ্ল্যাগ ব্যবহৃত হচ্ছে।

// 5. **তারিখ আপডেট**:
//    - `formatTime` ফাংশনে `now` ভেরিয়েবলটি আপডেট করা হয়েছে: `new Date("2025-08-17T05:42:00+06:00")`, যা আপনার দেওয়া বর্তমান সময়ের সাথে মিলে।

// 6. **অন্যান্য**:
//    - `Image` কম্পোনেন্ট (Next.js) এবং অন্যান্য কার্যকারিতা (রিয়্যাকশন, কমেন্ট, UI) অপরিবর্তিত রাখা হয়েছে।
//    - ইমেজ পাথ (যেমন, `/analytics-platform.jpg`, `/instructor2.png`) আগের মতোই রাখা হয়েছে। নিশ্চিত করুন এগুলো প্রজেক্টের `public` ফোল্ডারে আছে।
//    - `artifact_id` একই রাখা হয়েছে, কারণ এটি আগের আর্টিফ্যাক্টের আপডেট।

// ### পরীক্ষার পরামর্শ
// - **ট্যাব ফিল্টারিং**:
//   - "All Posts" এ ক্লিক করুন: 10টি পোস্ট (ID 1–10) দেখা উচিত।
//   - "My Posts" এ ক্লিক করুন: শুধু ID 3 (`user: "You"`) দেখা উচিত।
//   - "Admin Posts" এ ক্লিক করুন: শুধু ID 1, 2 (`isAdmin: true`) দেখা উচিত।
// - **নতুন পোস্ট**:
//   - ফর্মে একটি নতুন পোস্ট তৈরি করুন এবং চেক করুন এটি "My Posts" এবং "All Posts" এ দেখায়, কিন্তু "Admin Posts" এ নয় (কারণ `isAdmin: false`)।
// - **ইমেজ**:
//   - নিশ্চিত করুন ইমেজ ফাইলগুলো (`/favicon.png`, `/summit-poster.jpg`, ইত্যাদি) প্রজেক্টের `public` ফোল্ডারে আছে। যদি না থাকে, তাহলে আসল URL দিয়ে প্রতিস্থাপন করুন।
// - **ডিবাগিং**:
//   - ফিল্টার লজিক চেক করতে `filteredPosts` কনসোল লগ করুন:
//     ```javascript
//     console.log("Filtered Posts:", filteredPosts);
//     ```

// ### অতিরিক্ত পরামর্শ
// 1. **অ্যাডমিন ম্যানেজমেন্ট**:
//    - যদি ভবিষ্যতে অ্যাডমিনদের ডায়নামিকভাবে ম্যানেজ করতে চান (যেমন, ইউজার ডাটাবেস থেকে লোড করা), তাহলে একটি API থেকে ইউজার ডেটা ফেচ করে `isAdmin` ফ্ল্যাগ সেট করতে পারেন:
//      ```javascript
//      const [users, setUsers] = useState([]);
//      useEffect(() => {
//        fetch("/api/users")
//          .then((res) => res.json())
//          .then((data) => setUsers(data));
//      }, []);
//      ```
//      এবং পোস্ট তৈরির সময় ইউজারের `isAdmin` স্ট্যাটাস চেক করুন।
// 2. **ইউজার স্কেলিং**:
//    - 100 জন ইউজারের পোস্ট যোগ করতে চাইলে, `posts` অ্যারেতে আরও পোস্ট যোগ করুন অথবা একটি API থেকে ডেটা লোড করুন। উদাহরণ:
//      ```javascript
//      const generateUsers = Array.from({ length: 100 }, (_, i) => ({
//        id: i + 1,
//        name: `User${i + 1}`,
//        isAdmin: false,
//      }));
//      ```
// 3. **রেসপন্সিভ ডিজাইন**:
//    - মোবাইলের জন্য সাইডবার হাইড করতে Tailwind CSS মিডিয়া কোয়েরি যোগ করুন:
//      ```css
//      @media (max-width: 768px) {
//        .w-1\/4.sticky {
//          display: none;
//        }
//        .w-1\/2 {
//          width: 100%;
//          margin: 0;
//        }
//      }
//      ```
// 4. **ইমেজ অপ্টিমাইজেশন**:
//    - `next/image` ব্যবহার করছেন, তাই নিশ্চিত করুন ইমেজ ফাইলগুলো সঠিকভাবে লোড হচ্ছে। যদি ইমেজ লোড না হয়, তাহলে Next.js এর `Image` কম্পোনেন্টের জন্য ডোমেইন কনফিগার করুন (`next.config.js`):
//      ```javascript
//      module.exports = {
//        images: {
//          domains: ["your-domain.com"],
//        },
//      };
//      ```

// ### সম্ভাব্য সমস্যা ও সমাধান
// - **ইমেজ লোড হচ্ছে না**:
//   - নিশ্চিত করুন `/public` ফোল্ডারে `/favicon.png`, `/summit-poster.jpg`, ইত্যাদি ফাইল আছে। অথবা CDN URL ব্যবহার করুন।
// - **অ্যাডমিন পোস্ট দেখাচ্ছে না**:
//   - `console.log(posts)` করে চেক করুন সব পোস্টে `isAdmin` ফিল্ড সঠিকভাবে সেট হয়েছে কিনা।
// - **নতুন পোস্ট অ্যাডমিন হিসেবে দেখাচ্ছে**:
//   - `handlePostSubmit` ফাংশনে `isAdmin: false` সঠিকভাবে সেট হয়েছে কিনা চেক করুন।

// যদি আরও কোনো পরিবর্তন (যেমন, আরও ইউজার পোস্ট, নির্দিষ্ট ফিচার, বা UI টুইক) প্রয়োজন হয়, তাহলে বিস্তারিত জানান!
