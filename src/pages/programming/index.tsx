import Pokecaptcha from "components/programming/Pokecaptcha";
import Breadcrumb from "components/Breadcrumb";
import MusicPlayButton from "components/programming/MusicPlayButton";

export default function Programming() {
  return (
    <div className="h-screen w-screen md:py-12 px-12 py-24">
      <main className="h-4/5">
        <h1 className="text-4xl mb-8 py-2">Programming</h1>
        <div className="m-2">
          <Pokecaptcha />
          <div className="my-4">
            <MusicPlayButton />
          </div>
        </div>
      </main>
      <hr />
      <footer>
        <Breadcrumb
          breadcrumb={[{ title: "Home", link: "/" }, { title: "Programming" }]}
        />
      </footer>
    </div>
  );
}
