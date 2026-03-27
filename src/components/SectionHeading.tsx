const SectionHeading = ({ title, className = "" }: { title: string; className?: string }) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    <div className="section-divider" />
  </div>
);

export default SectionHeading;
