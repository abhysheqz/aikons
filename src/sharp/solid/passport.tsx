import React from "react";
const Passport: React.FC<
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
        d="M2 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.5 4.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M5.679 16.818c.448-.958 1.561-1.55 2.802-1.568 1.231-.018 2.354.532 2.84 1.568l1.358-.636c-.803-1.715-2.576-2.456-4.22-2.431-1.635.024-3.379.808-4.139 2.431zM19 10.75h-4v-1.5h4zm-4 4h4v-1.5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Passport;
