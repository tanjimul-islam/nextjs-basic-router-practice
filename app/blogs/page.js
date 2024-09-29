import { blogs } from "@/data/blogs";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

const Blogs = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <div className="p-10">
          <h1 className="font-bold text-4xl capitalize">
            Blogs - We invest in the world’s potential
          </h1>
          <p className="text-xl my-6">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </section>
      <hr />
      <section className="p-14">
        <div className="p-10">
          {blogs.map((blog) => (
            <h1 key={blog.id} className="font-bold text-xl capitalize p-2">
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </h1>
          ))}
        </div>
      </section>
    </>
  );
};
export default Blogs;
