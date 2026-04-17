import aynaVsWhey800 from "@/assets/ayna-vs-whey-800.webp";
import aynaVsWhey1200 from "@/assets/ayna-vs-whey-1200.webp";

const ComparisonImageSection = () => {
  return (
    <section className="py-10 md:py-16 px-3 md:px-6">
      <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Desktop: full image */}
        <img
          src={aynaVsWhey1200}
          srcSet={`${aynaVsWhey800} 800w, ${aynaVsWhey1200} 1200w`}
          sizes="(max-width: 768px) 0px, 100vw"
          width={843}
          height={1063}
          alt="Comparação Whey tradicional vs AYNA Protein"
          className="hidden md:block w-full h-auto object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        {/* Mobile: cropped to AYNA side */}
        <div className="md:hidden aspect-[3/4] overflow-hidden">
          <img
            src={aynaVsWhey800}
            width={800}
            height={1009}
            alt="AYNA Protein — experiência real"
            className="w-full h-full object-cover"
            style={{ objectPosition: "80% center" }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonImageSection;
