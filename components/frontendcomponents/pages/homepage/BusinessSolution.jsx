import BusinessCol from "@/components/frontendcomponents/molecules/BusinessCol";
import Image from "next/image";
import Link from "next/link";

export default function BusinessSolution({ data }) {
  if (!data) return null;
  return (
    <section>
      <div className="business_sol_sec sec-pad-all">
        <div className="container-fluid">
          <div className="heading">
            <h2 className="primary">{data.heading}</h2>
            <p>{data.subheading}</p>
          </div>
          <div className="main_wrapper">
            {data.businessData.map((item) => (
              <BusinessCol
                linkHref={item.linkHref}
                mediaSrc={item.mediaSrc}
                title={item.title}
                desc={item.desc}
                count={item.count}
                key={item.id}
              />
              // <Link
              //   className="business_col item-md"
              //   href={item.linkHref}
              //   key={item.id}
              // >
              //   <figure>
              //     <Image
              //       width={628}
              //       height={428}
              //       src={item.mediaSrc}
              //       alt={item.title}
              //     ></Image>
              //   </figure>
              //   <figcaption>
              //     <div className="content">
              //       <h6>{item.title}</h6>
              //       <p>{item.desc}</p>
              //     </div>
              //     <button type="button" className="more">
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         width={16}
              //         height={16}
              //         viewBox="0 0 1024 1024"
              //       >
              //         <path
              //           fill="currentColor"
              //           d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"
              //         ></path>
              //         <path
              //           fill="currentColor"
              //           d="M777.3 201.3a32 32 0 0 1 45.4 45.4l-544 544a32 32 0 0 1-45.4-45.4z"
              //         ></path>
              //       </svg>
              //     </button>
              //   </figcaption>
              //   <p className="count">{item.count}</p>
              // </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
