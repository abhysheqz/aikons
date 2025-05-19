import React from "react";
const Plane: React.FC<
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
        d="M12 7.75c-1.805 0-3.074.776-3.951 1.926-.846 1.109-1.315 2.545-1.639 3.885-.468 1.937.126 3.451 1.324 4.427 1.139.927 2.742 1.306 4.266 1.258 1.524.048 3.126-.33 4.265-1.258 1.199-.976 1.792-2.49 1.324-4.427-.323-1.34-.792-2.776-1.638-3.885C15.073 8.526 13.804 7.75 12 7.75m0 4.75a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M3 21a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M19 21a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1M7.929 14.629a1 1 0 0 1-.557 1.3l-5 2a1 1 0 1 1-.743-1.857l5-2a1 1 0 0 1 1.3.557m8.143 0a1 1 0 0 1 1.3-.557l5 2a1 1 0 0 1-.743 1.857l-5-2a1 1 0 0 1-.557-1.3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 15.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1M20 15.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plane;
