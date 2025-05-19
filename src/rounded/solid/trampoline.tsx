import React from "react";
const Trampoline: React.FC<
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
        d="M12 3.125c-2.874 0-5.512.697-7.457 1.864C2.613 6.147 1.25 7.851 1.25 9.875v8a1 1 0 1 0 2 0v-4.05c.39.342.825.655 1.293.936C6.26 15.79 8.517 16.455 11 16.597v3.278a1 1 0 1 0 2 0v-3.278c2.483-.142 4.74-.806 6.457-1.836.468-.281.903-.594 1.293-.936v4.05a1 1 0 1 0 2 0v-8c0-2.024-1.363-3.728-3.293-4.886C17.512 3.822 14.874 3.125 12 3.125"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Trampoline;
