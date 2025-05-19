import React from "react";
const MoreVerticalSquare_02: React.FC<
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
        strokeWidth={2}
        d="M11.992 12h.009M11.984 16h.01M12 8h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.484 12c0-4.478 0-6.718 1.392-8.109C5.266 2.5 7.506 2.5 11.984 2.5s6.718 0 8.11 1.391c1.39 1.391 1.39 3.63 1.39 8.109 0 4.478 0 6.718-1.39 8.109-1.392 1.391-3.631 1.391-8.11 1.391s-6.717 0-8.108-1.391S2.484 16.479 2.484 12Z"
      />
    </svg>
  );
};
export default MoreVerticalSquare_02;
