import React from "react";
const Chrysler: React.FC<
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
        d="M12.75 10a.75.75 0 0 0-1.5 0v.286a7.75 7.75 0 0 0-7 7.714v4c0 .414.336.75.75.75h3.25v-4H8a.75.75 0 0 1 0-1.5h.325a3.76 3.76 0 0 1 2.925-2.925V14a.75.75 0 0 1 1.5 0v.325a3.76 3.76 0 0 1 2.925 2.925H16a.75.75 0 0 1 0 1.5h-.25v4H19a.75.75 0 0 0 .75-.75v-4a7.75 7.75 0 0 0-7-7.714zm1.5 12.75V18a2.25 2.25 0 0 0-4.5 0v4.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a.75.75 0 0 1 .75.75v.325c1.712.347 3 1.86 3 3.675v2a1 1 0 0 1-.004.079A4.73 4.73 0 0 1 16.75 11v1a.75.75 0 0 1-1.5 0v-1a3.25 3.25 0 0 0-6.5 0v1a.75.75 0 0 1-1.5 0v-1a4.73 4.73 0 0 1 1.004-2.921A1 1 0 0 1 8.25 8V6a3.75 3.75 0 0 1 3-3.675V2a.75.75 0 0 1 .75-.75M9.75 6.816c.46-.248.965-.422 1.5-.507V6a.75.75 0 0 1 1.5 0v.309c.535.085 1.04.259 1.5.507V6a2.25 2.25 0 0 0-4.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chrysler;
