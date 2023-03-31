export default function KontakKami() {
  return (
    <div className="container mx-auto mt-20 lg:mt-24">
      <div className="md:flex">
        <div className="border rounded-xl p-5 shadow-2xl my-10 mx-5 sm:mx-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.308517183517!2d106.8233566147944!3d-6.972881270214853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6839f3df59e70d%3A0x60911fa43e16011f!2syayasan%20daar%20el_sakinah!5e0!3m2!1sid!2sid!4v1680246495888!5m2!1sid!2sid"
            className="w-full h-48 lg:h-60 xl:h-72"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>
            Jl. Cicantayan, Bojong, Kec. Cikembar, Kabupaten Sukabumi, Jawa
            Barat 43157
          </p>
        </div>
        <div className="mx-5 sm:mx-8 my-5 ">
          <div className="flex gap-1  md:pt-10 lg:mt-16">
            <img src="/img/footer/map.png" alt="" className="h-8" />
            <p>
              Jl. Cicantayan, Bojong, Kec. Cikembar, Kabupaten Sukabumi, Jawa
              Barat 43157
            </p>
          </div>
          <div className="flex gap-3 py-5">
            <img src="/img/footer/gmail.png" alt="" className="w-6" />
            <p>nama gmail yayasan</p>
          </div>
          <div className="flex gap-3">
            <img src="/img/footer/telepon.png" alt="" className="w-6" />
            <p>085758</p>
          </div>
        </div>
      </div>
    </div>
  );
}
