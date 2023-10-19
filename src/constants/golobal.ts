import { useFaqsQuery } from "@/redux/api/faqsApi";

// const { data, error, isLoading } = useFaqsQuery({});
// const faq = data?.data;
// const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
//   panelStyle
// ) => [
//   {
//     key: "1",
//     label: "This is panel header 1",
//     children: "{ text }",
//     style: panelStyle,
//   },
// ];

export const role = ["admin", "user"];
export const roleOptions = role.map((role: string) => {
  return {
    label: role,
    value: role,
  };
});
export const status = ["pending", "accepted", "rejected"];
export const statusOptions = status.map((role: string) => {
  return {
    label: role,
    value: role,
  };
});

export const rating = [
  {
    label: "5 Star",
    value: "5",
  },
  {
    label: "4 Star",
    value: "4",
  },
  {
    label: "3 Star",
    value: "3",
  },
  {
    label: "2 Star",
    value: "2",
  },
  {
    label: "1 Star",
    value: "1",
  },
];
export const ratingOptions = rating.map(
  (rating: { label: string; value: string }) => {
    return {
      label: rating?.label,
      value: rating?.value,
    };
  }
);

export const location = [
  "Mirpur",
  "Uttara",
  "Gulshan",
  "Banani",
  "Dhanmondi",
  "Mohammadpur",
  "Motijheel",
  "Khilgaon",
  "Shyamoli",
  "Farmgate",
  "Mohakhali",
  "Tejgaon",
  "Rampura",
  "Badda",
  "Malibagh",
  "Jatrabari",
  "Demra",
  "Kadamtali",
  "Keraniganj",
];

export const locationOption = location.map((location: string) => {
  return {
    label: location,
    value: location,
  };
});

export const timeSlots = [
  {
    slot: "09:00 AM - 10:00 AM",
    startTime: "09:00",
    endTime: "10:00",
    status: "active",
  },
  {
    slot: "10:00 AM - 11:00 AM",
    startTime: "10:00",
    endTime: "11:00",
    status: "active",
  },
  {
    slot: "11:00 AM - 12:00 PM",
    startTime: "11:00",
    endTime: "12:00",
    status: "active",
  },
  {
    slot: "12:00 PM - 01:00 PM",
    startTime: "12:00",
    endTime: "13:00",
    status: "active",
  },
  {
    slot: "02:00 PM - 03:00 PM",
    startTime: "13:00",
    endTime: "14:00",
    status: "active",
  },
  {
    slot: "03:00 PM - 04:00 PM",
    startTime: "14:00",
    endTime: "15:00",
    status: "active",
  },
  {
    slot: "04:00 PM - 05:00 PM",
    startTime: "15:00",
    endTime: "16:00",
    status: "active",
  },
  {
    slot: "05:00 PM - 06:00 PM",
    startTime: "16:00",
    endTime: "17:00",
    status: "active",
  },
  {
    slot: "06:00 PM - 07:00 PM",
    startTime: "17:00",
    endTime: "18:00",
    status: "active",
  },
  {
    slot: "07:00 PM - 08:00 PM",
    startTime: "18:00",
    endTime: "19:00",
    status: "active",
  },
];
