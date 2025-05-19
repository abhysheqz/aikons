import React from "react";
const GoldIngots: React.FC<
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
        d="M7.823 4.96A2.75 2.75 0 0 1 10.457 3h4.024a2.75 2.75 0 0 1 2.634 1.96l1.072 3.574a.75.75 0 0 1-.718.966h-10a.75.75 0 0 1-.719-.966zM3.364 13.083A2.75 2.75 0 0 1 6.032 11h3.877a2.75 2.75 0 0 1 2.667 2.083l1.311 5.243A1.75 1.75 0 0 1 12.19 20.5H3.751a1.75 1.75 0 0 1-1.698-2.174z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.364 13.083A2.75 2.75 0 0 1 6.032 11h3.877a2.75 2.75 0 0 1 2.667 2.083l1.311 5.243A1.75 1.75 0 0 1 12.19 20.5H3.751a1.75 1.75 0 0 1-1.698-2.174z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.929 20.5h6.261a1.75 1.75 0 0 0 1.698-2.174l-1.31-5.243A2.75 2.75 0 0 0 18.908 11h-3.876c-.564 0-1.094.171-1.537.47.24.377.423.797.537 1.25l1.31 5.242c.23.916.047 1.819-.414 2.538"
      />
    </svg>
  );
};
export default GoldIngots;
