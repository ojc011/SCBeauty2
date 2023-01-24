import React from 'react';
import ImgSixtyFive from '../images/gallery-one/image-65.jpeg';
import ImgTen from '../images/image-10.jpeg';

function About() {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-20 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-3 ">
        <section>
          <img
            className="max-w-full object-cover	"
            src={ImgSixtyFive}
            alt=""
          ></img>
        </section>
      </section>
      <p className="text-base w-full sm:text-lg sm:w-9/12">
        Ever since I opened my eyes for the first time in this life, I have seen
        the world through a creative lens. The gift of art was bestowed on me by
        my Creator and I incorporate it in every aspect of my life from drawing,
        to cooking, to making music, in my work, and at home, as a mother and a
        wife. Choosing the medium of Hair and Makeup as the art to make my
        living only seemed natural. With 9 years experience in the industry, and
        the recent launch of SC Beauty, my on-site event hair and makeup
        business, I am sure to bring you the customized look you desire for your
        special day. I see every face and every head of hair as a unique and
        perfected creation, and I only aim to enhance that beauty, not cover it.
        Bringing joy to the world is an innate desire of mine, and my calling is
        to accomplish that by helping to make everyone I touch, look and feel
        like their most beautiful self. Samantha Cronk, SC Beauty
      </p>
      <a
        href="https://www.weddingwire.com/biz/sc-beauty-austin/180d2c99e8efa991.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <section className="flex flex-col w-52 h-52 sm:flex-row  gap-1 p-8 ">
          <section>
            <img className="max-w-full object-cover" src={ImgTen} alt=""></img>
          </section>
        </section>
      </a>
    </article>
  );
}

export default About;
