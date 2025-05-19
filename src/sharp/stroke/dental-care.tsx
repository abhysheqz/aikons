import React from "react";
const DentalCare: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 4.176q.332-.272.689-.626c2.306-2.284 5.446-1.837 6.917 0l.014.018c.63.786 1.834 2.29 1.201 5.932M11 4.176C12.497 5.412 13.5 5.5 14 5m-3-.824q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C2.378 4.82-.222 7.98 6.142 19.24c.264.466.789.76 1.354.76.902 0 1.607-.72 1.636-1.56.046-1.303.298-2.755 1.001-3.44"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.723 16.722 17 18l2-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13.8c0 4.5-.71 6.85-4.5 8.2-3.79-1.35-4.5-3.7-4.5-8.2l4.5-1.8z"
      />
    </svg>
  );
};
export default DentalCare;
