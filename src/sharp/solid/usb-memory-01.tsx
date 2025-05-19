import React from "react";
const UsbMemory_01: React.FC<
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
        d="M17.321 1.47a.75.75 0 0 1 1.06 0l4.15 4.15a.75.75 0 0 1 0 1.06l-2.634 2.634 1.664 1.664-10.004 10.004a6.038 6.038 0 0 1-8.539-8.539L13.022 2.44l1.664 1.665zm3.62 4.68-2.105 2.103-3.089-3.089 2.104-2.103zM7 15a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbMemory_01;
