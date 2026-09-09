import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-24 bg-neutral-50/50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Selected Work
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-mono">
              Real code repositories & production deployments.
            </p>
          </div>
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
            5 Featured Repositories
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
