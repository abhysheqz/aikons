import React from "react";
const EditOff_03: React.FC<
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
        d="M3.664 2.25 21.75 20.336l-1.414 1.414L2.25 3.664z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m8.965 8.966-5.751 5.751L2 22l7.283-1.214 5.751-5.752zM16.802 13.267l1.202-1.202-6.069-6.07-1.202 1.203zM15.931 2 22 8.069l-2.935 2.935-6.07-6.069z"
      />
    </svg>
  );
};
export default EditOff_03;
