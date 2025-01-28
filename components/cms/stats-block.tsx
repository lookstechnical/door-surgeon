import { Animate } from "../animate/animation";

export const StatsBlock = ({ highlight, heading, description, stats }: any) => {
  return (
    <div className="bg-primary/5 py-10 pt-0">
      <Animate
        variant="Scale"
        className="bg-primary/20 p-10 rounded-xl flex flex-col gap-4 md:flex-row container max-w-[1200px] mx-auto"
      >
        <div className="md:w-1/2 md:pr-40">
          <ul className="flex flex-row gap-4 justify-between">
            {stats.map((stat: any) => (
              <li className="flex flex-col">
                <span className="text-5xl text-primary">{stat.value}</span>
                {stat.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xl md:w-1/2">{description}</div>
      </Animate>
    </div>
  );
};
