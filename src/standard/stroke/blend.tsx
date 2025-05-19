import React from "react";
const Blend: React.FC<
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
      <circle cx={17} cy={17} r={5} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 13H3.5A1.5 1.5 0 0 1 2 11.5v-8A1.5 1.5 0 0 1 3.5 2h8A1.5 1.5 0 0 1 13 3.5V7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.035 19a6.043 6.043 0 0 1 1.007-12A6.04 6.04 0 0 1 19 12.035"
      />
    </svg>
  );
};
export default Blend;
