"use client";
import CardSection from "@/components/main/CardSection";
import Hero from "@/components/main/Hero";
import Modal from "@/components/sub/Modal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full items-center justify-center ">
      <>
        <div className=" xl:w-[115rem] p-2 m-auto mt-3 rounded-md items-center h-full border border-white/45 bg-gradient-to-br  from-[#cec8e9] to-[#948eb1]">
          <div className="justify-between flex items-center">
            <div className="rounded-full bg-transparent flex items-center justify-center space-x-3">
              <Modal />
              <div
                className=" items-center justify-center "
                onClick={() =>
                  //@ts-ignore
                  document.getElementById("coins-vest").showModal()
                }
              >
                <Image
                  src="/coinvest-logo.jpeg"
                  width={50}
                  height={50}
                  alt="Logo"
                  className="rounded-full w-full "
                />
              </div>
              <p className="font-serif text-lg">CoinVest</p>
            </div>
            <div className="text-lg rounded-full pl-5 pr-5 bg-blue-800/60">
              VIP1
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Hero />
          <div className="relative z-10 xl:-top-32 ">
            <CardSection />
          </div>
        </div>
      </>
    </main>
  );
}
