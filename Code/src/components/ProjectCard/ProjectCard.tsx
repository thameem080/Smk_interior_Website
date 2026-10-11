import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { ProjectItem } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className={`group mono-card p-5 sm:p-6 flex flex-col gap-4 h-full justify-between ${className}`}
    >
      {/* Project Cover Image Frame */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-dark sheen-glow">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Top Category Tag */}
        <div className="absolute top-3.5 left-3.5">
          <span className="bg-brand-dark/90 text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 shadow-sm font-semibold">
            {project.category}
          </span>
        </div>

        {/* Action Button Badge */}
        <div className="absolute bottom-3.5 right-3.5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-9 h-9 rounded-full bg-white text-brand-dark flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Project Metadata */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-muted font-medium">
          <MapPin className="w-3.5 h-3.5 text-brand-tan shrink-0" />
          <span>{project.location}</span>
          <span>•</span>
          <span>{project.area}</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary group-hover:text-brand-brown transition-colors leading-snug">
          <Link to={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="text-xs text-brand-muted font-light line-clamp-2 leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-3 border-t border-brand-brown/10 flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-tan font-bold">
          {project.propertyType}
        </span>
        <Link
          to={`/projects/${project.slug}`}
          className="text-xs font-semibold text-brand-brown flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
};
