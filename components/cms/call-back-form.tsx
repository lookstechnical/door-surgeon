import { Animate } from "../animate/animation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const CallBackForm = () => {
  return (
    <section className="bg-primary/10 py-10">
      <div className="flex flex-col md:flex-row gap-4 container mx-auto max-w-[1200px] px-4">
        <Animate variant="FadeInBottom" delay={0.2} className="w-1/2">
          <p>Need help?</p>
          <h2 className="text-6xl">Request a callback</h2>
        </Animate>
        <div className="w-1/2 overflow-hidden">
          <h4 className="text-2xl pb-4">Send us a message</h4>
          <form className="w-full flex gap-2 flex-col">
            <Animate variant="FadeInBottom">
              <Input
                name="first name"
                placeholder="First Name"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>
            <Animate variant="FadeInBottom" delay={0.2}>
              <Input
                name="email"
                placeholder="Email"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>
            <Animate variant="FadeInBottom" delay={0.2}>
              <Input
                name="phone"
                placeholder="phone"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>
            <Animate variant="FadeInBottom" delay={0.2}>
              <Button className="animate-fadeInBottom duration-500">
                Send
              </Button>
            </Animate>
          </form>
        </div>
      </div>
    </section>
  );
};
