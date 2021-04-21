import Link from "next/link";
import { useEffect, useState } from "react";
const List = () => {
  const [state1, setstate] = useState([]);
  const allData = async ({}) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const ownerList = await response.json();
    setstate(ownerList);
  };
  useEffect(() => {
    allData();
  }, []);
  return (
    <div>
      {state1.map((e) => (
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
};

export default List;
