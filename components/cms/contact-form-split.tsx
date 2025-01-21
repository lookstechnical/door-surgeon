import { Animate } from "../animate/animation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactFormSplit = () => {
  return (
    <section className="bg-primary/50 py-10">
      <div className="flex flex-col md:flex-row gap-4 container mx-auto max-w-[1200px] px-4">
        <Animate variant="FadeInBottom" delay={0.5} className="w-1/2">
          <h2 className="text-6xl">Contact us</h2>
          <h3 className="text-3xl pt-4">Let’s get in touch</h3>
        </Animate>
        <div className="w-1/2 overflow-hidden">
          <h4 className="text-2xl pb-4">Send us a message</h4>
          <form className="w-full flex gap-4 flex-col">
            <Animate variant="FadeInBottom">
              <Input
                name="first name"
                placeholder="First Name"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>
            <Animate variant="FadeInBottom">
              <Input
                name="addresss"
                placeholder="Address"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>

            <Animate variant="FadeInBottom">
              <Input
                name="email"
                placeholder="Email"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>

            <Animate variant="FadeInBottom">
              <Input
                name="phone"
                placeholder="phone"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>

            <Animate variant="FadeInBottom">
              <Textarea
                name="message"
                placeholder="message"
                className="animate-fadeInBottom duration-500"
              />
            </Animate>

            <Animate variant="FadeInBottom">
              <Button className="animate-fadeInBottom duration-500 w-fit">
                Send
              </Button>
            </Animate>
          </form>
        </div>
      </div>
    </section>
  );
};
