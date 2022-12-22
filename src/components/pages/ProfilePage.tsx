import { dummyData } from "../../utils/dummyPostData";
import { dummyUserData } from "../../utils/dummyUserData";
import { MyPostsListView } from "../templates/MyPostsListView";
const currentUser = dummyUserData[0];

export const ProfilePage = (): JSX.Element => {
  return (
    <div className="ProfilePageContainer">
      <h2 style={{ textAlign: "center" }}>
        {currentUser.first_name} {currentUser.last_name}
      </h2>
      <div className="leftOfPage">
        <MyPostsListView
          postDataArray={dummyData.filter(
            (el) => el.user_id === currentUser.userid
          )}
        />
      </div>

      <div className="rightOfPage">
        <div className="createPostSettingsContainer">
          <h4>Category:</h4>
          <button>Thought</button>
          <br />
          <button>Science</button>
          <br />
          <button>Art</button>
        </div>
      </div>
    </div>
  );
};
