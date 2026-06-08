import Image from "next/image";
import Link from "next/link";
import "@/uploads/styles/component/component.css";

export default function BusinessCol({
  linkHref,
  mediaSrc,
  title,
  desc,
  count,
}) {
  return (
    <Link className="business_col item-md" href={linkHref}>
      <figure>
        <Image width={628} height={428} src={mediaSrc} alt={title}></Image>
      </figure>
      <figcaption>
        <div className="content">
          <h6>{title}</h6>
          <p>{desc}</p>
        </div>
        <button type="button" className="more">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"
            ></path>
            <path
              fill="currentColor"
              d="M777.3 201.3a32 32 0 0 1 45.4 45.4l-544 544a32 32 0 0 1-45.4-45.4z"
            ></path>
          </svg>
        </button>
      </figcaption>
      <p className="count">{count}</p>
    </Link>
  );
}
