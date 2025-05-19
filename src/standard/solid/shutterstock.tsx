import React from "react";
const Shutterstock: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM7 5a2 2 0 0 0-2 2v4a1 1 0 1 0 2 0V7h4a1 1 0 1 0 0-2zm12 8a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h4a2 2 0 0 0 2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shutterstock;
