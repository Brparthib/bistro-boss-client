const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center mb-12">
      <p className="text-amber-600 text-sm mb-2">
        {subHeading}
      </p>
      <h1 className="uppercase text-2xl border-y-2 border-gray-300 md:w-4/12 py-5 mx-auto mb-5">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
