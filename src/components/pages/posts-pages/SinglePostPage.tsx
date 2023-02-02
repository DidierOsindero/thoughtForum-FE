import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, IPostData } from "../../../App";
import { convertTimeStampToDate } from "../../../utils/convertTimeStampToDate";
import { RecommendedPost } from "../../components/RecommendedPost";

export const SinglePostPage = (): JSX.Element => {
  const { id } = useParams();

  const [postData, setPostData] = useState<IPostData>();
  const [recommendedPostData, setRecommendedPostData] = useState<IPostData[]>(
    []
  );

  const getPostsAndRecommendedPostsData = useCallback(async () => {
    try {
      const responseCurrentPost = await axios.get(BASE_URL + "posts/" + id);
      const currentPostData: IPostData = responseCurrentPost.data[0];
      setPostData(currentPostData);
      const responseRecommendedPosts = await axios.get(
        BASE_URL + "posts/recommend/" + currentPostData.category + "/" + id
      );
      const recommendPostArr = responseRecommendedPosts.data;
      setRecommendedPostData(recommendPostArr);
    } catch (error) {
      console.error("There was an error fetching data for this page:", error);
    }
  }, [id]);

  useEffect(() => {
    console.log("START getPostsAndRecommendedPostsData", new Date());
    getPostsAndRecommendedPostsData();
    console.log("FINISH getPostsAndRecommendedPostsData", new Date());
  }, [getPostsAndRecommendedPostsData]);

  if (postData) {
    return (
      <div className="postPageContainer">
        <div className="postPageLeftContainer">
          <div className="postPagePostContainer">
            <img src={postData.img} alt="" className="postPageIMG" />
            <div className="postPagePostDetails">
              <p className="postPagePostUserName">
                <i>{postData.username && postData.username}</i>
              </p>
            </div>
            <div className="postPageTitle">
              <h3>{postData.title}</h3>
            </div>
            <p className="postPagePostContent">{postData.content}</p>
            <p className="postPagePostDate">
              <i>{convertTimeStampToDate(postData.creation_date)}</i>
            </p>
          </div>
        </div>
        <div className="postPageRightContainer">
          <div className="recommendedPostsContainer">
            <p className="recommendedText">Recommended:</p>
            {recommendedPostData.length > 0 &&
              recommendedPostData.map((postData) => {
                return (
                  <div key={postData.post_id}>
                    <RecommendedPost postData={postData} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading Full Post</h1>;
  }
};
