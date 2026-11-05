import React from 'react';
import { 
  Utensils, Cake, BookOpen, ShoppingBag, Activity, 
  ExternalLink, Search, Star, Heart, Calendar, Users, ArrowUpRight
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'restaurant' | 'bakery' | 'books' | 'ecommerce' | 'healthcare' | 'generic';
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, title }) => {
  return (
    <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col relative group">
      {/* Browser Bar */}
      <div className="h-8 bg-neutral-900/90 border-b border-neutral-800 px-3 flex items-center justify-between select-none">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-rose-500/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-amber-500/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-emerald-500/80 transition-colors" />
        </div>
        <div className="text-[11px] font-mono text-neutral-400 bg-neutral-950/70 px-3 py-0.5 rounded border border-neutral-800/80 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
          <span className="truncate max-w-[180px]">{title.toLowerCase().replace(/\s+/g, '-')}.web</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Screen Content based on type */}
      <div className="flex-1 p-4 relative overflow-hidden bg-neutral-950 text-neutral-200 select-none">
        {type === 'restaurant' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Utensils className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-100 tracking-wide">Green Bite</span>
              </div>
              <div className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                Open Now
              </div>
            </div>

            <div className="my-auto py-2">
              <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                Fresh, Organic <span className="text-emerald-400">&</span> Delicious
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Handcrafted seasonal menus & seamless table reservations.
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800/50">
              <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800">
                <div className="text-[10px] text-neutral-400 font-medium">Signature Bowls</div>
                <div className="text-xs font-semibold text-emerald-400 mt-0.5">$14.50</div>
              </div>
              <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800">
                <div className="text-[10px] text-neutral-400 font-medium">Herb Grilled Fish</div>
                <div className="text-xs font-semibold text-emerald-400 mt-0.5">$22.00</div>
              </div>
              <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800">
                <div className="text-[10px] text-neutral-400 font-medium">Organic Juices</div>
                <div className="text-xs font-semibold text-emerald-400 mt-0.5">$6.00</div>
              </div>
            </div>
          </div>
        )}

        {type === 'bakery' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Cake className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-100 tracking-wide">Artisan Bakery</span>
              </div>
              <span className="text-[10px] font-mono text-amber-400/90">Daily Fresh Batches</span>
            </div>

            <div className="my-auto py-2">
              <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                Freshly Baked <span className="text-amber-400">Sourdough & Cakes</span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Warm artisanal treats prepared every morning with organic grains.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/50">
              <div className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-neutral-200">Rustic Loaf</div>
                  <div className="text-[10px] text-amber-400 font-semibold">$5.80</div>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">Popular</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-neutral-200">Butter Croissant</div>
                  <div className="text-[10px] text-amber-400 font-semibold">$3.50</div>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">Warm</span>
              </div>
            </div>
          </div>
        )}

        {type === 'books' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-100 tracking-wide">Maktaba Book Agency</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                <Search className="w-3 h-3" />
                <span>Search catalog...</span>
              </div>
            </div>

            <div className="my-auto py-2">
              <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                Curated Literature & <span className="text-sky-400">Academic Books</span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Modern publication agency catalog and institutional library management.
              </div>
            </div>

            <div className="flex gap-1.5 overflow-hidden pt-2 border-t border-neutral-800/50">
              <span className="text-[10px] px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">Engineering</span>
              <span className="text-[10px] px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">Literature</span>
              <span className="text-[10px] px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">Research</span>
              <span className="text-[10px] px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">History</span>
            </div>
          </div>
        )}

        {type === 'ecommerce' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-100 tracking-wide">Commerce Studio</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 text-indigo-300">
                <span>Cart</span>
                <span className="w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[9px] font-bold">2</span>
              </div>
            </div>

            <div className="my-auto py-2">
              <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                Fast Checkout & <span className="text-indigo-400">Catalog Storefront</span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Optimized product discovery with real-time cart state and checkout flow.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/50">
              <div className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-neutral-200">Wireless Audio</div>
                  <div className="text-[10px] text-indigo-400 font-semibold">$89.00</div>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium">+ Add</span>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-neutral-200">Smart Band Pro</div>
                  <div className="text-[10px] text-indigo-400 font-semibold">$120.00</div>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium">+ Add</span>
              </div>
            </div>
          </div>
        )}

        {type === 'healthcare' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-100 tracking-wide">CareOps Portal</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Live Telemetry</span>
              </div>
            </div>

            <div className="my-auto py-2">
              <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                Clinical Workflow & <span className="text-cyan-400">Patient Analytics</span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Real-time appointment schedule, patient health files, and staff scheduling.
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-800/50">
              <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800 text-center">
                <div className="text-xs font-bold text-cyan-400">128</div>
                <div className="text-[9px] text-neutral-400">Patients Today</div>
              </div>
              <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800 text-center">
                <div className="text-xs font-bold text-emerald-400">98.4%</div>
                <div className="text-[9px] text-neutral-400">On-Time Care</div>
              </div>
              <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800 text-center">
                <div className="text-xs font-bold text-white">12</div>
                <div className="text-[9px] text-neutral-400">Doctors Active</div>
              </div>
            </div>
          </div>
        )}
        {type === 'generic' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/60">
              <span className="text-xs font-bold text-neutral-100 tracking-wide">{title}</span>
              <span className="text-[10px] font-mono text-emerald-400">Project Preview</span>
            </div>
            <div className="my-auto py-3">
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                Building <span className="text-emerald-400">useful digital products</span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-2">
                Explore the repository to review the implementation, technologies, and project structure.
              </div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-neutral-800/50">
              <span className="text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Web Application</span>
              <span className="text-[10px] px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">Source Code</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
