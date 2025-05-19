import React from "react";
const ArmoredBoot: React.FC<
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
        d="M21 22H6a3 3 0 0 1-3-3V6s3-4 10-4v11.5s4.711 2.566 5.443 2.977C20 17.5 21 18 21 22Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17s2.007-1 2.95-.706c1.129.351 2.013 1.33 3.05-.023C10.132 14.945 11.992 14 14 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.059 17c-1 .333-3 1.8-3 5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.059 8.5h4M3 12h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6h.009M10 10h.009"
      />
    </svg>
  );
};
export default ArmoredBoot;
