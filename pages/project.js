import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Project() {
  return (
    <>
      <Layout breadcrumbTitle="Projects">
        <section className="inner-project-area pt-115 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">Our Projects</span>
                  <h2 className="title">Our Latest Projects</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href="/project-details">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/new1.PNG"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>Product Design</span>
                    <h2 className="title">
                      <Link href="/project-details">Web Application</Link>
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href="/project-details">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/new2.PNG"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>Product Design</span>
                    <h2 className="title">
                      <Link href="/project-details">Web Application</Link>
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href="/project-details">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/new3.PNG"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>Product Design</span>
                    <h2 className="title">
                      <Link href="/project-details">Web Application</Link>
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href="/project-details">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/new4.PNG"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>Product Design</span>
                    <h2 className="title">
                      <Link href="/project-details">Web Application</Link>
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href="/project-details">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/new5.PNG"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>Product Design</span>
                    <h2 className="title">
                      <Link href="/project-details">Web Application</Link>
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="project-item-two">
                  <div className="project-thumb-two">
                    <Link href="/project-details">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/new6.PNG"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="project-content-two">
                    <span>Product Design</span>
                    <h2 className="title">
                      <Link href="/project-details">Web Application</Link>
                    </h2>
                    <Link href="/project-details" className="link-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
