import React from "react";
const EraserAdd: React.FC<
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
        d="M1.25 6A2.75 2.75 0 0 1 4 3.25h11.892c.948 0 1.829.488 2.332 1.293l3.75 6a2.75 2.75 0 0 1 0 2.915l-3.75 6a2.75 2.75 0 0 1-2.332 1.292H4A2.75 2.75 0 0 1 1.25 18zM11 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H7a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EraserAdd;
