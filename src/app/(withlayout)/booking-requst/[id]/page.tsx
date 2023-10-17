const BookingRequst = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default BookingRequst;
