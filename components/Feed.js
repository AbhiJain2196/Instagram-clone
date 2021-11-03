//import Posts from "./Posts";
import Stories from "./Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
const Posts = dynamic(
  () => {
    return import("../components/Posts");
  },
  { ssr: false }
);

function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      } `}
    >
      <section className="cols-span-2">
        {/* Stories */}
        <Stories />
        {/* Post */}
        <div>
          <Posts />
        </div>
      </section>

      {session && (
        <section className="hidden xl:inline-grid md:col-span-1 ">
          <div className="fixed top-20">
            {/* Mini profile */}
            <MiniProfile />
            {/* Suggestions */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
