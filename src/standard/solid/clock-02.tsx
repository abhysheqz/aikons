import React from "react";
const Clock_02: React.FC<
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
        d="M2.7 5.942C5.259 2.116 10.09.12 14.798 1.377 20.69 2.95 24.2 8.98 22.622 14.85c-1.578 5.87-7.64 9.342-13.533 7.768a11.04 11.04 0 0 1-8.077-8.985 1 1 0 1 1 1.977-.303 9.04 9.04 0 0 0 6.616 7.356c4.837 1.292 9.797-1.56 11.086-6.355 1.289-4.793-1.574-9.732-6.41-11.023-3.614-.965-7.332.414-9.512 3.185l1.037 1.412A1 1 0 0 1 5 9.498H2.5a1 1 0 0 1-.935-1.354c.298-.786.68-1.523 1.135-2.202"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.999a1 1 0 0 1 1 1v3.585l1.707 1.707a1 1 0 0 1-1.414 1.415l-2-2a1 1 0 0 1-.293-.707v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clock_02;
