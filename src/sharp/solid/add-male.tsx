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
        fillRule="evenodd"
        d="M19.25 13.75v3.5h3.5v2h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.288 20.953-.038-6.937c1.78-1.394 3-3.063 3-6.646 0-2.32-.423-4.417-2.962-4.417 0 0-.895-1-3.046-1-3.037 0-4.992 1.827-4.992 5.417 0 3.583 1.219 5.252 3 6.645v1.938l-6 2v3z"
      />
    </svg>
  );
};
export default AddMale;
