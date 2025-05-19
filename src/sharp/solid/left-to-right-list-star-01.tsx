import React from "react";
const LeftToRightListStar_01: React.FC<
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
        d="M3 6.5h10v-2H3zM3 13h10v-2H3zM3 19.5h10v-2H3zM18.5 6.866l.81 1.39 1.296-.756-.8-1.372H21v-1.5h-1.194l.8-1.372L19.31 2.5l-.81 1.39-.81-1.39-1.296.756.8 1.372H16v1.5h1.194l-.8 1.372 1.296.756zM18.5 20.11l.81 1.39 1.296-.756-.8-1.372H21v-1.5h-1.194l.8-1.372-1.296-.756-.81 1.39-.81-1.39-1.296.756.8 1.372H16v1.5h1.194l-.8 1.372 1.296.756z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListStar_01;
