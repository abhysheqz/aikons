import React from "react";
const PinLocation_02: React.FC<
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
        d="M7 17a1 1 0 0 1 1 1c0 .34.234.817.979 1.264.725.435 1.79.736 3.021.736s2.296-.301 3.021-.736c.745-.447.979-.925.979-1.264a1 1 0 1 1 2 0c0 1.318-.885 2.34-1.95 2.979C14.965 21.629 13.53 22 12 22s-2.965-.37-4.05-1.021C6.885 20.339 6 19.318 6 18a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 10a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PinLocation_02;
