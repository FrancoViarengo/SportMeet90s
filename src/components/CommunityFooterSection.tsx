import React from 'react';
import { TESTIMONIALS_DATA } from '../data/archiveData';
import { SoundDeck } from './SoundDeck';
import { Quote, MessageSquare, Send, ExternalLink, Disc, Sparkles } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const CommunityFooterSection: React.FC = () => {
  return (
    <footer
      id="comunidad"
      className="w-full bg-[#e5dccd] pt-[100px] pb-[80px] px-6 select-none border-t border-[#ab5700]/30"
    >
      <div className="max-w-[1200px] mx-auto space-y-20">
        {/* Module: Testimonios de Historia Oral */}
        <div>
          <div className="text-center md:text-left mb-10">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#7997ff] mb-2 flex items-center gap-1.5 justify-center md:justify-start">
              <MessageSquare className="w-4 h-4 text-[#7997ff]" />
              <span>MEMORIA ORAL DE PRIMERA PERSONA // COMENTARIOS DE LA COMUNIDAD</span>
            </div>
            <h2 className="heading text-[#ab5700] uppercase">
              "ESA NOCHE DEL '98 EN LA SHELL..."*
            </h2>
            <p className="font-display text-[18px] md:text-[20px] text-[#7997ff] mt-2 max-w-[700px] leading-snug">
              Anécdotas rescatadas de los comentarios, cartas y encuentros de la comunidad de @sportmeet90s.
            </p>
          </div>

          {/* Testimonies Grid (20px radius cards, 1px solid #ab5700, 24px padding) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="border border-[#ab5700] rounded-[20px] p-6 bg-[#e5dccd] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#ab5700]/25 pb-3 mb-4">
                    <Quote className="w-6 h-6 text-[#7997ff]" />
                    <span className="text-[11px] font-mono text-[#d99623]">{t.year}</span>
                  </div>

                  <p className="body-editorial text-[14px] leading-relaxed italic mb-6">
                    "{t.testimony}"
                  </p>
                </div>

                <div className="border-t border-[#ab5700]/25 pt-4 font-mono text-xs">
                  <div className="text-[#ab5700] font-bold text-sm">{t.author}</div>
                  <div className="text-[#7997ff] text-[11px] mt-0.5">{t.car}</div>
                  <div className="text-[#ab5700]/70 text-[10px] mt-1">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Sound Deck (Cassette & Escape Synthesizer) */}
        <div className="pt-6">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono text-[#7997ff] uppercase">
              ATMÓSFERA ACÚSTICA INTERACTIVA // GENERADOR ANALÓGICO
            </span>
          </div>
          <SoundDeck isFloating={false} />
        </div>

        {/* Grand CTA: Convocatoria de Archivo Abierto */}
        <div className="border border-[#ab5700] rounded-[20px] p-8 md:p-12 bg-[#e5dccd] text-center flex flex-col items-center justify-center">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#7997ff] mb-4">
            CONVOCATORIA PERMANENTE DE PRESERVACIÓN CULTURAL
          </div>

          {/* Official Avatar Badge */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ab5700] mb-5">
            <img
              src="/IMAGENES_Y_VIDEOS/AVATAR.jpg"
              alt="Sport Meet 90s Avatar Oficial"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grand Title in Parafina 500, 56px, #ab5700 */}
          <h2 className="heading text-[#ab5700] uppercase max-w-[900px] mb-6">
            ¿TENÉS VHS, FOTOS EN PAPEL O UN AUTO CON HISTORIA DE LOS 90S?*
          </h2>

          <p className="body-editorial text-[16px] md:text-[18px] text-[#ab5700] max-w-[720px] mb-8 leading-relaxed">
            Las cintas VHS se degradan con el tiempo y las fotos en papel se pierden en los cajones. Si tenés registros filmados de las picadas en el Gálvez, encuentros en las estaciones de servicio de Libertador, o un auto armado con historia de los 90s y 2000, sumate al archivo vivo. Digitalizamos, catalogamos y documentamos la memoria colectiva para que no se olvide jamás.
          </p>

          {/* Main Action Button Filled in Citron Beam #e8e359, text in #214534, 31px radius, padding 10px 32px */}
          <a
            href="https://www.instagram.com/sportmeet90s/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-lg bg-[#e8e359] text-[#214534] border-[#e8e359] hover:bg-[#e8e359]/90 transition-transform active:scale-95 text-[13px] font-medium"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>[ ENVIAR MATERIAL A @SPORTMEET90S EN INSTAGRAM ↗ ]</span>
          </a>

          <div className="mt-4 text-[11px] font-mono text-[#ab5700]/75">
            O ESCRIBINOS POR MENSAJE PRIVADO DIRECTO A NUESTRO PERFIL OFICIAL
          </div>
        </div>

        {/* Colophon & Editorial Credits */}
        <div className="border-t border-[#ab5700]/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#ab5700]">
          <div>
            <strong>SPORT MEET 90s*</strong> // BUENOS AIRES, ARGENTINA
          </div>
          <div className="text-center sm:text-right text-[#ab5700]/80">
            SISTEMA DE DISEÑO ARTE* // RESCATE DOCUMENTAL DE ÉPOCA (1990-2002)
          </div>
        </div>
      </div>
    </footer>
  );
};
