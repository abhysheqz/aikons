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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 17-1 5m9-5 1 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 17h12v-1c0-1.657-1.151-3-2.571-3H8.57C7.151 13 6 14.343 6 16zM16.483 13C17.37 11.605 18 9.964 18 8.355 18 4.305 15.314 2 12 2S6 4.305 6 8.355c0 1.609.63 3.25 1.517 4.645"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.67 2c.209 1.133.33 2.568.33 4.274 0 2.419-.364 4.904-.806 6.726M10.33 2C10.121 3.133 10 4.568 10 6.274c0 2.419.364 4.904.806 6.726"
      />
    </svg>
  );
};
export default Chair_05;
