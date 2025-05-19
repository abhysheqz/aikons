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
        d="M18.25 13.75a1 1 0 0 1 1 1v2.5h2.5a1 1 0 0 1 0 2h-2.5v2.5a1 1 0 0 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.465 15.766-1.715-.516v-1.938c1.78-1.393 3-3.062 3-6.645 0-2.32-.423-4.417-2.962-4.417 0 0-.895-1-3.046-1-3.037 0-4.992 1.827-4.992 5.417 0 3.583 1.219 5.252 3 6.645v1.938l-3.716 1.118a4.07 4.07 0 0 0-2.76 2.892c-.136.536.327.99.882.99H13.25a2.5 2.5 0 0 1 1.215-4.484"
      />
    </svg>
  );
};
export default AddMale;
