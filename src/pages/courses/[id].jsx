import { useEffect, useState, useRef } from "react";

import Head from "next/head";
import courses from "@/src/constants/api/courses";
import Youtube from "react-youtube";
import Header from "@/src/parts/Header";
import Nametag from "public/images/icon-nametag.svg";
import Module from "public/images/icon-module.svg";
import Certificate from "public/images/icon-certificate.svg";

import Footer from "@/src/parts/Footer";
import RenderPreview from "@/src/parts/Details/RenderPreview";

import { CSSTransition } from "react-transition-group";
import formatThousand from "@/src/helpers/formatThousand";
import CoursePhoto from "@/src/parts/Details/CoursePhoto";

import HappyStudent from "@/src/parts/Details/HappyStudent";

import Feature from "@/src/parts/Details/Feature";

export default function DetailCourse({ data }) {
  console.log(data);

  const footer = useRef(null);

  const [isSticky, setSticky] = useState(() => true);

  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top;

    const stickyMetaToggler = () => {
      setSticky(stickyOffsetTop >= window.scrollY + window.innerHeight);
    };

    window.addEventListener("scroll", stickyMetaToggler);

    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>BTS</title>
      </Head>
      <section
        className="pt-18 relative overflow-hidden"
        style={{ height: 660 }}
      >
        {data?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper min-h-screen md:min-h-full">
            <Youtube
              videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
              id={data?.chapters?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            ></Youtube>
          </div>
        )}

        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75">
          <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-lg text-white">Kelas Online:</h3>
              <h4 className="text-6xl text-secondary font-semibold">
                {data?.name ?? "Nama Kelas"}
              </h4>
            </div>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2 ">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between">
              <Feature
                data={{
                  icon: <Nametag />,
                  meta: "Student",
                  value: data?.total_student ?? 0,
                }}
              />
              <Feature
                data={{
                  icon: <Module />,
                  meta: "Module",
                  value: data?.total_videos ?? 0,
                }}
              />
              <Feature
                data={{
                  icon: <Certificate />,
                  meta: "Certificate",
                  value:
                    data?.certificate === 1 ? "Tersedia" : "Tidak Tersedia",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={300}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price bg-white w-full z-50 left-0 py-3">
              <div className="w-3/4 mx-auto">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-600">Nama Kelas</h2>
                    <h3 className="text-2xl text-gray-900">
                      {data?.name ?? "nama kelas"}
                    </h3>
                  </div>
                  <h5 className="text-2xl text-secondary whitespace-nowrap mr-4">
                    {data?.type === "free" ? (
                      "Free"
                    ) : (
                      <span>Rp {formatThousand(data?.price ?? 0)}</span>
                    )}
                  </h5>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-red-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-nowrap"
                  >
                    {data?.type === "free" ? "Enroll Now" : "Buy Now"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </section>
      <div className="w-3/4 mx-auto mt-8">
        <div className="w-3/4">
          <section>
            <h6 className="font-medium text-gray-900 text-2xl mb-">
              About <span className="text-secondary">Courses</span>
            </h6>
            <p className="text-gray-600 text-lg leading-relaxed mb-3 mt-3 ">
              {data?.description ?? "no description found"}
            </p>
          </section>

          <section className="mt-10">
            <h6 className="font-medium text-gray-900 text-2xl mb-">
              Course <span className="text-secondary">Photos</span>
            </h6>
            <div className="flex justify-start items-center -mx-4 mt-6">
              {data?.images?.length > 0 ? (
                data?.images?.map((photo, index) => (
                  <CoursePhoto data={photo.image} key={index}></CoursePhoto>
                ))
              ) : (
                <div className="w-full text-center py-12">no photo found</div>
              )}
            </div>
          </section>
        </div>

        <section className="mt-10">
          <h6 className="font-medium text-gray-900 text-2xl mb-4">
            You Will <span className="text-secondary">Learn</span>
          </h6>
          {data?.chapters?.length > 0 ? (
            <RenderPreview previews={data.chapters}></RenderPreview>
          ) : (
            <div className="w-full text-center py-12">No Chapter Found</div>
          )}
        </section>

        <section className="mt-10 w-full md:w-2/3">
          <h6 className="font-medium text-gray-900 text-2xl mb-4">
            Our <span className="text-secondary">Instructor</span>
          </h6>
          <div className="flex items-center">
            <img
              src={data?.mentor?.profile ?? ""}
              alt={data?.mentor?.name}
              className="w-20 h-20 rounded-full overflow-hidden object-cover"
            />
            <div className="ml-4">
              <h2 className="text-lg text-gray-900">
                {data?.mentor?.name ?? "Mentor's name"}
              </h2>
              <h3 className="text-sm text-gray-60">
                {data?.mentor?.profession}
              </h3>
            </div>
          </div>
        </section>

        <section className="mt-10 w-full md:w-6/12">
          <h6 className="font-medium text-gray-900 text-2xl mb-4">
            Happy <span className="text-secondary">Students</span>
          </h6>
          {data.reviews?.map?.((testimonial, index) => {
            return <HappyStudent key={index} data={testimonial}></HappyStudent>;
          })}
        </section>
      </div>


      <section className="mt-24 bg-primary py-12" ref={footer}>
        <Footer></Footer>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const data = await courses.details(id);

    return { props: { data } };
  } catch (error) {
    return {
      props: {},
    };
  }
}
