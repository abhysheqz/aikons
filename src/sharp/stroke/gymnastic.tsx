import React from "react";
const Gymnastic: React.FC<
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
        d="M17.5 10c2.588.677 4.5 3.063 4.5 5.904C22 19.271 19.314 22 16 22a5.9 5.9 0 0 1-2-.347m-3.5-8.19a6.2 6.2 0 0 0-.5 2.441c0 .928.204 1.808.57 2.596"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.998 7c1.417 0 2.205 3.498.65 3.924-.37.101-.93.101-1.301 0-1.552-.425-.753-3.924.65-3.924ZM16 7V2M6.5 10c-2.588.677-4.5 3.063-4.5 5.904C2 19.271 4.686 22 8 22s6-2.73 6-6.096c0-2.84-1.912-5.227-4.5-5.904"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.998 7c1.417 0 2.205 3.498.65 3.924-.37.101-.93.101-1.301 0C5.795 10.499 6.594 7 7.997 7ZM8 7V2"
      />
    </svg>
  );
};
export default Gymnastic;
