import React from "react";
const BiometricAccess: React.FC<
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
        d="M6.5 8.251V6.749a5.5 5.5 0 0 1 11 0v1.502h.5a2.75 2.75 0 0 1 2.75 2.75v9a2.75 2.75 0 0 1-2.75 2.75H6a2.75 2.75 0 0 1-2.749-2.75v-9A2.75 2.75 0 0 1 6 8.251zm2-1.502a3.5 3.5 0 1 1 7 0v1.502h-7zm3.5 6.002a3.25 3.25 0 0 0-3.25 3.25v1.5a.75.75 0 0 1-1.5 0v-1.5a4.75 4.75 0 1 1 9.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5a3.25 3.25 0 0 0-3.25-3.25m-.75 3.25a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 1 0-4.5 0v3a.75.75 0 0 0 1.5 0zm3 2a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BiometricAccess;
