import React from "react";
const WifiError_01: React.FC<
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
        strokeWidth={1.5}
        d="M12 18.5h.012m-.012-3v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.091 19.486-4.234-7.057a1 1 0 0 0-1.714 0l-4.234 7.056A1 1 0 0 0 7.766 21h8.468a1 1 0 0 0 .857-1.515M18.5 10c-3.768-3.333-9-3.333-13 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 7c6.316-5.333 13.684-5.333 20 0"
      />
    </svg>
  );
};
export default WifiError_01;
