import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-20 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">Contact</h2>
        <br></br>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-3 ">
        <ContactForm />
      </section>
    </article>
  );
};

export default Contact;
