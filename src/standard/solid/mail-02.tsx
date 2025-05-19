import React from "react";
const Mail_02: React.FC<
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
        d="M3.75 3A2.75 2.75 0 0 0 1 5.75v12a2.75 2.75 0 0 0 2.75 2.75h16a2.75 2.75 0 0 0 2.75-2.75v-12A2.75 2.75 0 0 0 19.75 3zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296l-4.992 2.912a1.25 1.25 0 0 1-1.26 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mail_02;
