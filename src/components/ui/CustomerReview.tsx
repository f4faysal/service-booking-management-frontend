"use client";
import { Button, Col, Progress, Row, Statistic, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/forms/form";
import { ratingOptions } from "@/constants/golobal";

import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { LikeOutlined } from "@ant-design/icons";
import FormTextArea from "../forms/FormTextArea.tsx";
import FormSelectField from "../forms/formSelectField";

type FormValues = {
  id: string;
  password: string;
};

const CustomerReview = ({ service }: any) => {
  const [createReview] = useCreateReviewMutation();

  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await createReview({
        serviceId: service?.id,
        ...data,
      }).unwrap();

      if (res?.success) {
        message.success("Review posted successfully.");
      } else {
        message.error("User has not booked this service.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Row
        gutter={24}
        style={{
          display: "flex",
          backgroundColor: "#f5f5f6",
          justifyContent: "centers",
          alignItems: "center",
          padding: "0 50px ",
          flexDirection: "row",
          borderRadius: "10px",

          height: "200px",
        }}
      >
        <Col span={12}>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          {/* <Statistic title="Unmerged" value={93} suffix="/ 100" /> */}
          {/* <Progress percent={50} steps={25} /> */}
          <Progress percent={50} status="active" />
          <Progress percent={30} status="active" />
          <Progress percent={20} status="active" />
        </Col>
      </Row>
      <Form submitHandler={onSubmit}>
        <Row
          gutter={24}
          style={{
            backgroundColor: "#f5f5f6",
            padding: " 10px",
            marginTop: "1rem",
            borderRadius: "10px",
          }}
        >
          <Col span={24}>
            <FormSelectField
              name="rating"
              options={ratingOptions}
              placeholder="Seclit rating"
            />
          </Col>
        </Row>
        <Row
          gutter={24}
          style={{
            backgroundColor: "#f5f5f6",
            padding: " 10px",
            marginTop: "1rem",
            borderRadius: "10px",
          }}
        >
          <Col span={24}>
            <FormTextArea
              style={{ height: 150, marginBottom: 24 }}
              name="review"
              placeholder="Seclit rating"
            />
          </Col>
        </Row>
        <Button
          style={{
            marginTop: "1rem",
            width: "20%",
          }}
          type="primary"
          htmlType="submit"
        >
          Post Review
        </Button>
      </Form>
    </div>
  );
};

export default CustomerReview;
