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
        d="M21.301 5.942C18.742 2.116 13.911.12 9.203 1.377 3.31 2.95-.2 8.98 1.38 14.85c1.578 5.87 7.64 9.342 13.533 7.768a11.04 11.04 0 0 0 8.077-8.985 1 1 0 1 0-1.977-.303 9.04 9.04 0 0 1-6.616 7.356c-4.837 1.292-9.797-1.56-11.086-6.355C2.021 9.539 4.884 4.6 9.72 3.309c3.614-.965 7.332.414 9.512 3.185l-1.037 1.412A1 1 0 0 0 19 9.498h2.5a1 1 0 0 0 .935-1.354 11 11 0 0 0-1.135-2.202"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.001 6.999a1 1 0 0 1 1 1v3.585l1.707 1.707a1 1 0 0 1-1.414 1.415l-2-2a1 1 0 0 1-.293-.707v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_03;
