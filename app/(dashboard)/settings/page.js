import Button from "@/app/components/Button";

export const metadata = {
  title: "Dashboard",
};
const Settings = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <div className="p-10">
        <h1 className="font-bold text-4xl capitalize">
          Settings - We invest in the world’s potential
        </h1>
        <p className="text-xl my-6">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <Button>Home</Button>
      </div>
    </section>
  );
};
export default Settings;
