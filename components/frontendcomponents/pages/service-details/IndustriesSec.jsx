import Image from "next/image";

export default function IndustriesSec({ data }) {
  if (!data) return null;
  return (
    <div className="industry_sec sec-pad-all">
      <div className="container">
        <div className="heading">
          <h2>Industries We Serve</h2>
        </div>
        <div className="main_wrapper">
          {data.map((item) => (
            <div className="industry_col" key={item.id}>
              <div className="icon">
                <Image
                  src={item.icon}
                  width={70}
                  height={70}
                  alt="Industry Icon"
                ></Image>
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
