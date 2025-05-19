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
        d="M12 2.748a3.75 3.75 0 0 0-3.75 3.75v3.25h-1.5v-3.25a5.25 5.25 0 1 1 10.5 0v3.25h-1.5v-3.25A3.75 3.75 0 0 0 12 2.748"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 8.25h17.5v14.5H3.251zm8.75 4.5A3.25 3.25 0 0 0 8.75 16v2.25h-1.5V16a4.75 4.75 0 1 1 9.5 0v2.25h-1.5V16A3.25 3.25 0 0 0 12 12.75M11.25 16a.75.75 0 0 1 1.5 0v.75h1.5V16a2.25 2.25 0 1 0-4.5 0v3.75h1.5zm3 3.75v-2h-1.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BiometricAccess;
