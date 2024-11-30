import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function BookCall() {
  let navigate = useNavigate();

  function handleCallRequest(e) {
    e.preventDefault();
    toast.success(
      <div className="font-bold text-success-primary-500">
        Thank you, your call is booked. One of our counselor will call you back
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );

    setTimeout(() => {
      toast.info("Navigating you to homepage", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }, 2000);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  }
  return (
    <section className="relative bg-[url(https://i.ibb.co.com/yPDmtQT/coachBg.jpg)] bg-cover bg-top bg-no-repeat">
      <Helmet>
        <title>Book a call - Success Blueprint</title>
      </Helmet>
      <div className="absolute inset-0 bg-black sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                Advance your career
                <strong className="block font-extrabold text-success-primary-600">
                  with us
                </strong>
              </h1>
            </div>

            <form
              onSubmit={handleCallRequest}
              action="#"
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>

                <div className="relative">
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter your phone no."
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  How can we help you?
                </label>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="How can we help? write here please ....."
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Request callback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCall;
