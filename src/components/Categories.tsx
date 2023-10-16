"use client";

import { useCategoriesQuery } from "@/redux/api/categorieApi";
import { Avatar, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Subscribe from "./ui/Subscribe";

const CategoriesOption = () => {
  const { data, isLoading } = useCategoriesQuery({});

  const categories = data?.data;
  console.log(categories);

  return (
    <>
      <Row
        style={{
          padding: "20px 0",
        }}
      >
        {categories?.map((category: any, i: any) => {
          return (
            <Col span={4} order={i} key={i}>
              <Card
                cover={
                  <Avatar
                    style={{
                      padding: "10px",
                    }}
                    size={200}
                    src={category?.imageLink}
                  />
                }
                hoverable
                style={{ width: 200 }}
                loading={isLoading}
              >
                <Meta
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                  }}
                  title={category?.title}
                />
              </Card>
            </Col>
          );
        })}
      </Row>

      <Subscribe />
    </>
  );
};

export default CategoriesOption;
