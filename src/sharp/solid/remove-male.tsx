import React from "react";
const RemoveMale: React.FC<
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
        d="m7.75 15.25-6 2v3h11v-6.938c1.78-1.393 3-3.062 3-6.645 0-2.32-.423-4.417-2.962-4.417 0 0-.895-1-3.046-1-3.037 0-4.992 1.827-4.992 5.417 0 3.583 1.219 5.252 3 6.645z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.836 14.922 2.5 2.5 2.5-2.5 1.414 1.414-2.5 2.5 2.5 2.5-1.414 1.414-2.5-2.5-2.5 2.5-1.414-1.414 2.5-2.5-2.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoveMale;
