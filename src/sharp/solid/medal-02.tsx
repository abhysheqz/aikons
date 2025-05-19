import React from "react";
const Medal_02: React.FC<
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
        d="M12 12.25a.75.75 0 0 1 .618.325l1.61 2.34 2.733.803a.75.75 0 0 1 .383 1.178l-1.737 2.248.078 2.835a.75.75 0 0 1-1 .728L12 21.756l-2.685.951a.75.75 0 0 1-1-.728l.078-2.835-1.737-2.248a.75.75 0 0 1 .383-1.178l2.733-.802 1.61-2.341A.75.75 0 0 1 12 12.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 1.25a.747.747 0 0 0-.75.745V8.41L12 13.25l9.75-4.84V1.996A.747.747 0 0 0 21 1.25zM7.25 5v2h1.5V5zm4 0v3h1.5V5zm4 0v2h1.5V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_02;
