import React from "react";
const IndiaGate: React.FC<
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
        fillRule="evenodd"
        d="M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a1 1 0 1 1-2 0V3H6v3a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.25a.75.75 0 0 0-.75.75v3H7a1 1 0 1 1 0 2H3.25v11c0 .414.336.75.75.75h4v-5.477C8 14.997 9.71 13 12 13s4 1.997 4 4.273v5.477h4a.75.75 0 0 0 .75-.75V11H17a1 1 0 1 1 0-2h3.75V6a.75.75 0 0 0-.75-.75zm10 12.023v5.477h-4v-5.477c0-1.34.976-2.273 2-2.273s2 .934 2 2.273M11.5 9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IndiaGate;
