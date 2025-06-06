import React from "react";
const Image_03: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 3.5h-4c-3.771 0-5.657 0-6.828 1.172S2 7.729 2 11.5v2c0 3.771 0 5.657 1.172 6.828S6.229 21.5 10 21.5h4c3.771 0 5.657 0 6.828-1.172S22 17.271 22 13.5v-2c0-3.771 0-5.657-1.172-6.828S17.771 3.5 14 3.5"
      />
      <circle
        cx={8.5}
        cy={9}
        r={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.5 17.5-5.152-5.62a1.17 1.17 0 0 0-1.69-.037L10 16.5l-2.16-2.16a1.16 1.16 0 0 0-1.686.049L2.5 18.5"
      />
    </svg>
  );
};
export default Image_03;
