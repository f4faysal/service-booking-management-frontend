"use client";

import { HomeOutlined } from "@ant-design/icons";
import { Col, Rate, Row } from "antd";
import Image from "next/image";
import CustomerReview from "./ui/CustomerReview";
import RelatedServices from "./ui/RelatedServices";

const DeatilsBody = ({ service }: any) => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              height: "350px",
            }}
          >
            <div
              style={{
                width: "40%",
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                src={service?.imageLink}
                width={400}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div
              style={{
                width: "60%",
                height: "15rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",

                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      backgroundColor: "yellowGreen",
                      color: "white",
                      fontSize: "20px",
                      padding: "5px",
                      width: "fit-content",
                      borderRadius: "5px",
                    }}
                  >
                    {service?.category?.title}
                  </p>
                </div>

                <div>
                  <h1
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    {service?.title}
                  </h1>
                  <p
                    style={{
                      //   backgroundColor: "skyBlue",
                      color: "black",
                      padding: "5px",
                      width: "fit-content",
                      borderRadius: "5px",
                    }}
                  >
                    <HomeOutlined
                      style={{
                        marginRight: "5px",
                      }}
                    />
                    Service Point {service?.location}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        2.5
                      </p>
                      <Rate
                        style={{
                          fontSize: "14px",
                        }}
                        allowHalf
                        defaultValue={2.5}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "gray",
                        marginTop: "5px",
                      }}
                    >{`(${1} Reviews)`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            padding: "1rem",
          }}
          span={18}
        >
          {/* Descripition */}
          <div>
            <h1
              style={{
                fontSize: "2rem",
                color: "yellowGreen",
                marginBottom: "1rem",
              }}
            >
              Service Description
            </h1>
            <hr
              style={{
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontSize: "1.2rem",
              }}
            >
              {service?.description.substring(0, 386)}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                margin: "1rem 0",
              }}
            >
              {service?.description.substring(386, 814)}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
              }}
            >
              {service?.description.substring(814)}
            </p>
          </div>
          {/* Related Services */}

          <div
            style={{
              margin: "2rem 0",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                color: "yellowGreen",
                marginBottom: "1rem",
              }}
            >
              Related Services
            </h1>
            <hr
              style={{
                marginBottom: "1rem",
              }}
            />
            <RelatedServices service={service} />
          </div>

          {/* Customer Review */}

          <div>
            <h1
              style={{
                fontSize: "2rem",
                color: "yellowGreen",
                marginBottom: "1rem",
              }}
            >
              Customer Review
            </h1>
            <hr
              style={{
                marginBottom: "1rem",
              }}
            />
            <CustomerReview service={service} />
          </div>
        </Col>
        <Col span={6}>
          <div>
            <h2>Price {service?.price} TK</h2>
            <p
              style={{
                fontSize: "16px",
                color: "yellowGreen",
                marginTop: "5px",
              }}
            >
              inclusive of all taxes {service?.tax}%
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DeatilsBody;
