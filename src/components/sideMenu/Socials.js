import Facebook from '../../images/facebook-icon.png';
import Instagram from '../../images/instagram-icon.png';
import WeddingWire from '../../images/image-10.jpeg';

const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a
        href="https://www.facebook.com/scbeauty4u/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Facebook}
          alt="Facebook icon"
        ></img>
      </a>
      <a
        href="https://www.instagram.com/samanthacronkbeauty/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Instagram}
          alt="Instagram icon"
        ></img>
      </a>
      <a
        href="https://www.weddingwire.com/biz/sc-beauty-austin/180d2c99e8efa991.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={WeddingWire}
          alt="WeddingWire Icon"
        ></img>
      </a>
    </section>
  );
};

export default Socials;
