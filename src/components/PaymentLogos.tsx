import pixLogo from "@/assets/images/PIX_Logo.webp";
import visaLogo from "@/assets/images/VISA_Logo.webp";
import mastercardLogo from "@/assets/images/Mastercard_Logo.webp";

const PaymentLogos = () => (
  <div className="mt-3 flex justify-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
    <div className="h-11 w-20 bg-white/90 rounded flex items-center justify-center p-2">
      <img className="max-h-full max-w-full object-contain" alt="PIX" src={pixLogo} />
    </div>
    <div className="h-11 w-20 bg-white/90 rounded flex items-center justify-center p-2">
      <img className="max-h-full max-w-full object-contain" alt="Visa" src={visaLogo} />
    </div>
    <div className="h-11 w-20 bg-white/90 rounded flex items-center justify-center p-2">
      <img className="max-h-full max-w-full object-contain" alt="Mastercard" src={mastercardLogo} />
    </div>
  </div>
);

export default PaymentLogos;
