import {Welcome} from "@/modules/home";

export default function Home() {
  return (
    <>
      <section className="lg:mt-28 mx-12 grid grid-cols-[50%_50%]">
        <Welcome/>
      </section>
    </>
  );
}
