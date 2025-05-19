import React from "react";
const Variable: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v5.25h19.5V3a.75.75 0 0 0-.75-.75zm3 2h2.009v2H6zm4 0h2.009v2H10zM21.75 9.75H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zm-15 6c0-.957.282-1.845.768-2.59l-1.257-.82a6.22 6.22 0 0 0-1.011 3.41c0 1.257.372 2.43 1.011 3.41l1.257-.82a4.72 4.72 0 0 1-.768-2.59m9.732-2.59c.486.745.768 1.633.768 2.59s-.282 1.846-.768 2.59l1.257.82a6.22 6.22 0 0 0 1.011-3.41 6.22 6.22 0 0 0-1.011-3.41zm-5.544 2.59-1.47-1.47 1.061-1.06L12 14.69l1.47-1.47 1.06 1.06-1.47 1.47 1.47 1.47-1.06 1.06-1.47-1.47-1.47 1.47-1.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Variable;
