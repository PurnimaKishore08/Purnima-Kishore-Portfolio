
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-lg mb-8 max-w-3xl">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
