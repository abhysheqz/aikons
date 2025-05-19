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
        d="m17.41 17.642-2.236 2.608H19v2H7v-2h5.54l3.352-3.91z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 17.75h10.972c1.12 0 2.028-.892 2.028-1.992 0-1.507-2.028-1.993-2.028-1.993S14.284 12.347 10 13.75c0 0-.139-5.128-2.29-10.83-.425-1.125-1.809-1.509-2.825-.843a1.94 1.94 0 0 0-.846 2.009z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 9.25H19v2h-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AirplaneSeat;
