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

export const timeSlot = [
  {
    slot: "09:00 AM - 10:00 AM",
    status: "active",
  },
  {
    slot: "10:00 AM - 11:00 AM",
    status: "active",
  },
  {
    slot: "11:00 AM - 12:00 PM",
    status: "active",
  },
  {
    slot: "12:00 PM - 01:00 PM",
    status: "active",
  },
  {
    slot: "02:00 PM - 03:00 PM",
    status: "active",
  },
  {
    slot: "03:00 PM - 04:00 PM",
    status: "active",
  },
  {
    slot: "04:00 PM - 05:00 PM",
    status: "active",
  },
  {
    slot: "05:00 PM - 06:00 PM",
    status: "active",
  },
  {
    slot: "06:00 PM - 07:00 PM",
    status: "active",
  },
  {
    slot: "07:00 PM - 08:00 PM",
    status: "active",
  },
  {
    slot: "08:00 PM - 09:00 PM",
    status: "active",
  },
];
