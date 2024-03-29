import React from 'react';
import { PricingSlot, PricingDetail } from 'react-pricing-table';
import PricingPic from '../../assets/images/PricingPic.jpeg';

const BridalPricing = () => {
  return (
    <PricingSlot title="Bridal">
            <PricingDetail>
        <b>Bridal Services:</b>
        <h3>
          <b>Day of Bridal Hair: $125 (Add $45 for clip in extension applications)</b>
        </h3>
        <h3>
          <b>Day of Bridal Makeup: $145 (Includes individual lashes, and airbrush)</b>
        </h3>
        <h3>
          <b>Bridal Trial Run: $215 (Includes travel within Austin) </b>
        </h3>
      </PricingDetail>
      <br />
      <PricingDetail>
        <h3>
          <b>Day of Bridesmaid/Family Hair: $95</b>
        </h3>
        <h3>
          <b>Day of Bridesmaid/Family Makeup: $105 </b>
        </h3>
        <h3>
          <b>Blowout/Style: $80</b>
        </h3>
        <h3>
          <b>Flower Girl Hairstyle: $50</b>
        </h3>
        <h3>
          <b>Flower Girl Makeup Touch: $45</b>
        </h3>
        <h3>
          <b>Groom Styling: $40</b>
        </h3>
        <h3>
          <b>Makeup Lesson - (2 Hours): $150</b>
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
        <h1>Travel Fee within Austin: $35.00 Per Artist</h1>
        <h1>
          Travel Fee Outside of Austin: $35.00 plus $1.00 per mile (to and
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
