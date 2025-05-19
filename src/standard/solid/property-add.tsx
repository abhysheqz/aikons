import React from "react";
const PropertyAdd: React.FC<
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
        d="M18.5 14a1 1 0 0 1 1 1v2.5H22a1 1 0 1 1 0 2h-2.5V22a1 1 0 1 1-2 0v-2.5H15a1 1 0 1 1 0-2h2.5V15a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 1.25A3.75 3.75 0 0 0 1.25 5v1.25h20.5V5A3.75 3.75 0 0 0 18 1.25zm16.75 6.5H1.25V18A3.75 3.75 0 0 0 5 21.75h11V21h-1a2.5 2.5 0 0 1 0-5h1v-1a2.5 2.5 0 0 1 5 0v1h.75zM6 10.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyAdd;
