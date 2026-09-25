import Image from "next/image";

// shows the real photo if there is one, otherwise a placeholder block
export default function Photo({ src, alt, label, className = "", sizes = "100vw", priority = false }) {
  return (
    <div className={"photo " + className}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
      ) : (
        <div className="photo-ph" role="img" aria-label={alt}>
          <span className="photo-ph-label">Photo placeholder: {label}</span>
        </div>
      )}
    </div>
  );
}
