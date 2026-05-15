import "./picture.css";
import blankSpace from "../../assets/blankSpaceBaby.webp";

type freddy = {
  freddysHurHurHur: () => void;
  isFreddyAngry: boolean;
};

export function Picture({ freddysHurHurHur, isFreddyAngry }: freddy) {
  return (
    <>
      <div className="picture">
        <img
          src={
            isFreddyAngry
              ? blankSpace
              : "https://avatars.githubusercontent.com/MiguelMDutra"
          }
          alt="Miguel M Dutra"
          className="my--pfp"
        ></img>

        <button className="freddys--nose" onClick={freddysHurHurHur}></button>
      </div>
    </>
  );
}
