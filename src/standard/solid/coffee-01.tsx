import React from "react";
const Coffee_01: React.FC<
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
        d="M5 6.25a.75.75 0 0 0-.743.85l1.768 13.264a2.75 2.75 0 0 0 2.726 2.386h6.498a2.75 2.75 0 0 0 2.726-2.387L19.743 7.1A.75.75 0 0 0 19 6.25zm5.75 8.25c0-1.131.707-1.75 1.25-1.75s1.25.619 1.25 1.75-.707 1.75-1.25 1.75-1.25-.619-1.25-1.75M12 11.25c-1.666 0-2.75 1.62-2.75 3.25s1.084 3.25 2.75 3.25 2.75-1.62 2.75-3.25-1.084-3.25-2.75-3.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.962 3c-2.116.019-4.044.422-4.99 1.014-.026.016-.103.085-.163.293L6.325 6h11.349l-.484-1.693c-.06-.208-.138-.284-.171-.306-.996-.646-2.938-1.018-5.057-1m7.792 3-.64-2.242c-.14-.49-.432-1.062-1.007-1.435-1.503-.975-3.937-1.341-6.162-1.322-2.227.019-4.61.427-6.034 1.317-.59.37-.885.952-1.025 1.44L4.246 6H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coffee_01;
