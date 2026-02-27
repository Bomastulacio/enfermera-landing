export default function BrandAsset({ className = '' }) {
    return (
        <div className={`overflow-hidden flex items-center justify-center bg-white ${className}`}>
            <img
                src="/images/marca-personal.png"
                alt="Logo personal Lic. Silvia Quiroz"
                className="w-full h-full object-contain"
                onError={(e) => {
                    // Fallback in case of .jpg
                    e.target.onerror = null;
                    e.target.src = '/images/marca-personal.jpg';
                }}
            />
        </div>
    );
}
