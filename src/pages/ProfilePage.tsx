
import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  
  return (
    <Layout>
      <Profile username={username} />
    </Layout>
  );
};

export default ProfilePage;
