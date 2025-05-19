import React from "react";
const SoftDrink_02: React.FC<
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
        d="M4.253 4.335A1 1 0 0 1 5 4h13a1 1 0 0 1 .993 1.117L17.201 20.35A3 3 0 0 1 14.221 23H8.779A3 3 0 0 1 5.8 20.35L4.007 5.118a1 1 0 0 1 .246-.782M6.125 6l1.66 14.117a1 1 0 0 0 .993.883h5.444a1 1 0 0 0 .993-.883L16.875 6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.504 1.91A1 1 0 0 1 14.5 1H19a1 1 0 0 1 0 2h-3.587l-1.417 15.59a1 1 0 0 1-1.992-.18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.531 8.5a1 1 0 0 0-.993 1.117L5.801 20.35A3 3 0 0 0 8.78 23h5.442a3 3 0 0 0 2.98-2.65l1.263-10.733a1 1 0 0 0-.994-1.117zM10 15a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SoftDrink_02;
