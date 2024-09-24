export default function Footer() {
  return (
    <footer className="bg-retroBg py-8">
      <div className="container mx-auto text-center">
        <div className="text-retroHighlight font-extrabold text-5xl mb-4 tracking-wider">
          BLUR
        </div>
        <div className="text-retroText text-xs space-x-4 flex justify-center items-center">
          <span>(c) 2022</span>
          <a
            href="https://twitter.com"
            className="text-retroHighlight hover:text-retroText transition-colors"
          >
            Twitter
          </a>
          <span>//</span>
          <a
            href="https://discord.com"
            className="text-retroHighlight hover:text-retroText transition-colors"
          >
            Discord
          </a>
          <span>//</span>
          <a
            href="/api"
            className="text-retroHighlight hover:text-retroText transition-colors"
          >
            API
          </a>
        </div>
      </div>
    </footer>
  );
}
