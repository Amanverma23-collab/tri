import React, { useState, useMemo } from 'react';
import { locationDatabase, LocationRecord } from '../data/locationsData';
import { Search, MapPin, ArrowUpRight } from 'lucide-react';

interface LocationSearchProps {
  onOpenConsultation: (service?: string) => void;
}

export const LocationSearch: React.FC<LocationSearchProps> = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const filteredLocations = useMemo(() => {
    return locationDatabase.filter((loc) => {
      const matchesSearch =
        loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.state.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion = selectedRegion === 'All' || loc.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  const quickCities = ['All', 'Delhi (NCR)', 'Mumbai & Navi Mumbai', 'Bengaluru', 'Hyderabad', 'Pune'];

  return (
    <section id="locations" className="py-28 bg-white border-b border-[#e5e4de] relative">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#047857] uppercase mb-3">
            04 // PAN-INDIA JURISDICTION DIRECTORY
          </div>
          <h2 className="text-[34px] sm:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#0a1118] mb-4">
            Statutory Jurisdictions & <br />
            Regional Coverage.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-relaxed">
            Search your city, district, or state to identify exact municipal health authorities, state food safety directorates, labour commissionerates, and regional banking desks.
          </p>
        </div>

        {/* Search Bar & Quick Filters */}
        <div className="mb-12 max-w-3xl">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#64748b]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search city, district or state (e.g. Delhi, Mumbai, Bengaluru, Pune, Lucknow)..."
              className="w-full bg-[#fafaf7] border border-[#e5e4de] focus:border-[#047857] focus:bg-white text-[#0a1118] text-[15px] rounded-2xl pl-12 pr-16 py-4 outline-none transition-all placeholder:text-[#94a3b8] shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[12px] font-mono text-[#64748b] hover:text-[#0a1118] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#64748b] uppercase mr-1">
              QUICK HUBS:
            </span>
            {quickCities.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'All') {
                    setSearchTerm('');
                  } else {
                    setSearchTerm(item.split(' ')[0]);
                  }
                }}
                className="text-[11px] font-mono font-semibold uppercase px-3 py-1 rounded-full border border-[#e5e4de] bg-[#fafaf7] text-[#334155] hover:border-[#047857] hover:text-[#047857] transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-2xl border border-[#e5e4de] bg-[#fafaf7] p-6 flex flex-col justify-between hover:border-[#047857] hover:shadow-md transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-4 pb-3 border-b border-[#e5e4de]">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#047857] uppercase tracking-wider mb-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{loc.state}</span>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#0a1118]">
                      {loc.city}
                    </h3>
                    <div className="text-[11px] font-mono text-[#64748b]">
                      District: {loc.district}
                    </div>
                  </div>

                  <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded border border-[#e5e4de] bg-white text-[#0a1118]">
                    {loc.region}
                  </span>
                </div>

                {/* Authority Specifications */}
                <div className="space-y-3 text-[12px] mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-widest block">
                      Food Authority / Licensing Directorate:
                    </span>
                    <span className="text-[#0a1118] font-medium">{loc.fssaiJurisdiction}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-widest block">
                      Labour Directorate & Shop Act Office:
                    </span>
                    <span className="text-[#334155]">{loc.labourDepartment}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-widest block">
                      Pollution Control Board:
                    </span>
                    <span className="text-[#334155]">{loc.pollutionControlBoard}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-widest block">
                      Banking Consortium Desk:
                    </span>
                    <span className="text-[#334155]">{loc.bankingCluster}</span>
                  </div>
                </div>

                {/* Popular Services Tags */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono font-bold text-[#64748b] uppercase tracking-widest block mb-2">
                    Priority Regional Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.popularServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium uppercase px-2 py-0.5 rounded bg-white border border-[#e5e4de] text-[#0a1118]"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenConsultation(`Jurisdiction Advisory — ${loc.city}, ${loc.state}`)}
                className="btn-island-secondary w-full justify-between text-[11px] font-bold mt-2 hover:border-[#047857] hover:text-[#047857]"
              >
                <span>CONSULT IN {loc.city.toUpperCase().split(' ')[0]}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-[#e5e4de] bg-[#fafaf7]">
            <p className="text-[16px] font-bold text-[#0a1118] mb-2">
              No local branch index found for "{searchTerm}"
            </p>
            <p className="text-[13px] text-[#64748b] max-w-md mx-auto mb-6">
              TriSecure provides centralized government liaison across all 28 states and 8 union territories of India.
            </p>
            <button
              onClick={() => onOpenConsultation(`Pan-India Inquiry — Custom Location: ${searchTerm}`)}
              className="btn-island-primary"
            >
              <span>INQUIRE FOR YOUR JURISDICTION</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
