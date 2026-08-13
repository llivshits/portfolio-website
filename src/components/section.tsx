import React from "react";

interface SectionProps {
  id?: string;
  label?: string;
  aside?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/**
 * Page section laid out as a two column grid on large screens: a narrow gutter
 * holding the section label, and the content column everything aligns to.
 * Below `lg` the two columns collapse into a single stacked column.
 */
const Section: React.FC<SectionProps> = ({
  id,
  label,
  aside,
  className = "",
  children,
}) => (
  <section
    id={id}
    className={`lg:grid lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-x-14 ${className}`}
  >
    {label && (
      <div className="flex items-center justify-between gap-4 lg:block lg:pt-1">
        <h2 className="text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase dark:text-neutral-400">
          {label}
        </h2>
        {aside && <div className="lg:mt-4">{aside}</div>}
      </div>
    )}
    <div className={`lg:col-start-2 ${label ? "mt-8 lg:mt-0" : ""}`}>
      {children}
    </div>
  </section>
);

export default Section;
