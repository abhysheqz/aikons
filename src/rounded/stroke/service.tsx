import React from "react";
const Service: React.FC<
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
        d="M19.417 15.713c3.951-5.01 2.884-9.978.046-11.719-2.682-1.645-5.023-.982-6.429.074L12 4.842m7.417 10.871c-.948 1.203-2.185 2.407-3.757 3.57C14.115 20.428 13.342 21 12 21s-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994c2.682-1.645 5.023-.982 6.429.074L12 4.842m7.417 10.871-5.525-6.268a.7.7 0 0 0-.895-.13l-2.186 1.366a1.965 1.965 0 0 1-2.233-3.23L12 4.841"
      />
    </svg>
  );
};
export default Service;
