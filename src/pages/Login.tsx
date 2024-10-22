import Form from "../components/Form";
import Header from "../components/Header";
import { images } from "../constants";

export default function Login() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Header />

      {/* Section */}
      <section className="flex items-center lg:flex-row h-full px-8 lg:px-[140px] py-8 lg:py-[54px] lg:gap-x-36 gap-y-8 lg:gap-y-0 flex-1">
        <img
          src={images.OfficePic}
          alt="Office workspace"
          className="w-full max-h-[844px] object-contain lg:w-[400px] lg:h-[600px]"
        />

        <Form />
      </section>
    </div>
  );
}
