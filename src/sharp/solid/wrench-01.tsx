import React from "react";
const Wrench_01: React.FC<
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
        d="M15.498 1.75a6.75 6.75 0 0 0-6.579 8.269l-6.951 6.95a.75.75 0 0 0 0 1.061l4 4a.75.75 0 0 0 1.06 0l6.952-6.951q.734.17 1.518.171a6.75 6.75 0 0 0 6.146-9.544l-.448-.984-3.737 3.736a1.358 1.358 0 0 1-1.922-1.919l3.73-3.743-.986-.447a6.7 6.7 0 0 0-2.783-.599m-9 17.167 1.42-1.42-1.413-1.415-1.421 1.42z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wrench_01;
