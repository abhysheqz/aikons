import React from "react";
const TwoFinger_02: React.FC<
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
        d="M10.458 4.256c0-.509-.503-.993-1.1-.993-.608 0-1.124.492-1.124.993v9.134a.5.5 0 0 1-1 0V8.675l-2.632 2.302a3.96 3.96 0 0 0-.594 5.308l3.244 4.459V22c0 .414.335.75.75.75h10a.75.75 0 0 0 .75-.75v-1.237l.958-1.199a4.75 4.75 0 0 0 1.041-2.967V12.5a2.75 2.75 0 0 0-2.75-2.75h-.3q.051.245.051.506v1a.5.5 0 1 1-1 0v-1a1.5 1.5 0 0 0-.87-1.362 2.7 2.7 0 0 0-.702-.138h-.428v2.634a.5.5 0 0 1-1 0V2.256c0-.244-.121-.493-.346-.692a1.3 1.3 0 0 0-.524-.282 2.3 2.3 0 0 0-.38-.032c-.25.024-.502.137-.7.313-.223.2-.344.448-.344.693v8.134a.5.5 0 0 1-1 0z"
      />
    </svg>
  );
};
export default TwoFinger_02;
