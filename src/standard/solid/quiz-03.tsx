import React from "react";
const Quiz_03: React.FC<
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
        d="M6.258 2.75A3 3 0 0 0 9.248 6h5.5a3 3 0 0 0 2.99-3.25h.762a2.75 2.75 0 0 1 2.75 2.75V20a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20V5.5A2.75 2.75 0 0 1 5.5 2.75zM5.75 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m12.28-.47a.75.75 0 1 0-1.06-1.06l-2.47 2.47-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM5.75 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m12.28-.47a.75.75 0 1 0-1.06-1.06l-2.47 2.47-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.5 3c0-.966.783-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5A1.75 1.75 0 0 1 7.5 3"
      />
    </svg>
  );
};
export default Quiz_03;
