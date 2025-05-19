import React from "react";
const Drink: React.FC<
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
        strokeWidth={1.5}
        d="m8.205 15.358-3.688-4.277C2.625 8.887 1.68 7.79 2.098 6.895S3.98 6 6.901 6h4.198c2.922 0 4.383 0 4.803.895.42.894-.527 1.992-2.42 4.186l-3.687 4.277C9.425 15.786 9.24 16 9 16s-.426-.214-.795-.642ZM8.5 6l-.401-2.406a1 1 0 0 0-.67-.784L5 2M9 16v6m-1.5 0h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.86 8.833A3.52 3.52 0 0 0 18.482 10 3.51 3.51 0 0 0 22 6.5C22 4.567 20.425 3 18.482 3A3.51 3.51 0 0 0 15 6"
      />
    </svg>
  );
};
export default Drink;
