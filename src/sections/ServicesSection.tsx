import React from 'react';
import { Briefcase, Utensils, ShoppingBag, LayoutDashboard, Zap, Layers } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  Utensils,
  ShoppingBag,
  LayoutDashboard,
  Zap,
  Layers,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            What I Build
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-mono">
            High-impact digital products tailored to business goals.
          </p>
        </div>

        {/* 6 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Layers;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 flex flex-col items-start text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
