import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import AccuntSingleCard from "../../components/Account/AccuntSingleCard";
import SinglePaymentCard from "../../components/PaymentMethod/SinglePaymentCard/SinglePaymentCard";
import Layout from "../../components/layout";
import withAuth from "../../lib/withAuth";

// https://i.ibb.co/WzDxXQY/visa.png
// https://i.ibb.co/D8M3MPP/a-express.png

const orderHistory = [
  {
    id: 1,
    image: "https://i.ibb.co/WzDxXQY/visa.png",
    method: "American Express",
    defaultValue: true,
    lastFour: "0022",
    expires: "01/22",
  },
  {
    id: 2,
    image: "https://i.ibb.co/D8M3MPP/a-express.png",
    method: "Visa Card",
    defaultValue: false,
    lastFour: "0022",
    expires: "01/22",
  },
];

function PaymentMethod() {
  return (
    <div>
      <Layout title={"Payment Methods"}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />

          {/* <!-- account content --> */}
          <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
            {/* <!-- single card --> */}
            {orderHistory?.map(
              ({ id, image, method, defaultValue, lastFour, expires }) => (
                <SinglePaymentCard
                  key={id}
                  id={id}
                  image={image}
                  method={method}
                  defaultValue={defaultValue}
                  lastFour={lastFour}
                  expires={expires}
                />
              )
            )}
            {/* <!-- single card end --> */}
          </div>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </div>
  );
}

export default withAuth(PaymentMethod);
