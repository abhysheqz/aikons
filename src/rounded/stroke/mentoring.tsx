import React from "react";
const Mentoring: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 22-2-6H2l2 6zm0 0h4M12 13v-.5c0-1.886 0-2.828-.586-3.414S9.886 8.5 8 8.5s-2.828 0-3.414.586S4 10.614 4 12.5v.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 17.5h6a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-1"
      />
    </svg>
  );
};
export default Mentoring;
