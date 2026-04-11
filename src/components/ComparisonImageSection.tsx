import aynaVsWhey from "@/assets/ayna-vs-whey.jpg";

const ComparisonImageSection = () => {
  return (
    <section className="py-10 md:py-16 px-3 md:px-6">
      <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Desktop: full image */}
        <img
          src={aynaVsWhey}
          alt="Comparação Whey tradicional vs AYNA Protein"
          className="hidden md:block w-full h-auto object-cover object-center"
          loading="lazy"
        />
        {/* Mobile: cropped to AYNA side */}
        <div className="md:hidden aspect-[3/4] overflow-hidden">
          <img
            src={aynaVsWhey}
            alt="AYNA Protein — experiência real"
            className="w-full h-full object-cover"
            style={{ objectPosition: "80% center" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonImageSection;
