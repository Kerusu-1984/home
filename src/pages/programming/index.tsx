import Pokecaptcha from "components/programming/Pokecaptcha";
import Breadcrumb from "components/Breadcrumb";

export default function Programming() {
  return (
    <div className="h-screen w-screen md:py-12 px-12 py-24">
      <main className="h-4/5">
        <h1 className="text-4xl mb-8 py-2">Programming</h1>
        <div className="m-2">
          <ul className="list-disc">
            <li>
              <a
                href="https://kerusu-1984.github.io/pokemon-sleep-calc-required-candy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Pokémon Sleep アメ・経験値シミュレータ
              </a>
            </li>
            <div className="mt-8">
            <Pokecaptcha />
            </div>
          </ul>
        </div>
      </main>
      <a href="https://www.coins.tsukuba.ac.jp/~syspro/2023/2023-06-28/index.html#notes-chatgpt" className="text-xs md:text-sm text-gray-500 py-1 italic">プログラミングは、楽しい。楽しいことを、コンピュータにやらせるのか。</a>
      <hr />
      <footer>
        <Breadcrumb
          breadcrumb={[{ title: "Home", link: "/" }, { title: "Programming" }]}
        />
      </footer>
    </div>
  );
}
