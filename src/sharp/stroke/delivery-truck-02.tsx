import React from "react";
const DeliveryTruck_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.585 17.5c0 1.38-1.082 2.5-2.417 2.5s-2.416-1.12-2.416-2.5 1.082-2.5 2.416-2.5c1.335 0 2.417 1.12 2.417 2.5ZM9.919 17.5c0 1.38-1.082 2.5-2.417 2.5s-2.416-1.12-2.416-2.5S6.168 15 7.502 15c1.335 0 2.417 1.12 2.417 2.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.67 7h5.8m-5.8 3h3.866"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.023 4 13.246.022V16m.716-9.41h3.137l2.899 4.682v6.723h-2.414M2.75 12.82v5.163h2.396m4.82.018h4.83"
      />
    </svg>
  );
};
export default DeliveryTruck_02;
