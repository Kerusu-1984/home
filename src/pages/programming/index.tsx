import Pokecaptcha from "../../components/programming/Pokecaptcha";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Programming() {
  return (
    <div className="container m-2">
      <h1 className="p-4">Programming</h1>
      <div className="row m-2">
        <Pokecaptcha />
      </div>
    </div>
  );
}
