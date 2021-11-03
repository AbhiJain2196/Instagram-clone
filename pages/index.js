import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
//import Modal from "../components/Modal";
import dynamic from "next/dynamic";

const Modal = dynamic(
  () => {
    return import("../components/Modal");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scroll-hide">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-128.png"
        />
      </Head>

      <Header />
      <Feed />
      <div>
        <Modal />
      </div>
    </div>
  );
}
