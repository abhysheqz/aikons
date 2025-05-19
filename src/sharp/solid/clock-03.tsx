import React from "react";
const Clock_03: React.FC<
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
        d="M22.172 8.188C20.235 3.08 14.68.176 9.27 1.62 3.508 3.158.076 9.05 1.62 14.788c1.543 5.737 7.47 9.13 13.232 7.592a10.79 10.79 0 0 0 7.898-8.782l-1.933-.295a8.83 8.83 0 0 1-6.47 7.188c-4.729 1.263-9.578-1.524-10.839-6.21-1.26-4.685 1.54-9.51 6.267-10.772a8.87 8.87 0 0 1 9.935 4.048H18.36v1.955h2.897a.978.978 0 0 0 .914-1.324"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 7h2v4.586l2.207 2.207-1.414 1.414L11 12.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_03;
