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
        d="M1.25 6A2.75 2.75 0 0 1 4 3.25h16A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18zm4.5 3.485a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m2.731 5.265c-1.24.019-2.353.61-2.802 1.568a.75.75 0 0 1-1.358-.636c.76-1.623 2.503-2.407 4.138-2.431 1.645-.025 3.418.716 4.22 2.43a.75.75 0 0 1-1.358.637c-.485-1.036-1.608-1.586-2.84-1.568M15 9.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Passport;
