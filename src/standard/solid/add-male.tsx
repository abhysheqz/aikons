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
        fill="currentColor"
        d="m7.25 15.25-4.632 1.544a2 2 0 0 0-1.368 1.898v.558a1 1 0 0 0 1 1h10v-6.937c1.78-1.394 3-3.063 3-6.646 0-2.32-.423-4.417-2.962-4.417 0 0-.895-1-3.046-1-3.037 0-4.992 1.827-4.992 5.417 0 3.583 1.219 5.252 3 6.646z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 13.75a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddMale;
