<<<<<<< HEAD
import Breadcrum from "../components/commonComponents/Breadcrum";
=======
>>>>>>> 5abb0e4 (alhamdulilah my word done)
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
<<<<<<< HEAD
import WishListSidebar from "../components/WishListPage/WishListSidebar";

function PaymentMethods() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrum title={"MY ACCOUNT"} />
=======
import Breadcrum from "../components/commonComponents/Breadcrum";
import WishListSidebar from "../components/WishListPage/WishListSidebar";
import AccuntSingleCard from "../components/Account/AccuntSingleCard";
import SinglePaymentCard from "../components/PaymentMethod/SinglePaymentCard/SinglePaymentCard";

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
      <Header />
      <Navbar />
      <Breadcrum title={"Payment Methods"} />
>>>>>>> 5abb0e4 (alhamdulilah my word done)
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        {/* <!-- account content --> */}
<<<<<<< HEAD
        <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
          {/* <!-- single card --> */}
            <h1>this is PaymentMethods </h1>
=======
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
>>>>>>> 5abb0e4 (alhamdulilah my word done)
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
<<<<<<< HEAD
    </>
  );
}

export default PaymentMethods;
=======
    </div>
  );
}

export default PaymentMethod;
>>>>>>> 5abb0e4 (alhamdulilah my word done)
