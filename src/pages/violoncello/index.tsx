import Pokecaptcha from "components/programming/Pokecaptcha";
import Breadcrumb from "components/Breadcrumb";
import Link from "next/link";

export default function Violoncello() {
  return (
    <div className="h-screen md:py-12 px-12 py-24">
      <main className="md:max-w-3xl mx-auto">
        <h1 className="text-4xl mb-8 py-2">Violoncello</h1>
        <div className="mx-auto md:max-w-lg mb-2">
          <h2 className="p-2">Impromptu Op.30</h2>
          <audio
            src="https://violoncello.s3.ap-northeast-1.amazonaws.com/Impromtu.mp3"
            controls
          />
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
