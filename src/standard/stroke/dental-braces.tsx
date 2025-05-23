import React from "react";
const DentalBraces: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 6c.5.5 1.503.412 3-.824m0 0q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C3.378 5.82.778 8.98 7.142 20.24c.264.466.789.76 1.354.76.902 0 1.607-.72 1.636-1.56.063-1.782.408-3.837 1.868-3.837s1.806 2.055 1.868 3.837c.029.84.734 1.56 1.636 1.56.565 0 1.09-.294 1.354-.76 6.365-11.261 3.764-14.42 2.748-15.69-1.471-1.837-4.611-2.284-6.917 0q-.357.353-.689.626"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 13h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1M10 11H3.5m17 0H14"
      />
    </svg>
  );
};
export default DentalBraces;
