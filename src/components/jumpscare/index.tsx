import jumpscare from "../../assets/jumpscare.gif";
import freddy from "../../assets/audio/freddy.mp3";
import staticGif from "../../assets/static.gif";
import "./jumpscare.css";

export function Jumpscare({
  isFreddyAngry,
  isItStatic,
}: {
  isFreddyAngry: boolean;
  isItStatic: boolean;
}) {
  return (
    <>
      <img
        src={jumpscare}
        className={isFreddyAngry ? "freddy active" : "freddy"}
      ></img>
      <audio src={isFreddyAngry ? freddy : undefined} autoPlay></audio>
      <img
        src={staticGif}
        alt="Static"
        className={isItStatic ? "static-gif" : "static-gif hidden"}
      />
    </>
  );
}
