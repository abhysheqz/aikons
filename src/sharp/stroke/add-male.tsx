import React from "react";
const AddMale: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 16v-1.937c1.78-1.394 3-3.063 3-6.646C16 5.097 15.577 3 13.038 3c0 0-.895-1-3.046-1C6.955 2 5 3.827 5 7.417 5 11 6.219 12.669 8 14.063V16l-6 2v3h12M18.5 22v-7M15 18.5h7"
      />
    </svg>
  );
};
export default AddMale;
