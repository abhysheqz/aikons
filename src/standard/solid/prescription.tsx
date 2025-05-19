import React from "react";
const Prescription: React.FC<
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
        d="M9.293 11.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1-1.414 1.414l-9-9a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3a1 1 0 0 1 1-1h4.5a5.5 5.5 0 1 1 0 11H6v6a1 1 0 1 1-2 0zm2 8h3.5a3.5 3.5 0 1 0 0-7H6zM19.707 14.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prescription;
