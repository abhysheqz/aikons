import React from "react";
const Location_03: React.FC<
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
        d="M12 1.25c-4.3 0-7.75 3.58-7.75 7.95 0 2.672 1.426 4.805 2.959 6.33 1.537 1.527 3.259 2.522 4.037 2.931.475.25 1.033.25 1.508 0 .778-.409 2.5-1.404 4.037-2.932 1.533-1.524 2.959-3.658 2.959-6.329 0-4.37-3.45-7.95-7.75-7.95M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.872 16.072a1 1 0 0 1 .557 1.3L4.98 21h13.984l-1.375-3.094a1 1 0 0 1 1.828-.812l1.375 3.094A2 2 0 0 1 18.963 23H4.979a2 2 0 0 1-1.858-2.742l1.451-3.629a1 1 0 0 1 1.3-.557"
      />
    </svg>
  );
};
export default Location_03;
