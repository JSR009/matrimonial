"use client";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "11000",
      features: [
        "Basic Search Filters",
        "Limited Customer Support",
        "Profile Boosting (Limited)",
      ],
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      validity: "1 year"
    },
    {
      name: "Pro",
      price: "21000",
      features: [
        "Advanced Search Filters",
        "24/7 Customer Support",
        "Unlimited Profile Boosting",
        "Matchmaking Consultation",
      ],
      buttonColor: "bg-green-500 hover:bg-green-600",
      validity: '3 year'
    },
    {
      name: "Pro Max",
      price: "31000",
      features: [
        "All Pro Features",
        "Priority Support",
        "Dedicated Matchmaker",
        "Exclusive Profile Boosting",
        "VIP Profile Badge",
      ],
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      validity: 'Lifetime'
    },
  ];

  return (
    <>
      {/* ===== Pricing Section Start ===== */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-gray-100">
        {/* Pricing Cards */}
        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex flex-wrap justify-center gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="animate_top group relative flex flex-col items-center rounded-lg border border-stroke bg-white p-8 shadow-lg hover:shadow-xl transition duration-300 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[30%] xl:p-10 min-h-[450px]"
              >
                <h3 className="text-3xl font-bold text-gray-700 dark:text-white mb-4">
                  {plan.name}
                </h3>
                <p className="text-5xl font-extrabold text-black-700 dark:text-white">
                  {plan.price}
                </p>
                <span className="text-lg font-normal text-gray-500 mb-6">/For {plan.validity}</span>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300"
                    >
                      <FaCheckCircle className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  aria-label={`Choose ${plan.name} Plan`}
                  className={`mt-auto w-full rounded-lg py-3 text-white ${plan.buttonColor} transition duration-300`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== Pricing Section End ===== */}
    </>
  );
};

export default Pricing;
