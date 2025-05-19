import React from "react";
const Wise: React.FC<
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
        d="M6.138 1.993A1 1 0 0 1 7 1.5h12a1 1 0 0 1 .928 1.371l-8 19.629-1.857-.743 3.852-9.257H5a1 1 0 0 1-.707-1.707l3.966-3.967-2.133-3.84a1 1 0 0 1 .012-.993"
      />
    </svg>
  );
};
export default Wise;
