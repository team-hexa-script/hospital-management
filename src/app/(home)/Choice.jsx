import Image from "next/image";
import React from "react";
import img from "@/assets/images.jpg";

const Choice = () => {
  return (
    <div className="mx-auto container mt-7">
      <div>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-2">
          Why Choose our clinic
        </h2>
        <div className="md:flex">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="ml-20">
              <h2 className="text-lg font-semibold">
                Online Services: <br />
              </h2>
              <span>
                We offer online appointment booking access <br /> to medical
                records, underscore the <br /> convenience of digital services
              </span>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Quick Appointments: <br />
              </h2>
              <span>
                {" "}
                Our clinic offer prompt appointment scheduling <br /> and
                minimal wait times, emphasize the convenience of <br /> getting
                medical attention when needed.
              </span>{" "}
            </div>
            <div className="ml-20">
              <h2 className="text-lg font-semibold">
                Emergency Services: <br />
              </h2>
              <span>
                Our clinic provide emergency medical services, <br /> highlight
                the reassurance patients feel knowing <br /> they can rely on
                our clinic in critical situations.
              </span>{" "}
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Expertise and Qualified Staff: <br />
              </h2>
              <span>
                Emphasize the qualifications and experience <br /> of our
                medical professionals. Highlight the credentials, <br />{" "}
                specialties, and track record of <br /> the doctors, nurses, and
                specialists at your clinic.
              </span>{" "}
            </div>
          </div>

          <div className="mx-auto w-60 h-60">
            <Image
              src={img}
              alt="Clinic Image"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
