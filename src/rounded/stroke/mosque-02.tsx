import React from "react";
const Mosque_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.965 13C2.848 9.5 8.165 7.75 9.5 6c1.336 1.75 6.652 3.5 3.535 7zM18.263 7c-2.059-2.5.605-3.75 1.487-5 .883 1.25 3.546 2.5 1.487 5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.5 3.657A1.172 1.172 0 1 1 8.843 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 4v2M17.5 17v5H4.643c-1.01 0-1.515 0-1.83-.293C2.5 21.414 2.5 20.943 2.5 20v-3c0-1.886 0-2.828.628-3.414C3.755 13 4.765 13 6.786 13h6.428c2.02 0 3.03 0 3.658.586S17.5 15.114 17.5 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 22h2.687c2.15 0 3.226 0 3.846-.658s.514-1.685.3-3.74L21.228 7h-3.124l-.972 6.5M7.5 22v-2c-.017-3 2.5-4 2.5-4s2.517 1 2.5 4v2"
      />
    </svg>
  );
};
export default Mosque_02;
