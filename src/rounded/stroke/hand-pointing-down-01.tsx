import React from "react";
const HandPointingDown_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.834 2.001v.948c0 .645-.209 1.274-.595 1.792L4.58 9.643c-.422.566-.759 1.267-.48 1.915.45 1.049 1.723 1.73 3.28.158l1.598-1.71V20.43c.056 2.044 3.345 2.145 3.486 0v-5.94c1.48.191 8.454-.852 7.437-5.272l-.143-.634c-.206-.918-.814-2.556-1.485-3.513-.698-.997-.451-2.626-.451-3.07"
      />
    </svg>
  );
};
export default HandPointingDown_01;
