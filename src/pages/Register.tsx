import Form from "../components/Form";
import { images } from "../constants";

export default function Register() {
  return (
    <div className="">

      {/* Section */}
      <section className="flex items-center lg:flex-row h-full px-8 lg:px-[140px] py-8 lg:py-[54px] lg:gap-x-36 gap-y-8 lg:gap-y-0 flex-1">
        <img
          src={images.OfficePic}
          alt="Office workspace"
          className="w-full max-h-[844px] sm:w-[375px] lg:w-[410px] sm:h-[500px] lg:h-[600px]"
        />

        <Form />

        <img
          src={images.GreenBlur}
          alt=""
          className="absolute -bottom-4 -left-4 blur-xl"
        />
        <img
          src={images.BlueBlur}
          alt=""
          className="absolute top-0 -right-2 blur-xl"
        />
      </section>
    </div>
  );
}
