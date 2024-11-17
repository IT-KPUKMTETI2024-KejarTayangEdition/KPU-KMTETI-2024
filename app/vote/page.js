"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

import {pixelgamer} from "@/styles/font";
import {UserAuth} from "@/common/context/authentication";
import {subscribeToData} from "@/common/libs/firebaseService";

import Kandidat1 from "@/common/constant/kandidat/calon1.png";
import Kandidat2 from "@/common/constant/kandidat/calon2.png";

export default function Vote() {
  const [votes, setVotes] = useState(null);
  const {googleLogin, user, vote} = UserAuth();

  useEffect(() => {
    const unsubscribe = subscribeToData("votes", setVotes);
    return () => unsubscribe();
  }, []);

  return (
    <main className="my-12 mx-2 md:mx-24 p-2 border-2 border-primary-light rounded-lg">
      <section className="border text-center border-primary-dark rounded-xl flex flex-col text-primary-light">
        <h1 className={`text-4xl mt-2 font-medium ${pixelgamer.className}`}>VOTING CALON KETUA</h1>
        <p className="text-xl">Silahkan Pilih Calon Ketua Anda</p>
        <hr className="bg-primary-dark border-0 h-[0.5px] mt-2 mb-8 mx-6"/>
        <div className="hidden md:flex justify-between items-center text-xl gap-x-2 px-6 py-4">
          <div className="cursor-pointer duration-300 hover:scale-95">
            <Image onClick={() => !user ? googleLogin() : vote(user, "calon1")} src={Kandidat1} data-aos="fade-right" width={300} alt="First Candidate"/>
          </div>
          {votes ? <p>Sebanyak <span className="text-primary-dark">{((votes["calon1"] + votes["calon2"]) / 882 * 100).toFixed(2)}%</span> telah memberikan suaranya</p> : <p>Loading...</p>}
          <div className="cursor-pointer duration-300 hover:scale-95">
            <Image className="cursor-pointer duration-300 hover:scale-95" onClick={() => !user ? googleLogin() : vote(user, "calon2")} src={Kandidat2} data-aos="fade-left" width={300} alt="Second Candidate"/>
          </div>
        </div>
        <div className="md:hidden justify-between items-center text-xl gap-x-2 px-6 py-4">
          {votes ? <p>Sebanyak <span className="text-primary-dark">{((votes["calon1"] + votes["calon2"]) / 882 * 100).toFixed(2)}%</span> telah memberikan suaranya</p> : <p>Loading...</p>}
          <div className="cursor-pointer duration-300 hover:scale-95">
            <Image onClick={() => !user ? googleLogin() : vote(user, "calon1")} src={Kandidat1} data-aos="fade-right" width={300} alt="First Candidate"/>
          </div>
          <div className="cursor-pointer duration-300 hover:scale-95">
            <Image className="cursor-pointer duration-300 hover:scale-95" onClick={() => !user ? googleLogin() : vote(user, "calon2")} src={Kandidat2} data-aos="fade-left" width={300} alt="Second Candidate"/>
          </div>
        </div>
      </section>
    </main>
  );
}