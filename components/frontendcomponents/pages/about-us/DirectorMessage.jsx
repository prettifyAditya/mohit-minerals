import Image from "next/image";
import Link from "next/link";

export default function DirectorMessage() {
  return (
    <div className="director_sec sec-pad-all">
      <div className="container">
        <div className="main_wrapper flex">
          <figcaption>
            <h2>CMD Corner</h2>
            <div className="icon">
              <Image
                src="/assets/icon/quote.svg"
                width={94}
                height={94}
                alt="Quote Icon"
              ></Image>
            </div>
            <div className="desc">
              <p>
                A business achieves true success when its growth creates
                meaningful impact in the lives of its people, partners, and
                communities.
              </p>
            </div>
            <div className="bottom_wrap">
              <div className="details">
                <h6>CB Bajaj</h6>
                <p>Chairman & Managing Director</p>
              </div>
              <Link href="" className="linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0076b2"
                    d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
                  ></path>
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>
              </Link>
            </div>
          </figcaption>
          <figure>
            <Image
              src="/assets/images/about-us/director_img.png"
              width={481}
              height={481}
              alt="Director's Image"
            ></Image>
          </figure>
        </div>
      </div>
    </div>
  );
}
