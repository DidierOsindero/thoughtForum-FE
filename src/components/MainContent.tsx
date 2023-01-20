import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { WritePage } from "./pages/WritePage";
import { ThoughtPage } from "./pages/posts-pages/ThoughtPage";
import { ArtPage } from "./pages/posts-pages/ArtPage";
import { SciencePage } from "./pages/posts-pages/SciencePage";
import { PostPage } from "./pages/posts-pages/PostPage";

export const MainContent = (): JSX.Element => {
  return (
    <div className="mainContentContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts">
          <Route index element={<PostsPage />} />
          <Route path="thought" element={<ThoughtPage />} />
          <Route path="art" element={<ArtPage />} />
          <Route path="science" element={<SciencePage />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </div>
  );
};
