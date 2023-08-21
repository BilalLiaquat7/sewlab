import sewMachine from "../assets/sew_machine.png";

export default function Hero() {
  return (
    <div>
      <img
        src={sewMachine}
        alt="Sew Machine"
        style={{ height: "85vh", width: "100%" }}
      />
    </div>
  );
}
