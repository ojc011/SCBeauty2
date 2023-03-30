import React from 'react';
import { PricingSlot, PricingDetail } from 'react-pricing-table';
import PricingPic from '../../assets/images/PricingPic.jpeg';

const BridalPricing = () => {
  return (
    <PricingSlot title="Bridal">
      <PricingDetail>
        <b>Natural Beauty $450</b>
        <h1>Day of Hair + Airbrush Makeup + Trial</h1>
        <ul>
          <h3>Under-eye de-puffing patches</h3>
          <h3>Airbrush of face, chest, and back if needed</h3>
          <h3>Individual lashes</h3>
        </ul>
      </PricingDetail>
      <br />
      <PricingDetail>
        <b>Royal Beauty $510</b>
        <h1>Day of Hair + Airbrush Makeup + Trial</h1>
        <ul>
          <h3>Day of Skincare</h3>
          <h3>Lumifying Eye Drops</h3>
          <h3>Under-eye de-puffing patches</h3>
          <h3>10 minute Shoulder, neck and scalp massage</h3>
          <h3>Airbrush (face, chest, back if needed)</h3>
          <h3>Individual Lashes</h3>
        </ul>
      </PricingDetail>
      <br />
      <PricingDetail>
        <h3>
          <b>Groom Styling: $40</b>
        </h3>
        <h3>
          <b>Day of Bridesmaid/Family Hair: $90</b>
        </h3>
        <h3>
          <b>Day of Bridesmaid/Family Makeup: $100 </b>
        </h3>
        <h3>
          <b>Blowout/Style: $75</b>
        </h3>
        <h3>
          <b>Flower Girl Hairstyle: $50</b>
        </h3>
        <h3>
          <b>Flower Girl Makeup Touch: $45</b>
        </h3>
        <h3>
          <b>Photoshoot/Event Hourly rate: $110 per hour</b>
        </h3>
        <h3>
          <b>Half Day Rate (up to 4 hours): $440 </b>
        </h3>
        <h3>
          <b>Full-day rate (4.5-8 hours): $880</b>
        </h3>
        <h3>
          <b>Additional Assistant fee: $150 + Travel</b>
        </h3>
      </PricingDetail>
      <br />
      <PricingDetail>
        <h1>Travel Fee within Austin: $20.00 Per Artist</h1>
        <h1>
          Travel Fee Outside of Austin: $20.00 plus $0.75 per mile (to and
          from) per artist
        </h1>
      </PricingDetail>
    </PricingSlot>
  );
};

const Pricing = () => {
  return (
    <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
      <section className="flex flex-col items-center mt-5 font-titlefont text-2xl gap-5 text-slate-600">
        <BridalPricing />
        <section>
          <img
            className="max-w-full max-h-full object-cover"
            src={PricingPic}
            alt=""
          />
        </section>
      </section>
    </section>
  );
};

export default Pricing;
