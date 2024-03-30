import Pokecaptcha from "components/programming/Pokecaptcha";
import Breadcrumb from "components/Breadcrumb";
import Link from "next/link";

export default function Violoncello() {
  return (
    <div className="h-screen md:py-12 px-12 py-24">
      <main className="md:max-w-3xl mx-auto">
        <h1 className="text-4xl mb-8 py-2">Violoncello</h1>
        <div className="mx-auto md:max-w-lg mb-2">
          <h2 className="p-2 text-xl">Impromptu Op.30</h2>
          <audio
            src="https://fcoztagjpgqwcdkawbvt.supabase.co/storage/v1/object/public/violoncello/Impromtu.mp3?t=2024-03-30T02%3A33%3A53.602Z"
            controls
          />
          <div tabIndex={0} className="collapse">
            <div className="collapse-title">解説を読む</div>
            <div className="collapse-content">
              <p>
                Kerusuが1年間の休部から戻り初めての演奏。この曲はもともとチェロ4台で演奏される曲だが、チェロが弾ける部員が足りずチェロ3台+コントラバス1台で演奏された。Kerusuは1stチェロ担当であり、大部分のメロディを弾いている。
              </p>
              <p>
                賛美歌のような荘厳な雰囲気で始まるが、途中から軽快なリズムに変わり、最後は誰もが知っている「結婚行進曲」に繋がる。特に結婚行進曲の部分は有名であるため音程が合わないとすぐにバレてしまう癖に、1stは楽譜がト音記号しか出てこないようなハイポジの連続で非常に難しい。
              </p>
              <p>
                夏の演奏、しかもホールではなく校内での演奏のため、外からのセミの鳴き声が常に鳴り響く。
              </p>
            </div>
          </div>
        </div>
      </main>
      <hr />
      <footer>
        <Breadcrumb
          breadcrumb={[{ title: "Home", link: "/" }, { title: "Violoncello" }]}
        />
      </footer>
    </div>
  );
}
