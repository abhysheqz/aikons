import React from "react";
const VineSquare: React.FC<
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
        d="M7 7.44C7 9.634 8 15 11.364 17.5c2.136-1.5 3.171-3.112 3.95-4.837m0 0c-3.181-.854-3.285-3.274-2.814-4.608 1.158-2.766 3.763-1.455 3.763.921 0 .438-.058.906-.165 1.39m-.785 2.297c.726.194 1.611.307 2.687.307"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 4.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2Z"
      />
    </svg>
  );
};
export default VineSquare;
