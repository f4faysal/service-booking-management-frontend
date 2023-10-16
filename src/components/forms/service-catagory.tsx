import { useCategoriesQuery } from "@/redux/api/categorieApi";
import { Select } from "antd";

type ServiceCategoreProps = {
  name?: string;
  label?: string;
  setCategoryId: (value: string) => void;
  categoryId?: string;
};

const ServiceCategoreField = ({
  name,
  label,
  setCategoryId,
  categoryId,
}: ServiceCategoreProps) => {
  const { data, isLoading } = useCategoriesQuery({});

  const categories = data?.data;
  //@ts-ignore
  const categoriesOptions = categories?.map((categorie) => {
    return {
      label: categorie?.title,
      value: categorie?.id,
    };
  });

  return (
    <Select
      loading={isLoading}
      size="large"
      placeholder="Select Catagory"
      style={{
        width: "300px",
        height: "50px",
      }}
      allowClear
      options={categoriesOptions}
      onChange={(value) => setCategoryId(value)}
    />
  );
};

export default ServiceCategoreField;
