import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectMockup } from './ProjectMockups';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      id={`project-${project.id}`}
      className="group relative rounded-2xl bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800/80 p-5 sm:p-6 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 flex flex-col justify-between"
    >
      <div>
        {/* Project Preview Mockup */}
        <div className="mb-5 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800/80 transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectMockup type={project.previewType} title={project.title} />
        </div>

        {/* Header & Category */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
            {project.category}
          </span>
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Available
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {/* Very Short Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`btn-live-${project.id}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-all shadow-sm shadow-emerald-950/20 hover:shadow"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs text-neutral-400 dark:text-neutral-500 italic">
            Private Deployment
          </span>
        )}

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`btn-github-${project.id}`}
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-medium transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </article>
  );
};
