import React from 'react';
import { PricingSlot, PricingDetail } from 'react-pricing-table';
import PricingPic from '../../assets/images/PricingPic.jpeg';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.tooltipRef = React.createRef();
  }

  render() {
    return (
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
        <section className="flex flex-col items-center mt-5 font-titlefont text-2xl gap-5 text-slate-600">
            <PricingSlot title="Bridal">
              <PricingDetail>
                Day of Bridal Hair - <b>$105</b>
              </PricingDetail>
              <PricingDetail>
                Day of Bridal Make-up - <b>$115</b>{' '}
                <p>
                  (Includes airbrush on face, chest, and back if needed, lashes)
                </p>
              </PricingDetail>
              <br />
              <PricingDetail>
                Hair and Make Up Trial Run - <b>$155</b>{' '}
                <p>(2.5 hour session includes hair and makeup)</p>
              </PricingDetail>
              <br />
              <PricingDetail>
                Day of Bridesmaid/Family Hair - <b>$85</b>
              </PricingDetail>
              <PricingDetail>
                Day of Bridesmaid/Family Makeup - <b> $90</b>{' '}
                <p>(includes airbrush makeup and lashes)</p>
              </PricingDetail>
              <br />
              <PricingDetail>
                Blowout/Style - <b>$70</b>
              </PricingDetail>
              <PricingDetail>
                Flower Girl Hairstyle - <b>$45</b>
              </PricingDetail>
              <PricingDetail>
                Flower Girl Makeup - <b>$45</b>
              </PricingDetail>
              <br />
              <PricingDetail>
                Photoshoot/Event “Primping” Hourly rate - <b>$50/hour</b>
              </PricingDetail>
              <br />
              <PricingDetail>
                <b>Additional Assistant fee: $150 + travel costs</b>
              </PricingDetail>
              <PricingDetail>
                <b>Travel Fee within Austin: $15.00</b>
              </PricingDetail>
              <PricingDetail>
                <b>
                  Travel Fee Outside of Austin: $15.00 per artist + .50 per mile
                  per person
                </b>
              </PricingDetail>
            </PricingSlot>
            <section>
              <img
                className="max-w-full max-h-full object-cover"
                src={PricingPic}
                alt=""
              ></img>
            </section>
        </section>
      </section>
    );
  }
}
