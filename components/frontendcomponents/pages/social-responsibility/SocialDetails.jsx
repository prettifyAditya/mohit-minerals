import Image from "next/image";

export default function SocialDetails({ data }) {
  if (!data) return null;
  console.log(data);

  return (
    <section>
      {data.map((item) => (
        <div className="social_details_wrap sec-pad-all" key={item.id}>
          <div className="container">
            <div className="main_wrapper flex">
              <figure>
                <Image
                  src={item.mediaSrc}
                  width={451}
                  height={332}
                  alt="Social Image"
                ></Image>
              </figure>
              <figcaption>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </figcaption>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
