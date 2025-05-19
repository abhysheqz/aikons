import React from "react";
const ArrangeByLettersAz: React.FC<
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
        d="M3 14a1 1 0 0 1 1-1h5.4a1 1 0 0 1 .825 1.566L6.498 20H10a1 1 0 1 1 0 2H4.6a1 1 0 0 1-.825-1.565L7.502 15H4a1 1 0 0 1-1-1M7 2a1 1 0 0 1 .908.58l3 6.5a1 1 0 0 1-1.816.84L7 5.385 4.908 9.92a1 1 0 0 1-1.816-.838l3-6.5A1 1 0 0 1 7 2M17.5 3a1 1 0 0 1 1 1v12.5H20a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 15 16.5h1.5V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrangeByLettersAz;
