import React from "react";
const Unlink_02: React.FC<
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
        d="M11.296 3.834a6.272 6.272 0 0 1 8.87 8.87L17.713 15.2a1 1 0 0 1-1.426-1.402l2.462-2.506a4.272 4.272 0 1 0-6.042-6.042l-.006.007-2.5 2.455a1 1 0 0 1-1.402-1.426zM7.701 8.787a1 1 0 0 1 .012 1.414l-2.462 2.506a4.272 4.272 0 1 0 6.042 6.042l.006-.007 2.5-2.455a1 1 0 0 1 1.402 1.426l-2.497 2.453a6.272 6.272 0 0 1-8.87-8.87L6.287 8.8A1 1 0 0 1 7.7 8.787M19 17a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-2 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M7 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unlink_02;
