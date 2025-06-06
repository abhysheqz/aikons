import React from "react";
const Stamp_01: React.FC<
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
        d="M5 19v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M12 2a4 4 0 0 0-4 4c0 1.385.87 2.331 1.399 3.522a3 3 0 0 1-1.253 3.823l-3.638 2.08A2 2 0 0 0 3.5 17.16V18.5a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-1.34a2 2 0 0 0-1.008-1.736l-3.638-2.079a3 3 0 0 1-1.253-3.823C15.131 8.332 16 7.385 16 6a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default Stamp_01;
