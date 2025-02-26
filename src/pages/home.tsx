import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold ">Home Directory</h1>
      <Button className="hover:animate-pulse w-full text-black">
        click here to check
      </Button>
    </div>
  );
};

export default Home;
