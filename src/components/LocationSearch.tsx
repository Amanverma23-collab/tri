import React, { useState, useMemo } from 'react';
import { locationDatabase, LocationRecord } from '../data/locationsData';
import { Search, MapPin, Building, Shield, Landmark, ArrowUpRight, CheckCircle } from 'lucide-react';

interface LocationSearchProps {
  onOpenConsultation: (prefillService?: string) => void;
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
    <section id="locations" className="py-24 border-b border-[#40372e]/60 bg-[#100904]">
      <div className="o-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-[11px] font-medium tracking-[0.2em] text-[#dc5000] uppercase mb-2">
            NATIONWIDE SERVICE DISCOVERY & FIELD COVERAGE
          </div>
          <h2 className="text-[32px] sm:text-[46px] font-medium leading-[0.95] text-[#ffedd7] uppercase mb-4">
            REGULATORY JURISDICTION & <br />
            LOCATION COVERAGE.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#ffedd7]/80 leading-relaxed">
            Search your city, district, or state to identify exact municipal authorities, state food safety directorates, labour offices, and regional banking desks.
          </p>
        </div>

        {/* Search Bar & Quick Filters */}
        <div className="mb-10 max-w-4xl">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#6c5f51]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search city, district or state (e.g. Delhi, Mumbai, Bengaluru, Pune, Lucknow, Ahmedabad)..."
              className="w-full bg-[#100904] border border-[#40372e] focus:border-[#ffedd7] text-[#ffedd7] text-[15px] rounded-[12px] pl-12 pr-4 py-4 outline-none transition-all placeholder:text-[#6c5f51] placeholder:text-[13px] placeholder:tracking-wide placeholder:uppercase"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[11px] text-[#6c5f51] hover:text-[#ffedd7] uppercase"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium tracking-[0.1em] text-[#6c5f51] uppercase mr-1">
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
                className="text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-[#40372e] bg-[#382416]/20 text-[#ffedd7]/80 hover:border-[#ffedd7] hover:text-[#ffedd7] transition-colors"
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
              className="rounded-[12px] border border-[#40372e] bg-[#382416]/10 p-6 flex flex-col justify-between hover:border-[#6c5f51] transition-all group"
            >
              <div>
                {/* Header: Location & Region */}
                <div className="flex items-start justify-between gap-2 mb-4 pb-3 border-b border-[#40372e]">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#dc5000] uppercase tracking-wider mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{loc.state}</span>
                    </div>
                    <h3 className="text-[18px] font-medium text-[#ffedd7] uppercase leading-snug">
                      {loc.city}
                    </h3>
                    <div className="text-[11px] text-[#6c5f51] uppercase">
                      Dist: {loc.district}
                    </div>
                  </div>

                  <span className="text-[9px] font-medium uppercase px-2 py-0.5 rounded border border-[#40372e] bg-[#100904] text-[#ffedd7]">
                    {loc.region} Hub
                  </span>
                </div>

                {/* Statutory Authorities Info */}
                <div className="space-y-3 text-[12px] mb-6">
                  <div>
                    <span className="text-[10px] text-[#6c5f51] uppercase tracking-wider block">
                      Food Authority / Licensing:
                    </span>
                    <span className="text-[#ffedd7]/90">{loc.fssaiJurisdiction}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#6c5f51] uppercase tracking-wider block">
                      Labour & Shop Act Directorate:
                    </span>
                    <span className="text-[#ffedd7]/90">{loc.labourDepartment}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#6c5f51] uppercase tracking-wider block">
                      Pollution Control Board:
                    </span>
                    <span className="text-[#ffedd7]/90">{loc.pollutionControlBoard}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#6c5f51] uppercase tracking-wider block">
                      Banking Syndicate Cluster:
                    </span>
                    <span className="text-[#ffedd7]/90">{loc.bankingCluster}</span>
                  </div>
                </div>

                {/* Popular Services Tags */}
                <div className="mb-6">
                  <span className="text-[10px] text-[#6c5f51] uppercase tracking-wider block mb-2">
                    Priority Local Services:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.popularServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium uppercase px-2 py-0.5 rounded bg-[#100904] border border-[#40372e] text-[#ffedd7]"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenConsultation(`Regional Service Request — ${loc.city}, ${loc.state}`)}
                className="btn-ghost w-full justify-center text-[11px] mt-2 group-hover:border-[#ffedd7]"
              >
                <span>REQUEST FIELD CONSULTATION IN {loc.city.toUpperCase().split(' ')[0]}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ffedd7]" />
              </button>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="p-12 text-center rounded-[12px] border border-[#40372e] bg-[#382416]/10">
            <p className="text-[16px] text-[#ffedd7] uppercase mb-2">
              No direct branch index found for "{searchTerm}"
            </p>
            <p className="text-[13px] text-[#6c5f51] max-w-md mx-auto mb-6">
              TriSecure provides remote and on-site central liaison across all 28 states and 8 union territories of India.
            </p>
            <button
              onClick={() => onOpenConsultation(`Pan-India Inquiry — Custom Location: ${searchTerm}`)}
              className="btn-pill"
            >
              <span>INQUIRE FOR YOUR JURISDICTION</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
