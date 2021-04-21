import Link from "next/link";

// const data = [
//   { id: 1, name: "aj", car: "ragerover" },
//   { id: 2, name: "kala", car: "audfy" },
//   { id: 3, name: "nana", car: "nano" },
// ];
export default function Details({ ownerList }) {
  return (
    <div>
      {ownerList.map((e) => (
        <div>
          <Link as={`/${e.id}/${e.title}`} href="/[vehicle]/[persion]">
            <a>
              niniha{e.id}
              {e.title}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

Details.getInitialProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const ownerList = await response.json();
  return { ownerList: ownerList };
};
