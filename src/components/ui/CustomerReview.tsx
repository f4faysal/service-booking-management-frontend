import { ratingOptions } from "@/constants/golobal";
import { LikeOutlined } from "@ant-design/icons";
import { Col, Progress, Row, Statistic } from "antd";
import { SubmitHandler } from "react-hook-form";
import FormTextArea from "../forms/FormTextArea.tsx";
import Form from "../forms/form";
import FormSelectField from "../forms/formSelectField";

type FormValues = {
  review: string;
  rating: string;
};

const CustomerReview = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      //   const res = await userLogin({ ...data }).unwrap();
      //   // // const { accessToken } = res.data;
      //   if (res?.accessToken) {
      //     router.push("/");
      //     message.success("User Login Success");
      //   }
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
            <FormTextArea name="rating" placeholder="Seclit rating" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CustomerReview;
