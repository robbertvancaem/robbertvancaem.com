import Image from "next/image";
import Repositories from "./components/Repositories";

const TEXT_GRADIENT_CLASS =
  "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";
const LINK_CLASS = `border-b font-bold hover:text-pink-400 hover:border-pink-400`;

const listConfig: { emoji: string; text: string }[] = [
  {
    emoji: "🎩",
    text: "I actually enjoy doing presentations",
  },
  {
    emoji: "💬",
    text: "I'm not afraid of talking to clients directly",
  },
  {
    emoji: "🗒",
    text: "I will create meaningful Jira tickets",
  },
  {
    emoji: "🤓",
    text: "I don't mind doing backend work (some)",
  },
  {
    emoji: "💼",
    text: "I'm all about SCRUM",
  },
];

const Section = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <section className={`aspect-video ${className}`}>{children}</section>;

const WithDots = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div className={`relative ${className}`}>
    <div className="dotted" />
    {children}
  </div>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="m-4 text-lg">{children}</li>
);
const Emoji = ({ children }: { children: React.ReactNode }) => (
  <div className="aspect-square bg-white/10 rounded-full text-2xl w-12 inline-flex items-center justify-center mr-4">
    {children}
  </div>
);
const ListItem = ({ emoji, text }: { emoji: string; text: string }) => (
  <Li key={emoji}>
    <Emoji>{emoji}</Emoji>
    {text}
  </Li>
);

async function getRepositories() {
  const res = await fetch(
    "https://api.github.com/users/robbertvancaem/repos?type=owner&sort=pushed",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Could not fetch repositories");
  }
  return res.json();
}

export default async function Home() {
  const repositories = await getRepositories();
  return (
    <main>
      <Section className="flex items-center justify-center">
        <div className="w-48 m-2 overflow-hidden rounded-full">
          <Image
            src="/me.jpeg"
            width={800}
            height={800}
            alt="Robbert van Caem"
            priority
          />
        </div>
        <div className="m-4">
          <h1
            className={`text-[3.375rem] font-extrabold ${TEXT_GRADIENT_CLASS}`}
          >
            Robbert van Caem
          </h1>
          <h2 className={`text-3xl font-bold ${TEXT_GRADIENT_CLASS}`}>
            Creative Frontend Developer
          </h2>
          <h3 className="text-sm mt-8">
            Experienced in{" "}
            <a href="https://react.dev" target="_blank" className={LINK_CLASS}>
              React
            </a>
            ,{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className={LINK_CLASS}
            >
              NextJS
            </a>
            ,{" "}
            <a href="https://jestjs.io/" target="_blank" className={LINK_CLASS}>
              Jest
            </a>
            , CI/CD and many more
          </h3>
        </div>
      </Section>
      <Section>
        <WithDots className="flex px-10 pb-[8rem]">
          <div className="flex justify-center shrink-0 mr-10 pl-20">
            <h2 className={`text-5xl font-bold ${TEXT_GRADIENT_CLASS}`}>
              Hi there 👋
            </h2>
          </div>
          <div className="space-y-6 pr-12">
            <p className="text-lg">
              I am a{" "}
              <span className={TEXT_GRADIENT_CLASS}>Frontend Developer</span>{" "}
              with more than 10 years of experience. The past decade, I have
              been working for small creatives agencies as well as bigger
              corporates.
            </p>
            <p>
              I feel extremely comfortable in any JavaScript environment. Mostly
              I have been working with React, but I also have some experience
              with{" "}
              <a
                href="https://vuejs.org/"
                className={LINK_CLASS}
                target="_blank"
              >
                Vue.js
              </a>{" "}
              and{" "}
              <a
                href="https://angularjs.org/"
                className={LINK_CLASS}
                target="_blank"
              >
                AngularJS
              </a>{" "}
              (yup it was still AngularJS back then)
            </p>
            <p></p>
          </div>
        </WithDots>
      </Section>
      <Section className="py-4 px-16 border border-slate-800">
        <h2 className="text-2xl font-bold">
          What makes me a &quot;modern&quot; developer?
        </h2>
        <ul>{listConfig.map(ListItem)}</ul>
      </Section>
      <Section>
        My latest contributions
        <Repositories data={repositories} />
      </Section>
      <Section className="py-4 flex justify-center items-center border border-slate-800">
        What do others think of me? (LinkedIn Testimonials)
      </Section>
      <div className="py-4 flex justify-center items-center border border-slate-800">
        <a href="https://github.com/robbertvancaem" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/robbertvancaem/" target="_blank">
          LinkedIn
        </a>
        <a href="https://robbertvancaem.medium.com/" target="_blank">
          Medium
        </a>
      </div>
    </main>
  );
}
