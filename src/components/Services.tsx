"use client";

import {
  useDeleteServicesMutation,
  useServicessQuery,
} from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { ReloadOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import ServiceCategoreField from "./forms/service-catagory";
import Subscribe from "./ui/Subscribe";

const ServicesItem = () => {
  const [deleteServices] = useDeleteServicesMutation();
  const query: Record<string, any> = {};

  const [sige, setSige] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");

  query["page"] = page;
  query["limit"] = sige;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["search"] = searchTerm;
  query["categoryId"] = categoryId;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["search"] = debouncedTerm;
  }
  console.log(categoryId);
  const { data, isLoading, refetch } = useServicessQuery({ ...query });

  const services = data?.services;
  console.log(services);
  const meta = data?.meta;

  //   const deleteHandler = async (id: { id: string }) => {
  //     message.loading("Service department...");
  //     try {
  //       const res = await deleteServices(id).unwrap();
  //       if (res?.success) {
  //         message.success("Service deleted successfully");
  //       }
  //     } catch (err: any) {
  //       message.error(err.message);
  //     }
  //   };

  const handleChange = (value: string) => {
    setCategoryId(value);
    console.log(value);
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSige(pageSize);
  };
  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    // console.log(pagination, "pagination");
    // console.log(filters, "filters");
    // console.log(field, "field" + " " + order, "order");

    const { field, order } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setCategoryId("");
  };

  return (
    <>
      <h1>All Service list</h1>

      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#16162e",
          margin: "20px 0",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          All Service list
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            gap: "10px",
            alignItems: "center",
            width: "70%",
            height: "90px",
            backgroundColor: "#fff",
            boxShadow: "10px 10px 10px 10px #0000001a",
            borderRadius: "10px",
            position: "absolute",
            top: "70%",
          }}
        >
          <p
            style={{
              marginLeft: "10px",
            }}
          >
            Search
          </p>
          <Input
            type="text"
            size="large"
            placeholder="Search ..."
            value={searchTerm}
            style={{
              width: "300px",
              height: "50px",
              marginLeft: "20px",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />

          <p
            style={{
              marginLeft: "20px",
            }}
          >
            Category
          </p>
          <ServiceCategoreField
            setCategoryId={setCategoryId}
            categoryId={categoryId}
          />
          {(!!sortBy || !!sortOrder || searchTerm || categoryId) && (
            <Button
              onClick={resetFilter}
              style={{
                margin: "0 5px",
              }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </div>

      <Row
        style={{
          marginTop: "70px",
          padding: "20px 0",
        }}
      >
        {services?.map((service: any, i: any) => {
          return (
            <Col span={4} order={i} key={i}>
              <Card
                cover={
                  <Avatar
                    style={{
                      padding: "10px",
                    }}
                    size={200}
                    src={service?.imageLink}
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
                  title={service?.title}
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

export default ServicesItem;
