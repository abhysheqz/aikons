import React from "react";
const FingerPrintMinus: React.FC<
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
        d="M5.51 2.75C9.845-.214 16.1 1.37 18.402 6.115l-1.747.857c-1.77-3.647-6.67-4.918-10.054-2.607zM1.75 9.808c0-1.309.299-2.551.833-3.663l1.75.85a6.5 6.5 0 0 0-.639 2.813v4.352c0 2.244 1.142 4.236 2.908 5.442l-1.093 1.617c-2.264-1.547-3.759-4.127-3.759-7.06zM17.306 11.16V8.37h1.944v2.79zM9.255 22.666l.268-1.936a6.8 6.8 0 0 0 1.949-.01l.776 1.843a8.7 8.7 0 0 1-2.993.103"
      />
      <path
        fill="currentColor"
        d="M13.416 10.241c0-1.773-1.35-3.127-2.916-3.127V5.159c2.729 0 4.86 2.32 4.86 5.082zM5.639 10.241c0-.77.164-1.504.46-2.162l1.772.806a3.3 3.3 0 0 0-.288 1.356v3.518c0 1.773 1.35 3.128 2.917 3.128v1.954c-2.73 0-4.861-2.32-4.861-5.082zM9.527 10.534v2.932h1.945v-2.932z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m1.5 4h-3v1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FingerPrintMinus;
