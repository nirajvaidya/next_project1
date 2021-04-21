import React from "react";
import { useRouter } from "next/router";

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading Page Data...</div>;
  }
  return (
    <div>
      <img src={"/images/posts/" + postData.id + ".jpeg"} />
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
}

// Post.getInitialProps = async ({ query }) => {
//   const { id } = query;

//   return { id };
// };

export async function getStaticPaths() {
  const paths = ["/posts/1", "/posts/2"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  console.log({ id });

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const postData = await res.json();

  return {
    props: {
      postData,
    },
  };
}

/*
export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}
*/
