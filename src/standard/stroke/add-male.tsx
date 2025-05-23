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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 21H2v-1.558a2 2 0 0 1 1.368-1.898L8 16v-1.937C6.219 12.669 5 11 5 7.417 5 3.827 6.955 2 9.992 2c2.151 0 3.046 1 3.046 1C15.577 3 16 5.097 16 7.417c0 3.583-1.22 5.252-3 6.646V16M18.5 22v-7M15 18.5h7"
      />
    </svg>
  );
};
export default AddMale;
