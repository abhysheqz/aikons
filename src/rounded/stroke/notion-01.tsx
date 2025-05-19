import React from "react";
const Notion_01: React.FC<
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
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.429 10 5.09 6.396c.197.247.381.48.697.568.13.036.272.036.555.036.28 0 .42 0 .527-.055.291-.148.273-.46.273-.745v-2.771M8.43 10V7m0 3v7m0-10H9.53c.477 0 .715 0 .921.1s.355.287.65.661l4.47 5.668M8.43 7H7m1.429 10H7m1.429 0H10m5.571-10v6.429m0-6.429H14m1.571 0H17"
      />
    </svg>
  );
};
export default Notion_01;
