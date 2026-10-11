import React, { useState } from 'react';
import { SEOComponent } from '../../components/SEO/SEOComponent';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Modular Kitchen', 'Commercial', 'TV Unit', 'Pooja Unit'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full pt-28 pb-20">
      <SEOComponent
        title="Interior Portfolio | SMK Interior"
        description="Explore completed residential homes, luxury villas, modular kitchens, and office interior projects by SMK Interior in Chennai."
      />

      {/* Category Filter Pills — Touch Swipeable on Mobile, Centered on Desktop */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-6xl mx-auto flex items-center sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 active:scale-[0.97] ${
                  active
                    ? 'bg-brand-brown text-white shadow-md ring-2 ring-brand-brown/20'
                    : 'bg-brand-brown/10 text-brand-primary hover:bg-brand-brown/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Portfolio Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={idx % 2 === 1 ? 'md:mt-6' : ''}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
