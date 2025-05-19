import React from "react";
const Lamp_02: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v3.833l4.826 2.011a3 3 0 0 1 1.342 1.105l1.664 2.496a1 1 0 0 1-.46 1.483l-.01.004-.153.056a9 9 0 0 1-.405.128c-.35.103-.867.235-1.554.366-.631.12-1.407.24-2.333.333a4.001 4.001 0 0 1-7.834 0 27 27 0 0 1-2.333-.333 17 17 0 0 1-1.554-.366 9 9 0 0 1-.405-.128l-.153-.056-.01-.004a1 1 0 0 1-.46-1.483L4.832 8.95a3 3 0 0 1 1.342-1.105L11 5.834V2a1 1 0 0 1 1-1m-1.752 12.965a2 2 0 0 0 3.504 0 43 43 0 0 1-3.504 0m5.327 4.236a1 1 0 0 0-1.201 1.598l1.995 1.5a1 1 0 1 0 1.202-1.598zM9.59 19.799a1 1 0 0 0-1.201-1.598l-1.996 1.5a1 1 0 0 0 1.202 1.598zm3.393.201a1 1 0 1 0-2 0v2a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lamp_02;
