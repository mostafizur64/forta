import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Container from "../../../components/Container/Container";

const FaqItem = () => {
  const faqs = [
    {
      question: "Is Forta a blockchain?",
      answer:
        "You can subscribe to alerts from specific bots or contracts using the Forta App subscriptions page. Once signed in with your wallet, you can setup notifications for alerts. Currently, the supported channels to receive notifications are email, Slack, Telegram, Discord and webhooks.",
    },
    {
      question: "How can I consume alerts from bots?",
      answer:
        "You can subscribe to alerts from specific bots or contracts using the Forta App subscriptions page. Once signed in with your wallet, you can setup notifications for alerts. Currently, the supported channels to receive notifications are email, Slack, Telegram, Discord and webhooks.",
    },
    {
      question: "How do I run a scan node?",
      answer:
        "You can subscribe to alerts from specific bots or contracts using the Forta App subscriptions page. Once signed in with your wallet, you can setup notifications for alerts. Currently, the supported channels to receive notifications are email, Slack, Telegram, Discord and webhooks.",
    },
    {
      question: "Do I need special hardware to run scan nodes?",
      answer:
        "You can subscribe to alerts from specific bots or contracts using the Forta App subscriptions page. Once signed in with your wallet, you can setup notifications for alerts. Currently, the supported channels to receive notifications are email, Slack, Telegram, Discord and webhooks.",
    },
    {
      question: "Can I scan other blockchains like BSC?",
      answer:
        "You can subscribe to alerts from specific bots or contracts using the Forta App subscriptions page. Once signed in with your wallet, you can setup notifications for alerts. Currently, the supported channels to receive notifications are email, Slack, Telegram, Discord and webhooks.",
    },
    {
      question: "What makes a good bot?",
      answer:
        "You can subscribe to alerts from specific bots or contracts using the Forta App subscriptions page. Once signed in with your wallet, you can setup notifications for alerts. Currently, the supported channels to receive notifications are email, Slack, Telegram, Discord and webhooks.",
    },
    // Add more faqs as needed
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Container>
      <div className="faq-shadow relative z-50 mt-[170px]">
        <h1
          className="text-center text-[60px] capitalize"
          style={{ color: "rgba(228,230,237,0.90)" }}
        >
          Frequently asked questions
        </h1>
        <div className="lg:mt-[70px] mt-28 space-y-[40px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`px-12 py-8 bg-color justify-center items-center rounded ${
                activeIndex === index ? "box" : ""
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer -mt-[7]"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="lg:text-[38px] text-[24px] font-medium text-[#D9D9D9]">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FaAngleUp
                    onClick={() => {
                      toggleFaq(index);
                      // Set the button state here if needed
                    }}
                    className="h-8 w-8 p-2 lg:mt-[25px] rounded-lg text-white border border-white flex items-center justify-center"
                  />
                ) : (
                  <FaAngleDown className="h-8 w-8 p-2 lg:mt-[25px] rounded-lg text-white border border-white" />
                )}
              </div>
              {activeIndex === index && (
                <>
                  <p className="-mt-2 text-[#9F9FA6] text-[16px] ">
                    {faq.answer}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FaqItem;
