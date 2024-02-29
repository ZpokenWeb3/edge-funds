import { Average } from "./average";
import { Hero } from "./hero";
import { Strategy } from "./strategy";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Strategy />
      <Average />
    </div>
  );
};

export default MainPage;
