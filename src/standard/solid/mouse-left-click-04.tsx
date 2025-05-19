import React from "react";
const MouseLeftClick_04: React.FC<
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
        fillRule="evenodd"
        d="M5.682 1.268a1 1 0 0 1 .05 1.414c-.933 1-1.543 2.19-1.744 3.473a1 1 0 0 1-1.976-.31c.27-1.716 1.08-3.264 2.256-4.527a1 1 0 0 1 1.414-.05M12.75 1.273c-2.808.179-4.71 1.374-5.887 3.273C5.625 6.54 5.25 9.216 5.25 12c0 2.785.375 5.459 1.613 7.454 1.28 2.064 3.414 3.296 6.637 3.296s5.357-1.232 6.637-3.296c1.238-1.995 1.613-4.67 1.613-7.454 0-2.785-.375-5.459-1.613-7.454-1.178-1.9-3.08-3.094-5.887-3.273V5.27c.848.12 1.5.85 1.5 1.732v2.5A1.75 1.75 0 0 1 14 11.25h-1a1.75 1.75 0 0 1-1.75-1.75V7a1.75 1.75 0 0 1 1.5-1.732zm0 5.728a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_04;
