import type { NextPage } from "next";
import { useSession } from "next-auth/react";
const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div>
          Login as {session.user?.email} name: {session.user?.name}
        </div>
      ) : (
        <div>Login1</div>
      )}
    </>
  );
};

export default Home;
