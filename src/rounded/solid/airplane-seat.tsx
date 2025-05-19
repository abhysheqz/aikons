import React from "react";
const AirplaneSeat: React.FC<
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
        d="M16.6 15.45a1 1 0 0 1 .2 1.4l-1.8 3.4h3a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2h4.5l2.7-4.6a1 1 0 0 1 1.4-.2"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.5 10.25H18"
      />
      <path
        fill="currentColor"
        d="M8.482 17.75h9.49c1.12 0 2.028-.892 2.028-1.993 0-1.507-2.028-1.993-2.028-1.993S14.284 12.347 10 13.75c0 0-.139-5.127-2.29-10.83-.425-1.124-1.809-1.508-2.825-.843a1.94 1.94 0 0 0-.846 2.01l2.454 12.06a2.02 2.02 0 0 0 1.989 1.603"
      />
    </svg>
  );
};
export default AirplaneSeat;
