import React from "react";
const Rocket_01: React.FC<
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
        d="M22.005 1.25a17.5 17.5 0 0 0-4.807.645c-1.524.435-2.967 1.11-3.931 2.068L10.32 6.687l-2.575-.895a.75.75 0 0 0-.776.178l-2 2a.75.75 0 0 0 0 1.06l9.999 10a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 .179-.776l-.895-2.575 2.724-2.946C21.912 8.848 22.749 5.565 22.749 2a.75.75 0 0 0-.744-.75m-3.09 5.25-1.42-1.42-1.415 1.414 1.42 1.42zM6.207 13.293 2.664 16.75 1.25 15.336l3.543-3.457zm3 3L2.664 22.75 1.25 21.336l6.543-6.457zm3 3L8.664 22.75 7.25 21.336l3.543-3.457z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rocket_01;
