import { ArrowRightIcon, HomeIcon } from "@heroicons/react/solid";
import Copyright from "../components/Copyright";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";

function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <Navbar />
      {/* main-Content */}
      <div className="py-4 container flex gap-3 items-center">
        <div
          onClick={() => router.push("/")}
          className="text-primary cursor-pointer text-base"
        >
          <i className="fas fa-home"></i>
        </div>
        <span className="text-sm text-gray-400">
          <i className="fas fa-chevron-right"></i>
        </span>
        Privacy And Policy
      </div>

      <main className="sm:max-w-[50rem] xl:max-w-[75rem] mx-auto px-5 md:px-8 py-6 space-y-6">
        <h1 className="text-center text-xl md:text-4xl font-semibold">
          Privacy Policy
        </h1>
        <div className="space-y-5 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
            accusamus aliquam architecto blanditiis commodi cumque deleniti
            eaque earum eius esse, eum exercitationem iusto, modi molestiae
            mollitia nisi quam quasi quia quis quod rem reprehenderit sed sit
            totam veritatis. Ab atque dicta earum excepturi facere fuga illum
            incidunt, iste labore magnam neque repellat vero voluptates. At
            consectetur corporis deleniti error ipsum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
            accusamus aliquam architecto blanditiis commodi cumque deleniti
            eaque earum eius esse, eum exercitationem iusto, modi molestiae
            mollitia nisi quam quasi quia quis quod rem reprehenderit sed sit
            totam veritatis.
          </p>
        </div>
        {/* middle */}

        <div className="pb-6 text-gray-700">
          <h3 className="text-black font-semibold pb-3">Prohibitions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ea
            illo minus perspiciatis quia ratione. Eum harum nobis possimus quo
            voluptate. A accusamus alias architecto blanditiis cupiditate
            debitis deserunt dolorum earum eligendi error esse eum fuga fugiat
            ipsa magni maxime neque nesciunt, nihil nostrum, possimus quaerat
            quas quibusdam quisquam quos repellat tenetur ut! Deleniti id,
            inventore ipsa modi nesciunt officiis repellendus! Harum labore
            officiis ratione totam velit? Consequatur, dolor libero.
          </p>
        </div>

        <div className="pb-6 text-gray-700">
          <h3 className="text-black font-semibold pb-3">Term of Sale</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ea
            illo minus perspiciatis quia ratione. Eum harum nobis possimus quo
            voluptate. A accusamus alias architecto blanditiis cupiditate
            debitis deserunt dolorum earum eligendi error esse eum fuga fugiat
            ipsa magni maxime neque nesciunt, nihil nostrum, possimus quaerat
            quas quibusdam quisquam quos repellat tenetur ut! Deleniti id,
            inventore ipsa modi nesciunt officiis repellendus! Harum labore
            officiis ratione totam velit? Consequatur, dolor libero.
          </p>
        </div>

        <div className="pb-6 text-gray-700">
          <h3 className="text-black font-semibold pb-3">
            Disclaimer of Liability
          </h3>
          <p>
            A accusamus alias architecto blanditiis cupiditate debitis deserunt
            dolorum earum eligendi error esse eum fuga fugiat ipsa magni maxime
            neque nesciunt, nihil nostrum, possimus quaerat quas quibusdam
            quisquam quos repellat tenetur ut! Deleniti id, inventore ipsa modi
            nesciunt officiis repellendus! Harum labore officiis ratione totam
            velit? Consequatur, dolor libero.
          </p>
        </div>

        <div className="pb-6 text-gray-700">
          <h3 className="text-black font-semibold pb-3">Complaints</h3>
          <p>
            Eum harum nobis possimus quo voluptate. A accusamus alias architecto
            blanditiis cupiditate debitis deserunt dolorum earum eligendi error
            esse eum fuga fugiat ipsa magni maxime neque nesciunt.
          </p>
        </div>
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default PrivacyPolicy;