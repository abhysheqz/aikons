import React from "react";
const AddMoneyCircle: React.FC<
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
        d="M11 3.25q.766.001 1.5.115V8H16v3.5h4.635q.114.734.115 1.5c0 5.385-4.365 9.75-9.75 9.75S1.25 18.385 1.25 13 5.615 3.25 11 3.25m.75 5.5v-1.5h-1.5v1.5h-3v5h6v2h-6v1.5h3v1.5h1.5v-1.5h3v-5h-6v-2h6v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 1.25v3.5h3.5v2h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddMoneyCircle;
