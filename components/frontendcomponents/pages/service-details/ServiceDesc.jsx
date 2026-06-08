import Image from "next/image";

export default function ServiceDesc() {
  return (
    <section>
      <div className="service_details_sec sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <figure>
              <Image
                src="/assets/images/home/solution1.jpg"
                width={451}
                height={385}
                alt="Service Image"
              ></Image>
            </figure>
            <figcaption>
              <div className="website-content">
                <h4>Powering Industries with Reliable Energy Solutions</h4>
                <p>
                  At the core of modern industrial growth lies a dependable fuel
                  source. We specialize in the sourcing, supply, and
                  distribution of premium-grade coal and coke for diverse
                  industrial applications. With a strong focus on quality,
                  consistency, and timely delivery, we help industries maintain
                  operational efficiency and sustainable productivity.
                </p>
                <p>
                  From steel manufacturing and power generation to cement and
                  infrastructure sectors, our solutions are tailored to meet
                  evolving energy and processing demands with precision and
                  reliability.
                </p>
              </div>
              <div className="specifications_wrap">
                <h4>Our Coal & Coke Solutions</h4>
                <ul>
                  <li>
                    <h6>Thermal Coal</h6>
                    <p>
                      High-calorific thermal coal designed for efficient energy
                      generation in power plants, boilers, and industrial
                      heating applications.
                    </p>
                  </li>
                  <li>
                    <h6>Metallurgical Coal</h6>
                    <p>
                      Premium-quality coking coal used in steel manufacturing
                      processes, ensuring superior strength and production
                      performance.
                    </p>
                  </li>
                  <li>
                    <h6>Petroleum Coke</h6>
                    <p>
                      A carbon-rich fuel offering high energy output, widely
                      used in cement, lime, and industrial furnace operations.
                    </p>
                  </li>
                  <li>
                    <h6>Industrial Coke</h6>
                    <p>
                      Low-ash and high-carbon coke suitable for foundries,
                      ferroalloy plants, and metallurgical industries.
                    </p>
                  </li>
                </ul>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
