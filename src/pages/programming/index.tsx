import Pokecaptcha from "components/programming/Pokecaptcha";
import Breadcrumb from "components/Breadcrumb";
import Link from "next/link";

export default function Programming() {
  return (
    <div className="h-screen w-screen md:py-12 px-12 py-24">
      <main className="md:max-w-3xl mx-auto">
        <h1 className="text-4xl mb-8 py-2">Programming</h1>
        <div className="grid justify-items-stretch gap-4 mx-auto md:max-w-lg">
          <a
            href="https://kerusu-1984.github.io/pokemon-sleep-calc-required-candy/"
            target="_blank"
            rel="noopener noreferrer"
            className="card shadow-xl"
          >
            <figure>
              <img
                className="rounded-btn border border-base-300"
                src="/img/programming/required_candy.png"
                alt="アメ何個いる？"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                アメ何個いる？(Pokémon Sleep アメ・経験値シミュレータ)
              </h2>
              <p>
                ポケモンスリープでポケモンのレベルを上げるのに必要なアメの数を計算します。性格補正・アメブースト対応
              </p>
            </div>
          </a>

          <Link href="/programming/shadow-box" className="card shadow-xl">
            <figure>
              <img
                className="rounded-btn border border-base-300"
                src="/img/programming/shadow_box.png"
                alt="シャドーボックス"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                シャドーボックス
              </h2>
              <p>シャドーボックスの3DデータをThree.jsで表示</p>
            </div>
          </Link>
        </div>

        <div className="mt-16">
          <Pokecaptcha />
        </div>
      </main>
      <a
        href="https://www.coins.tsukuba.ac.jp/~syspro/2023/2023-06-28/index.html#notes-chatgpt"
        className="text-xs md:text-sm text-gray-500 py-1 italic"
      >
        プログラミングは、楽しい。楽しいことを、コンピュータにやらせるのか。
      </a>
      <hr />
      <footer>
        <Breadcrumb
          breadcrumb={[{ title: "Home", link: "/" }, { title: "Programming" }]}
        />
      </footer>
    </div>
  );
}
