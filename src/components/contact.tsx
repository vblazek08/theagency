const Contact = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row justify-center mt-20">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-green-600">
          Location_on
        </span>
        <a href="">123 Fifth Avenue, New York, NY 10160</a>
      </div>

      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-green-600">mail</span>
        <a href="mailto:example@example.com">example@example.com</a>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-green-600">phone</span>
        <a href="tel:777777777">777777777</a>
      </div>
    </div>
  );
};

export default Contact;
