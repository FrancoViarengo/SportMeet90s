import React, { useState } from 'react';
import { VHSMediaFrame } from './VHSMediaFrame';
import { SPOTS_DATA } from '../data/archiveData';
import { MapPin, Clock, Calendar, CheckCircle2, Car } from 'lucide-react';

export const SpotsSection: React.FC = () => {
  const [activeSpotId, setActiveSpotId] = useState<string>(SPOTS_DATA[0].id);

  const activeSpot = SPOTS_DATA.find((s) => s.id === activeSpotId) || SPOTS_DATA[0];

  return (
    <section
      id="spots"
      className="w-full bg-[#e5dccd] py-[100px] px-6 select-none"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Title in Parafina 500, 56px, line-height 0.90, color #ab5700 */}
        <div className="mb-10">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#7997ff] mb-2">
            HOJA DE RUTA NOCTURNA // PUNTOS DE ENCUENTRO Y RITUALES
          </div>
          <h2 className="heading text-[#ab5700] uppercase">
            MAPA FORENSE DE LA NOCHE FIERRERA*
          </h2>
          <p className="font-display text-[18px] md:text-[20px] text-[#7997ff] mt-2 max-w-[750px] leading-snug">
            Los playones, autopistas y avenidas donde se forjaron los códigos de encuentro de la década de oro.
          </p>
        </div>

        {/* Tab Buttons (31px border-radius, changing Ghost #ab5700 to Filled #e8e359 with text #214534) */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {SPOTS_DATA.map((spot, idx) => {
            const isSelected = spot.id === activeSpotId;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveSpotId(spot.id)}
                className={`btn-pill text-[12px] font-medium uppercase transition-colors ${
                  isSelected
                    ? 'bg-[#e8e359] text-[#214534] border-[#e8e359]'
                    : 'bg-transparent text-[#ab5700] border-[#ab5700] hover:bg-[#ab5700]/10'
                }`}
              >
                <span>SPOT #{idx + 1}: {spot.zone.split('/')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Spot Editorial Layout (20px radius card container) */}
        <div className="border border-[#ab5700] rounded-[20px] p-6 md:p-8 bg-[#e5dccd]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: VHS Media Frame with Spot Photo & OSD */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <VHSMediaFrame
                imageSrc={activeSpot.photo}
                imageAlt={activeSpot.title}
                osdTimestamp={activeSpot.osdTimestamp}
                tapeMode="SP"
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />

              {/* Coordinates and Era Badge */}
              <div className="flex items-center justify-between font-mono text-xs text-[#ab5700] border-t border-[#ab5700]/30 pt-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7997ff]" />
                  <span>COORDENADAS: {activeSpot.coordinates}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#568037]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>PERÍODO: {activeSpot.era}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Oral History, Peak Hours, Rituals and Iconic Cars */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#d99623] mb-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="uppercase">HORARIO PICO: {activeSpot.peakHour}</span>
                </div>

                <h3 className="font-display text-[26px] md:text-[32px] text-[#ab5700] leading-tight">
                  {activeSpot.title}
                </h3>
              </div>

              {/* Lead Chronicle */}
              <p className="body-editorial text-[15px] leading-relaxed">
                {activeSpot.leadChronicle}
              </p>

              {/* Rituals Section */}
              <div className="border border-[#ab5700]/40 rounded-[14px] p-4 bg-[#e5dccd]">
                <div className="text-[11px] font-mono text-[#7997ff] uppercase font-bold mb-2.5">
                  CÓDIGOS & RITUALES DEL LUGAR
                </div>
                <div className="space-y-2 font-mono text-xs">
                  {activeSpot.rituals.map((ritual, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#ab5700]">
                      <span className="text-[#7997ff] font-bold mt-0.5">•</span>
                      <span className="leading-tight">{ritual}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Iconic Cars Seen Here */}
              <div className="border border-[#568037]/50 rounded-[14px] p-4 bg-[#e5dccd]">
                <div className="text-[11px] font-mono text-[#568037] uppercase font-bold mb-2 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5" />
                  <span>NAVÍOS HABITUALES EN EL PLAYÓN</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeSpot.iconicCars.map((car, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-[9999px] border border-[#568037] text-[#214534] bg-[#e5dccd]"
                    >
                      {car}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
