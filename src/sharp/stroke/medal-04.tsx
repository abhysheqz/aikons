import React from "react";
const Medal_04: React.FC<
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
        d="M12 2.002v4.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 2.012a.01.01 0 0 1 .01-.01h15.98a.01.01 0 0 1 .01.01v5.003l-8 3.509-8-3.509zM11.895 13.641a.1.1 0 0 1 .164 0l1.615 2.327 2.705.742a.1.1 0 0 1 .052.16l-1.795 2.243.17 2.778a.1.1 0 0 1-.135.1l-2.694-.99-2.674.99a.1.1 0 0 1-.135-.099l.145-2.82-1.76-2.203a.1.1 0 0 1 .05-.16l2.686-.741z"
      />
    </svg>
  );
};
export default Medal_04;
