import React from "react";
const WifiNoSignal: React.FC<
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
        d="M1.464 7.677A14.7 14.7 0 0 1 12 3.25c4.127 0 7.86 1.696 10.536 4.427a.75.75 0 0 1 .071.965l-10 13.798a.75.75 0 0 1-1.214 0l-10-13.798a.75.75 0 0 1 .071-.965"
      />
    </svg>
  );
};
export default WifiNoSignal;
