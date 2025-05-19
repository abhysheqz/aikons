import React from "react";
const LeftToRightListStar: React.FC<
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
        d="M21 6.5H11v-2h10zM21 13H11v-2h10zM21 19.5H11v-2h10zM5.5 6.866l-.81 1.39L3.393 7.5l.8-1.372H3v-1.5h1.194l-.8-1.372L4.689 2.5 5.5 3.89l.81-1.39 1.296.756-.8 1.372H8v1.5H6.806l.8 1.372-1.295.756zM5.5 20.11l-.81 1.39-1.296-.756.8-1.372H3v-1.5h1.194l-.8-1.372 1.295-.756.811 1.39.81-1.39 1.296.756-.8 1.372H8v1.5H6.806l.8 1.372-1.295.756z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListStar;
