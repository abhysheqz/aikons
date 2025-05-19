import React from "react";
const FloppyDisk: React.FC<
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
        d="M8.006 21.998V14.99h7.955v7.006M9.498 6.983h4.972"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.1 21.998h17.8a.1.1 0 0 0 .099-.101l-.09-14.937-5.892-4.958H3.099a.1.1 0 0 0-.099.1v19.796a.1.1 0 0 0 .1.1Z"
      />
    </svg>
  );
};
export default FloppyDisk;
