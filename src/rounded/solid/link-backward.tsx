import React from "react";
const LinkBackward: React.FC<
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
        fill="currentColor"
        d="M11.25 4.696a1.446 1.446 0 0 0-2.506-.984L2.79 10.123a2.023 2.023 0 0 0 0 2.754l5.953 6.41a1.446 1.446 0 0 0 2.506-.983v-3.027c4.681.337 7.247 3.76 7.928 4.815.253.391.693.658 1.194.658.761 0 1.378-.617 1.378-1.378V18.5c0-5.853-4.678-10.614-10.5-10.747z"
      />
    </svg>
  );
};
export default LinkBackward;
