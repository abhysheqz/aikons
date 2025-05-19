import React from "react";
const PaintBoard: React.FC<
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
        d="M8 15.002 8.009 15"
      />
      <circle cx={9} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle
        cx={16.5}
        cy={9.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12c0 5.523 4.477 10 10 10h.07a7 7 0 0 1 9.606-7.47c.212-.808.324-1.656.324-2.53 0-5.523-4.477-10-10-10S2 6.477 2 12Z"
      />
    </svg>
  );
};
export default PaintBoard;
