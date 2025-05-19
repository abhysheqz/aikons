import React from "react";
const Dice: React.FC<
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
        d="M20.5 13H15a1.5 1.5 0 0 0-1.5 1.5V20a1.5 1.5 0 0 0 1.5 1.5h5.5A1.5 1.5 0 0 0 22 20v-5.5a1.5 1.5 0 0 0-1.5-1.5M16.94 9.56a1.5 1.5 0 0 0 0-2.12l-3.88-3.88a1.5 1.5 0 0 0-2.12 0L7.06 7.44a1.5 1.5 0 0 0 0 2.12l3.88 3.88a1.5 1.5 0 0 0 2.12 0zM9 13H3.5A1.5 1.5 0 0 0 2 14.5V20a1.5 1.5 0 0 0 1.5 1.5H9a1.5 1.5 0 0 0 1.5-1.5v-5.5A1.5 1.5 0 0 0 9 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 8.506.006-.006"
      />
    </svg>
  );
};
export default Dice;
