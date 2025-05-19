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
        d="m7.75 15.25-4.632 1.544a2 2 0 0 0-1.368 1.898v.558a1 1 0 0 0 1 1h10v-6.938c1.78-1.393 3-3.062 3-6.645 0-2.32-.423-4.417-2.962-4.417 0 0-.895-1-3.046-1-3.037 0-4.992 1.827-4.992 5.417 0 3.583 1.219 5.252 3 6.645z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.543 16.043a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoveMale;
