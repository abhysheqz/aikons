import React from "react";
const WindPower: React.FC<
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
        d="M6.002 20.75h12v2h-12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.752 11a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.497 4.322a8.18 8.18 0 0 0-3.499 6.239l-1.996-.122q.02-.32.058-.633a10.18 10.18 0 0 1 4.299-7.128zm12.458 5.728a8.18 8.18 0 0 0-3.452-5.728l1.138-1.644a10.18 10.18 0 0 1 4.357 7.761l-1.996.122a8 8 0 0 0-.047-.511M13.002 7v2.5h-2V7zM8.006 12.132l1.75-1 .992 1.736-1.75 1zm7 1.736-1.75-1 .992-1.736 1.75 1zM11.002 22v-9.5h2V22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.922 1.525a.75.75 0 0 1 .58-.275h5a.75.75 0 0 1 .735.897l-1 5a.75.75 0 0 1-.735.603h-3a.75.75 0 0 1-.736-.603l-1-5a.75.75 0 0 1 .156-.622M7.592 11.156a.75.75 0 0 1 .89.335l1.5 2.598a.75.75 0 0 1-.155.939l-3.83 3.366a.75.75 0 0 1-1.145-.189l-2.5-4.33a.75.75 0 0 1 .41-1.085zM16.412 11.156a.75.75 0 0 0-.89.335l-1.5 2.598a.75.75 0 0 0 .155.939l3.83 3.366a.75.75 0 0 0 1.144-.189l2.5-4.33a.75.75 0 0 0-.409-1.085z"
      />
    </svg>
  );
};
export default WindPower;
