import Image from "next/image";

export default function MediaListing({ data }) {
  if (!data) return null;
  return (
    <div className="media_sec sec-pad-all">
      <div className="container">
        <div className="main_wrapper">
          {data.map((item) => (
            <div className="media_col" key={item.id}>
              <Image
                src={item.mediaSrc}
                width={414}
                height={333}
                alt="Media Image"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
