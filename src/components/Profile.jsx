import React from 'react'

export default function Profile() {
  const experience = [
    {link: "../src/assets/foto1.jpg", judul: "Pramuka", ket: "Saat SMA saya aktif di bidang kepramukaan dan menjadi Pradana Putra Dewan Ambalan MAN IC Pekalongan"},
    {link: "../src/assets/foto2.jpg", judul: "Musik", ket: "Menyukai dunia seni musik, seperti musik band, karawitan, dan paduan suara"},
    {link: "../src/assets/foto3.jpg", judul: "Akademik", ket: "Aktif dalam pembelajaran kelas, penelitian, juga olimpiade sains"}
  ]

  return (
    <div className='section '  id='profile' >
      <div className='container mx-auto max-w-[1000px] p-3 overflow-hidden'>
        <div className='text-center'>
          <h1 className='play text-white text-[40px] pb-8 font-bold'> Me</h1>
          <h2 className='pop max-w-[700px] mx-auto text-slate-300 text-[16px] ' data-aos="zoom-in-down" data-aos-duration="1500">

          Seorang mahasiswa baru angkatan 2024 Jurusan Sistem Informasi, Fakultas Ilmu Komputer, Universitas Indonesia, yang berasal dari Kabupaten Wonosobo, Jawa Tengah. Memiliki ketertarikan untuk mengeksplorasi kemampuan di dunia IT dan Pemrograman. Menekuni bidang Pemrograman Web, Analisis Sistem dan Pemrograman Kompetitif.

          </h2>
        </div>

        <div className='flex flex-col lg:flex-row items-start justify-between'>
          <div className='text-center wpfull max-w-[400px] mx-auto mb-[50px]'>
            <div>
              <img src="../assets/profil.jpg" alt="" className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 min-w-[230px] md:me-10 min-h-[230px] w-10 rounded-full mt-16'/>
            </div>
            <h2 className='text-gradient text-[50px] mt-[20px]'></h2>
          </div>

          <div className='w-full lg:pt-[50px] lg:ml-[50px]'>
            <div>
              <h1 className='play text-[24px] text-white mb-4'>Other Experience</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-center'>

              {
                experience.map(({link, judul, ket}) => 
                  <div className='w-full' key={judul}>
                    <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-1 group'>
                      <img src={link} alt="" />
                      <div className='absolute p-4 backdrop-blur-xl bg-slate-200 w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                        <div className='text-center w-full text-white'>
                          <div className='bg-white rounded-full px-3 py-1 sm:py-2 inline-block sm:mb-2 mb-1'>
                            <h6 className='text-blue-500 sm:text-[15px]'>
                              {judul}
                            </h6>
                          </div>
                          <p className='text-[11px] sm:text-[13px] text-black'>
                            {ket}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
{/* 
              <div className='w-full'>
                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-1 group'>
                  <img src="../src/assets/foto1.jpg" alt="" />
                  <div className='absolute p-5 backdrop-blur-xl bg-slate-200 w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                    <div className='text-center w-full text-white'>
                      <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                        <h4 className='text-blue-500 text-[18px] '>
                          Pramuka
                        </h4>
                      </div>
                      <p className='text-[13px] text-black'>
                        Saat SMA saya aktif di bidang kepramukaan dan menjadi Pradana Putra Dewan Ambalan MAN IC Pekalongan
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className='w-full'>
                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                  <img src="/images/1.png" alt="" />
                  <div className='absolute p-5 backdrop-blur-xl bg-slate-200 w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                    <div className='text-center w-full text-white'>
                      <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                        <h4 className='bg-gray-400'>
                          Jquery
                        </h4>
                      </div>
                      <p className='text-[12px] text-black'>
                        Lorem ipsum dolor sit amet consectetur.{""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                  <img src="/images/1.png" alt="" />
                  <div className='absolute p-5 backdrop-blur-xl bg-slate-200 w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                    <div className='text-center w-full text-white'>
                      <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                        <h4 className='bg-gray-400'>
                          Jquery
                        </h4>
                      </div>
                      <p className='text-[12px] text-black'>
                        Lorem ipsum dolor sit amet consectetur.{""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                  <img src="/images/1.png" alt="" />
                  <div className='absolute p-5 backdrop-blur-xl bg-slate-200 w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                    <div className='text-center w-full text-white'>
                      <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                        <h4 className='bg-gray-400'>
                          Jquery
                        </h4>
                      </div>
                      <p className='text-[12px] text-black'>
                        Lorem ipsum dolor sit amet consectetur.{""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                  <img src="/images/1.png" alt="" />
                  <div className='absolute p-5 backdrop-blur-xl bg-slate-200 w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                    <div className='text-center w-full text-white'>
                      <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                        <h4 className='bg-gray-400'>
                          Jquery
                        </h4>
                      </div>
                      <p className='text-[12px] text-black'>
                        Lorem ipsum dolor sit amet consectetur.{""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
