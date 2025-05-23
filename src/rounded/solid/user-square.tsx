import React from "react";
const UserSquare: React.FC<
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
        d="M17.489 2.403c-1.14-.153-2.595-.153-4.433-.153h-2.112c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238M8.75 9.5a3.25 3.25 0 1 1 4.667 2.926A5.75 5.75 0 0 1 17.75 18a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75 5.75 5.75 0 0 1 4.333-5.574A3.25 3.25 0 0 1 8.75 9.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserSquare;
