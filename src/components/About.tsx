
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <Card className="p-6 backdrop-blur-md bg-white/10 hover-scale">
          <p className="text-lg leading-relaxed text-gray-200">
            I'm a passionate developer and designer with a keen eye for detail and a love for creating 
            beautiful, functional web applications. With expertise in modern web technologies, 
            I bring ideas to life through clean code and intuitive design.
          </p>
        </Card>
      </div>
    </section>
  );
};
