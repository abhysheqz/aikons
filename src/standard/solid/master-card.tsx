import React from "react";
const MasterCard: React.FC<
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
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75v12a2.75 2.75 0 0 1-2.75 2.75h-16A2.75 2.75 0 0 1 1 17.75zm8.75 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 0 1 6-3.465 4 4 0 1 1 0 6.93 4 4 0 0 1-6-3.465m7.5 1.938q.24.061.499.062a2 2 0 1 0-.499-3.938c.319.575.5 1.235.5 1.938s-.181 1.364-.5 1.938"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MasterCard;
