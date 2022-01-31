import AddProductImage from "../../components/AddProduct/AddProductImage";
import AddProductInput from "../../components/AddProduct/AddProductInput";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/layout";

function addProduct() {
  const [inputs, setInputs] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(inputs);

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Layout title={"Add Product"}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />

          {/* <!-- account content --> */}
          <main className="col-span-9 px-5 md:px-8 py-6 space-y-6">
            {/* content Main */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 space-y-5  md:grid-cols-2 md:space-x-5"
            >
              <AddProductInput setInputs={setInputs} inputs={inputs} />
              <AddProductImage />
            </form>
          </main>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </div>
  );
}

export default addProduct;