import Image from 'next/image'

const listConfig: {emoji: string, text: string}[] = [{
  emoji: '🎩',
  text: 'I actually enjoy doing presentations'
}, {
  emoji: '💬',
  text: "I'm not afraid of talking to clients directly"
}, {
  emoji: '🗒',
  text: "I will create meaningful Jira tickets"
}, {
  emoji: '🤓',
  text: "I don't mind doing backend work (some)"
}, {
  emoji: '💼',
  text: "I'm all about SCRUM"
}]

const Li = ({ children } : { children: React.ReactNode}) => <li className="m-4 text-lg">{children}</li>
const Emoji = ({ children } : { children: React.ReactNode}) => <div className="aspect-square bg-white/10 rounded-full text-2xl w-12 inline-flex items-center justify-center mr-4">{children}</div>
const ListItem = ({ emoji, text }: { emoji: string, text: string }) => <Li key={emoji}><Emoji>{emoji}</Emoji>{text}</Li>

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between p-4 fixed backdrop-saturate-100 backdrop-blur bg-black/30 w-full border-b border-slate-800">
        <a href="#">
          <span className="font-extrabold tracking-widest">RVC</span>
          <span className="font-light">.dev</span>
        </a>
        <div className="space-x-6">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div className="flex items-center justify-center py-24">
        <div className="w-48 m-2 overflow-hidden rounded-full">
          <Image src="/me.jpeg" width={800} height={800} alt="Robbert van Caem" priority />
        </div>
        <div className="m-4">
          <h1 className="text-4xl">Robbert van Caem</h1>
          <h2 className="text-2xl">Frontend Developer</h2>
        </div>
      </div>
      <div className="py-4 px-16 border border-slate-800">
        <h2 className="text-2xl font-bold">What makes me a "modern" developer?</h2>
        <ul>
          {listConfig.map(ListItem)}
        </ul>
      </div>
      <div className="py-4 flex justify-center items-center border border-slate-800">Slide 2</div>
      <div className="py-4 flex justify-center items-center border border-slate-800">
        <a href="https://github.com/robbertvancaem" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/robbertvancaem/" target="_blank">LinkedIn</a>
        <a href="https://robbertvancaem.medium.com/" target="_blank">Medium</a>
      </div>
    </main>
  )
}
