import React from "react";
const FrenchFries_02: React.FC<
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
        d="M12.009 17H12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 13V2h-4v11M18.5 10 20 7l-3.5-2-2.5 5"
      />
      <path
        fill="currentColor"
        d="M9.357 8.386a.75.75 0 0 0 1.286-.772zM7 3l.643-.386a.75.75 0 0 0-1.015-.265zM3.5 5l-.372-.651a.75.75 0 0 0-.276 1.029zm7.143 2.614-3-5-1.286.772 3 5zM6.628 2.35l-3.5 2 .744 1.302 3.5-2zM2.852 5.378l3.5 6 1.296-.756-3.5-6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10c5 0 5.808 2.755 6 3.5h6c.192-.745 1-3.5 6-3.5l-2.621 10.485A2 2 0 0 1 16.439 22H7.561a2 2 0 0 1-1.94-1.515z"
      />
    </svg>
  );
};
export default FrenchFries_02;
