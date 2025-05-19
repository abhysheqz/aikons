import React from "react";
const Inequality_02: React.FC<
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
        d="M2 20a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M5.932 3.357a1 1 0 0 1 1.41-.123l14.3 12A1 1 0 0 1 21 17H3a1 1 0 1 1 0-2h15.253L6.056 4.766a1 1 0 0 1-.124-1.409"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Inequality_02;
