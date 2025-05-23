import React from "react";
const Kayak: React.FC<
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
        d="M20.816 3.185C10.945 1.503 2.111 11.619 3.072 20.929c9.309.959 19.425-7.874 17.744-17.744M7.006 16.992h.009M17.019 6.996h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.518 14.482c-.69-.69-.69-1.81 0-2.5l2.463-2.464a1.768 1.768 0 1 1 2.501 2.5l-2.463 2.464c-.69.69-1.81.69-2.501 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.045 17.98-6.058-6.05-5.99-5.995m12.048 12.044c-.556.535-.403 1.841.925 4.021L22 19.002c-1.778-1.24-3.324-1.63-3.955-1.023M5.997 5.935c-.535.548-1.835.388-3.997-.945L5.004 2c1.222 1.774 1.601 3.312.993 3.935"
      />
    </svg>
  );
};
export default Kayak;
