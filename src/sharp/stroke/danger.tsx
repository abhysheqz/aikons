import React from "react";
const Danger: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 11.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0ZM17 11.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 16.5 12 15l1.5 1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 2c-4.694 0-8.5 3.766-8.5 8.413 0 1.753.542 3.382 1.47 4.73-.253.28-.407.648-.407 1.053 0 .871.713 1.578 1.593 1.578v2.254c3.719 2.63 7.969 2.63 11.688 0v-2.254c.88 0 1.593-.707 1.593-1.578 0-.405-.154-.774-.407-1.053a8.3 8.3 0 0 0 1.47-4.73C20.5 5.766 16.694 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 21.5V19m-4 2.5V19"
      />
    </svg>
  );
};
export default Danger;
