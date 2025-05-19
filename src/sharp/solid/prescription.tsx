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
        d="M10.707 11.293 20 20.586 18.586 22l-9.293-9.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2h5.5a5.5 5.5 0 0 1 0 11H6v6H4zm2 9h3.5a3.5 3.5 0 1 0 0-7H6zM12 20.586 18.586 14 20 15.414 13.414 22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Prescription;
