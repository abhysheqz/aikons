import React from "react";
const Bitcoin_04: React.FC<
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
        d="M7.998 6c3.312 0 5.998-.895 5.998-2S11.31 2 7.998 2 2 2.895 2 4s2.685 2 5.998 2ZM15.496 9a6.5 6.5 0 0 0-6.498 6.5 6.499 6.499 0 1 0 12.995 0c0-3.59-2.909-6.5-6.497-6.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.934 18.167v-5.334m1.562 0V11.5m0 8v-1.333M13.934 15.5h3.124m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.937 1h-4.062m4.062-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1h-4.062"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.766 10.022c-3.315 0-5.774-.928-5.774-1.922m12.004 0V3.901m-12.004 0v8.132c0 .806 1.761 1.645 4.198 1.874"
      />
    </svg>
  );
};
export default Bitcoin_04;
