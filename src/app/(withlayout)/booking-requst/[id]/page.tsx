import Booking from "@/components/BookingRequst";
import Container from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | Booking",
};

const BookingRequst = ({ params }: any) => {
  const id = params?.id;

  return (
    <div>
      <Container>
        <h1>Booking</h1>
        <Booking id={id} />
      </Container>
    </div>
  );
};

export default BookingRequst;
