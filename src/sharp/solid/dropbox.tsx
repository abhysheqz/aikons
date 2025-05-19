import React from "react";
const Dropbox: React.FC<
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
        d="M18.75 18v-2.362l-1.577 1.034a2 2 0 0 1-2.329-.096L12 14.352l-2.844 2.224a2 2 0 0 1-2.33.096L5.25 15.638V18c0 .284.16.544.415.67l6 3a.75.75 0 0 0 .67 0l6-3a.75.75 0 0 0 .415-.67M7.593 2.37a.75.75 0 0 1 .86.032L12 5.082l3.548-2.68a.75.75 0 0 1 .86-.032l5 3.231a.75.75 0 0 1 .054 1.221L18.5 9l2.98 2.194a.75.75 0 0 1-.069 1.204l-4.924 3.23a.75.75 0 0 1-.873-.037L12 12.766 8.386 15.59a.75.75 0 0 1-.873.036l-4.924-3.23a.75.75 0 0 1-.068-1.203L5.5 9 2.538 6.822a.75.75 0 0 1 .055-1.22zM7 9l5 2.5L17 9l-5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dropbox;
