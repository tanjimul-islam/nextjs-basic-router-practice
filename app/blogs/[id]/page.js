import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => {
    id: blog.id;
  });
}

const SingleBlog = ({ params }) => {
  const { id } = params;
  const blog = blogs.find((blog) => String(blog.id) === String(id));
  const { title, body } = blog;
  return (
    <section className="h-screen flex flex-col justify-center  text-center">
      <div className="p-10">
        <h1 className="font-bold text-4xl capitalize">{title}</h1>
        <p className="text-xl my-6">{body}</p>
      </div>
    </section>
  );
};
export default SingleBlog;
