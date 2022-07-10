import type { NextPage } from "next";
import { useSession } from "next-auth/react";
const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session ? <div>Login as {session.user?.email}</div> : <div>Login1</div>}
    </>
  );
};

export default Home;
