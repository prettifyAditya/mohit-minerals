import Image from "next/image";
export default function InsightsSec({ data }) {
  if (!data) return null;
  return (
    <section>
      <div className="insights_sec sec-pad-all">
        <div className="container">
          <div className="main_wrapper">
            <figure>
              <Image
                src="/assets/logo-vector.svg"
                width={100}
                height={100}
                alt="service_vector1"
              ></Image>
            </figure>
            <figcaption>
              <div className="insights_wrap">
                {data.map((data) => (
                  <div className="insights_col" key={data.id}>
                    <h5 dangerouslySetInnerHTML={{ __html: data.title }}></h5>
                    <p>{data.desc}</p>
                  </div>
                ))}
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
