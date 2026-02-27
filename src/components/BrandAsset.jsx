export default function BrandAsset({ className = '' }) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <img
                src="/images/marca-personal-ai.png"
                alt="Logo personal Lic. Silvia Quiroz"
                className="w-full h-full object-contain"
            />
        </div>
    );
}
