import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MagazineSpread } from './components/MagazineSpread';
import { VhsVideoteca } from './components/VhsVideoteca';
import { Filmstrip35mm } from './components/Filmstrip35mm';
import { ArmadosSection } from './components/ArmadosSection';
import { GalvezSection } from './components/GalvezSection';
import { ArchiveVault } from './components/ArchiveVault';
import { SpotsSection } from './components/SpotsSection';
import { CommunityFooterSection } from './components/CommunityFooterSection';
import { SoundDeck } from './components/SoundDeck';
import { ModalVideoPlayer } from './components/ModalVideoPlayer';
import { ModalGalvezRegs } from './components/ModalGalvezRegs';
import { NavigationIndexModal } from './components/NavigationIndexModal';
import { Episode } from './types';
import { Radio } from 'lucide-react';

export default function App() {
  const [isIndexOpen, setIsIndexOpen] = useState<boolean>(false);
  const [isSoundDeckOpen, setIsSoundDeckOpen] = useState<boolean>(false);
  const [isGalvezRegsOpen, setIsGalvezRegsOpen] = useState<boolean>(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e5dccd] text-[#ab5700] overflow-x-hidden selection:bg-[#e8e359] selection:text-[#214534]">
      {/* 1. SECCIÓN HERO REEL MASTER (100vw x 100vh // Video real .mp4 en loop) */}
      <HeroSection
        onOpenIndex={() => setIsIndexOpen(true)}
        onOpenSoundDeck={() => setIsSoundDeckOpen(true)}
        onScrollToNext={() => handleNavigate('pliego-editorial')}
      />

      {/* 2. PLIEGO EDITORIAL (Estilo Revista Corsa / Parabrisas 1996 // Foto Ultra HD 2048px) */}
      <MagazineSpread />

      {/* Tape Divider 1 */}
      <div className="tape-divider max-w-[1200px] mx-auto px-6">
        <span>CINTA MASTER #01 // VIDEOTECA EN MOVIMIENTO</span>
      </div>

      {/* 3. LA VIDEOTECA VHS // DECK DE 16 CINTAS REALES */}
      <VhsVideoteca />

      {/* 4. TIRA CONTINUA DE NEGATIVOS 35mm // KODAK GOLD 400 (26 fotos) */}
      <Filmstrip35mm />

      {/* Tape Divider 2 */}
      <div className="tape-divider max-w-[1200px] mx-auto px-6">
        <span>DOCUMENTAL // HISTORIAS DE ARMADOS & PREPARADORES</span>
      </div>

      {/* 5. SERIE HISTORIAS DE ARMADOS (Casos reales: Gol G1 500HP, Uno Turbo, Civic EG6...) */}
      <ArmadosSection onSelectEpisode={(ep) => setSelectedEpisode(ep)} />

      {/* 6. SEPARADOR LOUD: 402 METROS EN EL GÁLVEZ // LUCES DE SODIO */}
      <GalvezSection onOpenRegs={() => setIsGalvezRegsOpen(true)} />

      {/* Tape Divider 3 */}
      <div className="tape-divider max-w-[1200px] mx-auto px-6">
        <span>BÓVEDA FOTOGRÁFICA // 83 REGISTROS DE ÉPOCA</span>
      </div>

      {/* 7. BÓVEDA FOTOGRÁFICA COMPLETA (83 fotos con filtros temáticos y Lightbox) */}
      <ArchiveVault />

      {/* 8. CARTOGRAFÍA NOCTURNA (Spots míticos: Libertador, Gral. Paz, Pinamar...) */}
      <SpotsSection />

      {/* 9. HISTORIA ORAL, SOUNDDECK SINTETIZADOR & CONVOCATORIA DE ARCHIVO */}
      <CommunityFooterSection />

      {/* Floating Sound Deck Pill Trigger (Always accessible) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsSoundDeckOpen(true)}
          className="btn-pill bg-[#e8e359] text-[#214534] border-[#214534] hover:bg-[#e8e359]/90 text-xs font-bold uppercase py-2 px-4 flex items-center gap-2"
          title="Abrir sintetizador de sonido analógico"
        >
          <Radio className="w-3.5 h-3.5" />
          <span>SINTETIZADOR MOTOR</span>
        </button>
      </div>

      {/* Floating Modal Sound Deck Drawer */}
      {isSoundDeckOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103d26]/80 backdrop-blur-none animate-fadeIn">
          <div className="w-full max-w-2xl">
            <SoundDeck
              isOpen={isSoundDeckOpen}
              onClose={() => setIsSoundDeckOpen(false)}
              isFloating={true}
            />
          </div>
        </div>
      )}

      {/* Modal Video Player */}
      <ModalVideoPlayer
        episode={selectedEpisode}
        onClose={() => setSelectedEpisode(null)}
      />

      {/* Modal Historical Galvez Drag Racing Regulations */}
      <ModalGalvezRegs
        isOpen={isGalvezRegsOpen}
        onClose={() => setIsGalvezRegsOpen(false)}
      />

      {/* Navigation Index Modal */}
      <NavigationIndexModal
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
