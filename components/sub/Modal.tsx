import Image from "next/image";
import React from "react";

const Modal = () => {
  return (
    <dialog
      id="coins-vest"
      className="modal xl:w-[1000px]  bg-gradient-to-br from-blue-500  to-cyan-700 "
    >
      <div className="modal-box p-9 m-auto items-center justify-center">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-3xl text-center mb-3">Coin Vest</h3>
        <Image
          src="/coinvest-logo.jpeg"
          alt="logo modal"
          width={300}
          height={90}
          className="rounded-3xl items-center justify-center xl:ml-72"
        />
        <p className="mt-4 text-lg">
          CoinVest is an investment Platform in which You can Deposit your Cash
          and expect a great output in the fututre. We give the best, we potray
          accountabilty, transparency, integrity, the best investment you have
          ever done is with us
        </p>
      </div>
    </dialog>
  );
};

export default Modal;
