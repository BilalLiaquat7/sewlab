export default function Tooltip({ src, alt, tooltipText }) {
  <div className="relative inline-block group">
    <img src={src} alt={alt} className="w-32 h-32" />
    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gray-800 text-white text-sm rounded-md p-2 absolute z-10 -left-16 transform -translate-y-2/4">
      {tooltipText}
    </div>
  </div>;
}
