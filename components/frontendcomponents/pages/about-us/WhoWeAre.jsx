import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section>
      <div className="who_we_are sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="image_wrapper">
              <figure>
                <Image
                  src="/assets/images/about-us/who1.jpg"
                  width={270}
                  height={220}
                  alt="About Us Image"
                ></Image>
              </figure>
              <figure>
                <Image
                  src="/assets/images/about-us/who2.jpg"
                  width={270}
                  height={220}
                  alt="About Us Image"
                ></Image>
              </figure>
              <figure>
                <Image
                  src="/assets/images/about-us/who3.jpg"
                  width={270}
                  height={220}
                  alt="About Us Image"
                ></Image>
              </figure>
              <figure>
                <Image
                  src="/assets/images/about-us/who4.jpg"
                  width={270}
                  height={220}
                  alt="About Us Image"
                ></Image>
              </figure>
              <div className="logo_icon">
                <Image
                  src="/assets/logo-vector.svg"
                  width={94}
                  height={94}
                  alt="Logo Icon"
                ></Image>
              </div>
            </div>
            <div className="content_wrapper">
              <h2>Who We Are</h2>
              <div className="desc">
                <p>
                  <strong>Mohit Minerals Limited (MML)</strong> contributes
                  significantly to the energy needs of the Nation, by being the
                  bridge between producers of the commodities and the users of
                  the commodities. We continue to strengthen our position in the
                  sector and are amongst the top 3 Indian coal importers,
                  focusing on the supply of high-quality coal.
                </p>
                <p>
                  Led by <strong>Mr. Chander Bhushan Bajaj,</strong> the company
                  started the business 3 decades back. Further substantial
                  growth has been achieved under the leadership of
                  <strong> Mr. Mohit Bajaj</strong> Now MML is recognized and
                  acknowledged as a leading player in coal trading and inland
                  logistics. While focusing on our customers, we enjoy a strong
                  rapport with our stakeholders i.e. Coal Miners, Shippers, Port
                  Authorities, Custom Authorities, Railways and End users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
