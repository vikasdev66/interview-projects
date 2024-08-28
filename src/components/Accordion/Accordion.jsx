import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { accordionData } from "./accordionData";
import "./Accordion.css";

export function Accordion() {
  const [accordionList, setAccordionList] = useState(accordionData);
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="text-center">Accordion</h1>
        <div>
          {accordionList.map((data, index) => {
            const { question, answer } = data;
            const isAccordion = index === openIndex;
            return (
              <div key={index} className="Accordion-item">
                <div className="flex">
                  <IoIosArrowForward
                    onClick={() => {
                      setOpenIndex(openIndex === index ? null : index);
                    }}
                    className={`${
                      isAccordion ? "arrowForward-icon-rotate" : ""
                    } arrowForward-icon cursor-pointer`}
                  />
                  <div>
                    <div
                      onClick={() => {
                        setOpenIndex(openIndex === index ? null : index);
                      }}
                      className="cursor-pointer"
                    >
                      {question}
                    </div>
                    <div
                      className={
                        isAccordion ? "accordion-block" : "accordion-none"
                      }
                    >
                      {answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
