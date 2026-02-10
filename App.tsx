import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  User, 
  Check, 
  ChevronRight
} from 'lucide-react';

const TikTokIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

const TelegramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.333 4.606l-16.712 6.447c-1.138.456-1.131 1.092-.208 1.375l4.288 1.338 9.923-6.258c.469-.285.899-.132.546.182l-8.04 7.252-.312 4.673c.458 0 .66-.21.916-.458l2.198-2.138 4.57 3.376c.843.465 1.448.226 1.658-.785l2.997-14.127c.307-1.233-.473-1.794-1.282-1.43z"/>
  </svg>
);

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  bgClass: string;
  glowClass?: string;
  ariaLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, bgClass, glowClass = '', ariaLabel }) => (
  <a 
    href={href} 
    aria-label={ariaLabel}
    className={`w-[46px] h-[46px] ${bgClass} ${glowClass} rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg hover:brightness-110 social-icon-hover`}
  >
    {icon}
  </a>
);

interface ContentCardProps {
  href: string;
  label: string;
  title: string;
  emoji: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ href, label, title, emoji }) => (
  <div className="w-full px-5 mb-4">
    <a 
      href={href} 
      className="group block w-full outline-none"
    >
      <div className="relative w-full py-4 px-4 bg-white/5 backdrop-blur-xl rounded-[24px] border border-white/10 flex items-center gap-4 shadow-xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-active:scale-[0.98]">
        
        {/* Left Icon Section */}
        <div className="w-14 h-14 bg-white/5 rounded-[18px] flex items-center justify-center border border-white/5 group-hover:border-white/15 transition-all duration-500">
           <span className="text-2xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
             {emoji}
           </span>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center gap-0.5">
          <span className="text-[11px] font-bold text-[#EAB308] uppercase tracking-[0.1em] opacity-90 group-hover:opacity-100">
            {label}
          </span>
          <h2 className="text-white text-[16px] font-bold tracking-tight drop-shadow-sm">
            {title}
          </h2>
        </div>

        {/* Right Arrow Section */}
        <div className="pr-2 opacity-30 group-hover:opacity-60 group-hover:translate-x-1 transition-all duration-500">
          <ChevronRight className="w-5 h-5 text-white" />
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute inset-0 rounded-[24px] bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
      </div>
    </a>
  </div>
);

const App: React.FC = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [geoError, setGeoError] = useState(false);
  const [deviceMsg, setDeviceMsg] = useState("");
  const [deviceColor, setDeviceColor] = useState("text-zinc-500");

  const heroImageUrl = "https://files.catbox.moe/uqsxbk.jpg";
  
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      setDeviceMsg("💎 Conteúdo exclusivo em 4K pro seu iPhone.");
      setDeviceColor("text-zinc-400 font-semibold");
    } else if (/Android/i.test(ua)) {
      setDeviceMsg("🔥 App leve e discreto pro seu Android.");
      setDeviceColor("text-zinc-400 font-semibold");
    }
  }, []);

  useEffect(() => {
    const fetchLocation = async (retries = 2) => {
      try {
        const response = await fetch('https://ipwho.is/');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        if (data.success) {
          setLocation(`${data.city} - ${data.region_code}`);
          setGeoError(false);
        } else {
          throw new Error('API returned success: false');
        }
      } catch (err) {
        if (retries > 0) {
          setTimeout(() => fetchLocation(retries - 1), 1000);
        } else {
          console.error('Failed to fetch location:', err);
          setGeoError(true);
        }
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center overflow-x-hidden pb-12">
      <div className="w-full max-w-[430px] relative flex flex-col items-center">
        
        {/* Profile Circle Top Right */}
        <div className="absolute top-4 right-6 z-30">
          <div className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/5 shadow-lg transition-all active:scale-95">
            <User className="w-5 h-5 text-white/90" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img 
            src={heroImageUrl} 
            alt="Maya Privée" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0d1117]/60 to-transparent"></div>
          
          {/* Sombra inferior restaurada ao estilo original (mais alta e intensa) */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1117] from-20% via-[#0d1117]/85 via-60% to-transparent pt-64 pb-8 px-6 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-1.5 mb-1.5">
              <h1 className="text-[24px] font-bold tracking-tight">Maya Privée</h1>
              <span className="verified-badge shadow-[0_0_10px_rgba(88,101,242,0.5)]">
                <Check className="w-3.5 h-3.5 text-white stroke-[4]" />
              </span>
            </div>
            <p className="text-zinc-500 text-[15px] font-medium mb-8">@maya_reserve</p>
            
            <div className="flex items-center gap-4">
              <SocialIcon 
                href="#"
                ariaLabel="Instagram"
                bgClass="instagram-gradient"
                glowClass="glow-insta"
                icon={<Instagram className="w-6 h-6 text-white" />}
              />
              <SocialIcon 
                href="#"
                ariaLabel="TikTok"
                bgClass="bg-black"
                glowClass="glow-tiktok"
                icon={<TikTokIcon className="w-6 h-6" />}
              />
              <SocialIcon 
                href="#"
                ariaLabel="Telegram"
                bgClass="bg-[#0088CC]"
                glowClass="glow-telegram"
                icon={<TelegramIcon className="w-6 h-6 text-white" />}
              />
            </div>
          </div>
        </div>

        {/* Status & Geo Section */}
        <div className="w-full px-6 flex flex-col items-center gap-4 mt-2">
          <div className={`flex items-center gap-2.5 bg-zinc-900/40 px-3.5 py-1.5 rounded-full border border-white/5 transition-all duration-700 ${location || geoError ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative flex h-2 w-2">
              <span className={`animate-status-pulse relative inline-flex rounded-full h-2 w-2 ${geoError ? 'bg-zinc-600' : 'bg-green-500'}`}></span>
            </div>
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest leading-none">
              {geoError ? (
                <span>Localização indisponível</span>
              ) : (
                <span>Online agora em: <span className="text-white">{location || "..."}</span></span>
              )}
            </span>
          </div>

          <div className="flex flex-col items-center text-center px-6">
            <p className="text-[15px] text-zinc-400 font-medium leading-snug italic">
              Só 22 anos...🎀<br />
              Vem ver meu lado mais doce (e o mais escondido também) ✨
            </p>
          </div>
        </div>

        {/* Device specific message */}
        <div className="w-full px-5 mt-4 mb-6 text-center">
           <p className={`text-[13px] italic ${deviceColor} min-h-[1.2rem] transition-all duration-1000`}>
             {deviceMsg}
           </p>
        </div>

        {/* Exclusive Content Cards */}
        <div className="w-full flex flex-col mb-4">
          <ContentCard
            href="https://t.me/Maya_Privee_bot"
            label="Tô Online "
            title="Me chama no Privado..."
            emoji="👀"
          />
          <ContentCard
            href="#"
            label="CONTEÚDO COMPLETO"
            title="0nlyf4ns"
            emoji="💎"
          />
        </div>

        {/* Footer */}
        <footer className="w-full px-6 py-12 flex flex-col items-center border-t border-white/5">
          <p className="text-[11px] text-zinc-600 font-bold tracking-[0.2em] uppercase">
            COPYRIGHT © 2026 • @MAYA_RESERVE
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;