import React from "react";
const TravelBag: React.FC<
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
        d="M8.25 3A.75.75 0 0 1 9 2.25h6a.75.75 0 0 1 .75.75v4.25h-1.5v-3.5h-4.5v3.5h-1.5zM9.25 10.94l1.81 1.81-1.81 1.81-1.81-1.81z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5.75h3.25v.75A3.25 3.25 0 0 1 3 9.75h-.75V6.5A.75.75 0 0 1 3 5.75m-.75 10.5v-5H3A4.75 4.75 0 0 0 7.75 6.5v-.75h8.5v.75A4.75 4.75 0 0 0 21 11.25h.75v5H21A4.75 4.75 0 0 0 16.25 21v.75h-8.5V21A4.75 4.75 0 0 0 3 16.25zm15.5 5.5H21a.75.75 0 0 0 .75-.75v-3.25H21A3.25 3.25 0 0 0 17.75 21zm-15.5-4V21c0 .414.336.75.75.75h3.25V21A3.25 3.25 0 0 0 3 17.75zM21.75 6.5v3.25H21a3.25 3.25 0 0 1-3.25-3.25v-.75H21a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.261 13.979.696 3.477-3.478-.695zM14.5 9.75c.69 0 1.25.56 1.25 1.25v.01a1.25 1.25 0 1 1-2.5 0V11c0-.69.56-1.25 1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TravelBag;
