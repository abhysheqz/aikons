import React from "react";
const Hoodie: React.FC<
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
        d="M18 11.5V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 16c0 1 0 1.999 1.5 2.998M10 16c0 1 0 1.999-1.5 2.998M14 5l-2 4-2-4M17.5 6.5l2.001 1.06 2.159 4.034a2 2 0 0 1 .195 1.348l-1.024 4.962a2 2 0 0 1-1.959 1.596h-.87M6.5 6.5l-2 1.06-2.158 4.034a2 2 0 0 0-.196 1.348l1.025 4.962A2 2 0 0 0 5.129 19.5H6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 6 6 3 6-3c-.5-1.333-2.4-4-6-4S6.5 4.667 6 6Z"
      />
    </svg>
  );
};
export default Hoodie;
