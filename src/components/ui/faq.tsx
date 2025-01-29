import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className=" bg-slate-50 pb-16">
      <h2 className="text-5xl my-4 text-gray-600 text-center p-8 font-serif">
        FAQs
      </h2>
      <div className="w-2/4 ml-96">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is your return and exchange policy?
            </AccordionTrigger>
            <AccordionContent>
              We accept returns and exchanges within [insert time frame, e.g.,
              30 days] of purchase, provided the items are unworn, unwashed, and
              in their original condition. Please note that sale items or
              discounted products may not be eligible for returns or exchanges.
              For more details, visit our Returns & Exchanges page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Shipping times vary based on your location and the shipping method
              selected at checkout. Typically, orders are processed within
              [insert processing time, e.g., 1-2 business days], with delivery
              times ranging from [insert delivery time frame, e.g., 3-7 business
              days] for standard shipping. International shipping may take
              longer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer international shipping to many countries. Shipping
              fees and delivery times vary depending on the destination. Please
              refer to our Shipping Information page for details
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept various payment methods, including major credit cards
              Visa, MasterCard, American Express, PayPal, and list any other
              payment options.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent>
              You can reach our customer support team via insert contact
              methods, e.g., email, phone, live chat. Our contact information is
              available on the Contact Us page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What materials are your products made from?
            </AccordionTrigger>
            <AccordionContent>
              Our products are crafted from high-quality materials, including
              [list specific materials, e.g., 100% organic cotton, polyester
              blends, etc.]. Detailed fabric information is available on each
              product page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I modify or cancel my order after it's been placed?
            </AccordionTrigger>
            <AccordionContent>
              We strive to process orders quickly; therefore, modifications or
              cancellations may not be possible once an order is placed. If you
              need to make changes, please contact our customer service team as
              soon as possible, and we'll do our best to accommodate your
              request.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
