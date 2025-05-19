import React from "react";
const FallingStar: React.FC<
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
        d="M16.707 1.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0m6 0a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0m-2 8a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0M8.002 9.725c.25 0 .485.12.63.324l2.343 3.28 3.24.925a.775.775 0 0 1 .382 1.242l-2.285 2.741.459 3.667a.775.775 0 0 1-1.042.821l-3.727-1.398-3.728 1.398a.775.775 0 0 1-1.041-.822l.458-3.666-2.285-2.741a.775.775 0 0 1 .383-1.242l3.24-.925 2.342-3.28A.78.78 0 0 1 8 9.725"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FallingStar;
