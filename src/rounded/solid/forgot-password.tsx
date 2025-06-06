import React from "react";
const ForgotPassword: React.FC<
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
        d="M18.75 13.75a.99.99 0 0 0-1 .978 1 1 0 1 1-2 0c0-1.655 1.354-2.978 3-2.978s3 1.323 3 2.978c0 .594-.176 1.15-.479 1.614a9 9 0 0 1-.577.771l-.103.125c-.154.19-.291.357-.418.53-.316.43-.423.703-.423.916a1 1 0 1 1-2 0c0-.879.436-1.59.812-2.101.16-.218.336-.433.49-.622l.09-.11c.185-.228.335-.419.453-.6a.95.95 0 0 0 .155-.523.99.99 0 0 0-1-.978m-1 8a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2h-.012a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 8.25a96 96 0 0 0-4.475.1c-2.058.095-3.729 1.688-4 3.705-.149 1.1-.275 2.257-.275 3.445s.126 2.344.275 3.445c.271 2.017 1.942 3.61 4 3.705 1.429.066 2.88.1 4.475.1 1.596 0 3.046-.034 4.475-.1a4.2 4.2 0 0 0 1.132-.211 2.25 2.25 0 0 1 .496-2.222 2.24 2.24 0 0 1-.603-1.533c0-.654.163-1.228.379-1.71-1.37 0-2.379-1.003-2.379-2.246 0-2.36 1.928-4.228 4.25-4.228q.102 0 .202.005c-.7-1.232-1.987-2.087-3.477-2.155A96 96 0 0 0 11 8.25m1 6.24a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5a1 1 0 0 1-2 0v-2.5a5.5 5.5 0 1 1 11 0v2.5a1 1 0 1 1-2 0v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ForgotPassword;
