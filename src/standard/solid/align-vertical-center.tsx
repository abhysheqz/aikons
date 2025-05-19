import React from "react";
const AlignVerticalCenter: React.FC<
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
        fill="currentColor"
        d="M2 11.748a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1"
      />
      <path
        fill="currentColor"
        d="M4.25 4.75A1.75 1.75 0 0 1 6.004 3l3 .006a1.75 1.75 0 0 1 1.746 1.75v13.992A1.75 1.75 0 0 1 9 20.498H6a1.75 1.75 0 0 1-1.75-1.75zM13.25 8.75A1.75 1.75 0 0 1 15.002 7l3 .002a1.75 1.75 0 0 1 1.748 1.75v5.996a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75z"
      />
    </svg>
  );
};
export default AlignVerticalCenter;
