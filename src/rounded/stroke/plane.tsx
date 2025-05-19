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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9c-3.102 0-4.224 2.603-4.86 5.237-.808 3.342 2.036 4.857 4.86 4.759 2.824.098 5.668-1.417 4.86-4.759C16.225 11.603 15.103 9 12 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14h.009M4 21h.009M20 21h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 15-5 2m15-2 5 2M12 9V3M4 18v-1.5M20 18v-1.5"
      />
    </svg>
  );
};
export default Plane;
