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
        strokeWidth={1.5}
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c.842 0 2 .116 2-1 0-.609-.317-1.079-.631-1.546-.46-.683-.917-1.359-.369-2.454.667-1.333 1.778-1.333 3.482-1.333.851 0 1.851 0 3.018-.167 2.101-.3 2.5-1.592 2.5-3.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 15.002 7.009 15"
      />
      <circle
        cx={9.5}
        cy={8.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle
        cx={16.5}
        cy={9.5}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default PaintBoard;
