import React from "react";
const Hut: React.FC<
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
        d="M2 22h20M4 11v11m16-11v11M9.5 22v-4.5a2.5 2.5 0 0 1 5 0V22M10 2c7 3.5 12 9 12 9H2s5-5.5 12-9M6.5 7h11"
      />
    </svg>
  );
};
export default Hut;
