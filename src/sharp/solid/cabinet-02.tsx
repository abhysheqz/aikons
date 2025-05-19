import React from "react";
const Cabinet_02: React.FC<
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
        d="m6.02 17.25-.956 2.548 1.873.702 1.22-3.25h3.093V5.5h1.5v11.75h3.095l1.22 3.25 1.872-.702-.956-2.548H19a.75.75 0 0 0 .747-.688L20.67 5.5H22v-2H2v2h1.33l.923 11.062A.75.75 0 0 0 5 17.25zm2.24-5.75v-2h1.5v2zm7.49 0v-2h-1.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cabinet_02;
