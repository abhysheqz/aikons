import React from "react";
const RowDelete: React.FC<
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
        d="M13.793 1.293a1 1 0 0 1 1.414 0L17.5 3.586l2.293-2.292a1 1 0 0 1 1.414 1.414L18.914 5l2.293 2.293a1 1 0 0 1-1.414 1.414L17.5 6.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L16.086 5l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.484 3H4.75A2.75 2.75 0 0 0 2 5.75v3a2.75 2.75 0 0 0 2.75 2.75h14c1 0 1.876-.534 2.357-1.333a2.25 2.25 0 0 1-2.198-.576L17.5 8.182l-1.41 1.41a2.25 2.25 0 0 1-3.18-3.183L14.317 5 12.91 3.591A2.3 2.3 0 0 1 12.484 3M2 16.75A2.75 2.75 0 0 1 4.75 14h14a2.75 2.75 0 0 1 2.75 2.75v3a2.75 2.75 0 0 1-2.75 2.75h-14A2.75 2.75 0 0 1 2 19.75z"
      />
    </svg>
  );
};
export default RowDelete;
