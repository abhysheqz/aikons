import React from "react";
const Cottage: React.FC<
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
        d="M2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.6 1.2a1 1 0 0 0-1.2 1.6l.933.7L1.4 10.2a1 1 0 0 0 1.2 1.6l.9-.675V21H3a1 1 0 1 0 0 2h6.498a.75.75 0 0 1-.748-.75v-5.917c0-1.75 1.505-3.083 3.25-3.083s3.25 1.333 3.25 3.083v5.917a.75.75 0 0 1-.748.75H21a1 1 0 0 0 0-2h-.5v-9.875l.9.675a1 1 0 0 0 1.2-1.6l-8.933-6.7.933-.7a1 1 0 0 0-1.2-1.6L12 2.25zM14.498 23a.75.75 0 0 1-.748-.75v-5.917c0-.826-.734-1.583-1.75-1.583s-1.75.757-1.75 1.583v5.917a.75.75 0 0 1-.748.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cottage;
