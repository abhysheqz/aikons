import React from "react";
const AlAqsaMosque: React.FC<
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
        d="M6 12.997h11.998v9H6z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.999 21.997v-5h-4v5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.206 9.998c1.105-2.898-1.064-6-4.208-6-3.143 0-5.312 3.102-4.207 6M11.998 3.997V2M7.999 12.996v-3m7.999 3v-3M5.999 9.99h11.999"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.004 15.031v6.957h-3.9a.1.1 0 0 1-.1-.1v-8.786a.1.1 0 0 1 .145-.089l3.8 1.929a.1.1 0 0 1 .055.09ZM2 15.026v6.957h3.9a.1.1 0 0 0 .1-.1v-8.786a.1.1 0 0 0-.145-.089l-3.8 1.929a.1.1 0 0 0-.056.09Z"
      />
    </svg>
  );
};
export default AlAqsaMosque;
