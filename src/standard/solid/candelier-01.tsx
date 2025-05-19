import React from "react";
const Candelier_01: React.FC<
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
        d="M9.5 2a1 1 0 0 0 0 2h1.513v3.886A4.75 4.75 0 0 0 3.5 11.75v1.53a1.27 1.27 0 0 0-.858.648l-1.194 2.276c-.638 1.218.32 2.546 1.603 2.546H5.95c1.283 0 2.24-1.328 1.602-2.546l-1.194-2.276a1.27 1.27 0 0 0-.858-.649V11.75a2.75 2.75 0 1 1 5.5 0V12q0 .081.013.16v4.119a1.25 1.25 0 0 0-.795.558l-1.396 2.236c-.729 1.165.109 2.677 1.484 2.677h3.391c1.375 0 2.213-1.512 1.484-2.677l-1.397-2.236a1.25 1.25 0 0 0-.771-.553v-4.8a2.75 2.75 0 0 1 5.487.266v1.53a1.27 1.27 0 0 0-.858.648l-1.194 2.276c-.638 1.218.32 2.546 1.603 2.546h2.899c1.283 0 2.24-1.328 1.602-2.546l-1.194-2.276a1.27 1.27 0 0 0-.858-.649V11.75a4.75 4.75 0 0 0-7.487-3.882V4H14.5a1 1 0 1 0 0-2h-5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Candelier_01;
