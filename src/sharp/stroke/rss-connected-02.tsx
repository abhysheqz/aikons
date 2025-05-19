import React from "react";
const RssConnected_02: React.FC<
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
        d="m16.5 8.5-.53.53.53.53.53-.53zm-2.03-.97 1.5 1.5 1.06-1.06-1.5-1.5zm2.56 1.5 3-3-1.06-1.06-3 3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 21H22v-8M3 11.5V6h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.982 21h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"
      />
      <circle
        cx={17}
        cy={7}
        r={5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default RssConnected_02;
