import React from "react";

export default function ProfilFasilitas() {
  return (
    <div className="container mx-auto mt-20">
      <div className="lg:flex">
        <div className="lg:w-6/12">
          <img src="/img/profilfasilitas/cobong.png" alt="" />
        </div>
        <div className="lg:w-6/12">
          <p> Ini adalah Kobong</p>
          <p>Keterangan</p>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-6/12 hidden lg:block">
          <p> ini adalah Kulah</p>
          <p>Keterangan</p>
        </div>
        <div className="lg:w-6/12">
          <img src="/img/profilfasilitas/kulah1.png" alt="" />
        </div>
        <div className="lg:hidden">
          <p> ini adalah Kulah</p>
          <p>Keterangan</p>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-6/12">
          <img src="/img/profilfasilitas/majlisdalam.png" alt="" />
        </div>
        <div className="lg:w-6/12">
          <p>ini adalah Majlis dalam</p>
          <p>Keterangan</p>
        </div>
      </div>
      <div className="lg:flex">
        
        <div className="lg:w-6/12 hidden lg:block">
          <p>ini adalah Majlis</p>
          <p>Keterangan</p>
        </div>
        <div className="lg:w-6/12">
          <img src="/img/profilfasilitas/majlis1.png" alt="" />
        </div>
        <div className="lg:hidden">
          <p>ini adalah Majlis</p>
          <p>Keterangan</p>
        </div>
      </div>
    </div>
  );
}
