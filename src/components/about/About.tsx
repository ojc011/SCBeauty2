import SCAboutPhoto from '../../assets/images/SCAboutPhoto.jpeg';
import ImgTen from '../../assets/images/image-10.jpeg';
import SideMenuMobile from '../sideMenu/SideMenuMobile';

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <SideMenuMobile />
      <section className="flex flex-col items-center mt-20 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-3 ">
        <section>
          <img
            style={{ width: 400, height: 400 }}
            className="max-w-full object-cover	"
            src={SCAboutPhoto}
            alt=""
          ></img>
        </section>
      </section>
      <p className="text-base w-full sm:text-lg sm:w-9/12">
        Since my earliest days, I've viewed the world through a creative lens.
        I've been blessed with an artistic gift that I integrate into all
        aspects of my life, including drawing, cooking, making music, and as a
        mother and wife. Pursuing a career in hair and makeup artistry was a
        natural choice. With 9 years of experience in the industry and the
        recent launch of SC Beauty, my on-site event hair and makeup business,
        I'm confident in my ability to provide you with the customized look you
        desire for your special day. Every face and head of hair is a unique and
        perfect creation, and my goal is to enhance that natural beauty. I
        approach each client as an individual, creating a personalized look that
        complements their features and personality. My passion is to bring joy
        to the world through my art, and I'm honored to accomplish that by
        helping my clients look and feel their most beautiful. Thank you for
        considering SC Beauty. I look forward to the opportunity to work with
        you and create a look that makes you feel confident and radiant.
        Samantha Cronk, SC Beauty
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
};

export default About;
