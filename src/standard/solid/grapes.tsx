import React from "react";
const Grapes: React.FC<
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
        d="M8.25 10a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.667 4.374C13.176 5.224 13 6.288 13 7a1 1 0 1 1-2 0c0-.955.223-2.39.934-3.624C12.673 2.092 13.97 1 16 1a1 1 0 1 1 0 2c-1.17 0-1.873.575-2.334 1.374"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.047 13.143A5.03 5.03 0 0 1 6.95 10c0-1.188.41-2.28 1.097-3.143a3.75 3.75 0 1 0 0 6.285M15.953 13.143a3.75 3.75 0 1 0 0-6.285A5.03 5.03 0 0 1 17.05 10c0 1.188-.41 2.28-1.097 3.143M15.02 14.047a5.03 5.03 0 0 1-3.77.947v.005a3.75 3.75 0 1 0 7.5 0v-.005a5.032 5.032 0 0 1-3.507-.763 1.3 1.3 0 0 1-.223-.184M10 14.638a5 5 0 0 1-1.02-.591 1.3 1.3 0 0 1-.223.183 5.03 5.03 0 0 1-3.507.764v.005a3.75 3.75 0 0 0 5.799 3.141 5.04 5.04 0 0 1-1.099-3.146 1.3 1.3 0 0 1 .05-.357M12.002 19.06a5.02 5.02 0 0 1-3.611.953 3.752 3.752 0 0 0 7.223 0q-.3.037-.612.037a5.02 5.02 0 0 1-3-.99"
      />
    </svg>
  );
};
export default Grapes;
