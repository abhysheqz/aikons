import React from "react";
const BirthdayCake: React.FC<
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
        d="M13.494 4.5a1.5 1.5 0 1 1-3 0c0-.829 1.5-2.5 1.5-2.5s1.5 1.671 1.5 2.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.995 6v3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.914 14.83 6.496 22h10.998l1.582-7.17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m16.87 9.03-9.36.022c-.627-.03-1.36-.021-1.975.044-2.41.256-3.747 3.963-1.037 5.517.557.382 1.037.382 1.765.382 1.688.037 2.65-1.829 2.726-2.841.425 3.125 3.002 2.965 4.063 2.685 1.063-.28 1.811-1.773 1.936-2.773.126 1.098.759 2.344 1.883 2.785 1.164.456 2.414-.011 2.916-.458.894-.753 1.215-1.506 1.215-2.62-.281-3.096-3.804-2.764-4.131-2.743Z"
      />
    </svg>
  );
};
export default BirthdayCake;
