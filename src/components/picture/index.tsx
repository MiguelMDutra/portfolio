import "./picture.css";

type freddy = {
  freddysHurHurHur: () => void;
};

export function Picture({ freddysHurHurHur }: freddy) {
  return (
    <>
      <div className="picture">
        <img
          src="https://avatars.githubusercontent.com/MiguelMDutra"
          alt="Miguel M Dutra"
          className="my--pfp"
        ></img>
        <button className="freddys--nose" onClick={freddysHurHurHur}></button>
      </div>
    </>
  );
}
