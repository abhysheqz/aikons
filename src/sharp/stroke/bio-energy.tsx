import React from "react";
const BioEnergy: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 12.5a3.5 3.5 0 1 1-7 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.268 20.033 8.732 22c1.465-2.495 5.073-2.495 6.538 0l3.464-1.967c-1.447-2.463.41-5.566 3.266-5.566V12.5H2v1.967c2.857 0 4.714 3.103 3.268 5.566M12 12V6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.741 7.741c.549-1.538.226-3.298-.979-4.503S7.797 1.71 6.26 2.258c-.549 1.539-.226 3.3.979 4.504 1.205 1.205 2.965 1.528 4.503.98ZM12.216 9.784c-.458-1.281-.189-2.748.816-3.753s2.47-1.273 3.752-.815c.458 1.281.189 2.748-.815 3.753s-2.472 1.273-3.753.815Z"
      />
    </svg>
  );
};
export default BioEnergy;
