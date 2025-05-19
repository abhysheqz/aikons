import React from "react";
const Chair_05: React.FC<
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
        d="m8 17-1 5m9-5 1 5M6 16v1h12v-1a2.25 2.25 0 0 0-1.385-2.077 12 12 0 0 0-9.23 0A2.25 2.25 0 0 0 6 16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.67 2c.209 1.133.33 2.568.33 4.274 0 2.419-.364 4.904-.806 6.726M10.33 2C10.121 3.133 10 4.568 10 6.274c0 2.419.364 4.904.806 6.726"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.737 13.5C6.663 12.28 6 10.352 6 8.5 6 4.772 8.686 2 12 2s6 2.772 6 6.5c0 1.852-.663 3.78-1.737 5"
      />
    </svg>
  );
};
export default Chair_05;
