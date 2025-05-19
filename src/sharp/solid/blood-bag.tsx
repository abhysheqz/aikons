import React from "react";
const BloodBag: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 17.75a5 5 0 0 1-5 5v-2a3 3 0 0 0 3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.534 1.535a.97.97 0 0 1 .685-.285H18.78a.97.97 0 0 1 .969.973v15.555a.97.97 0 0 1-.969.972H5.22a.97.97 0 0 1-.969-.972V2.222c0-.258.102-.505.284-.687m13.279 1.66H6.188v3.612c3.359-1.447 4.783-.665 6.272.153 1.296.711 2.64 1.45 5.352.772zm-7.596 8.09 1.8-1.785 1.751 1.769a2.464 2.464 0 0 1 0 3.504 2.53 2.53 0 0 1-3.534.016 2.48 2.48 0 0 1-.017-3.504"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BloodBag;
