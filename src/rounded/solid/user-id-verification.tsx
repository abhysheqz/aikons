import React from "react";
const UserIdVerification: React.FC<
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
        d="M8.925 1.75h.146a.976.976 0 1 1 0 1.953c-1.417 0-1.954.006-2.375.107A3.9 3.9 0 0 0 3.81 6.696c-.1.42-.108.958-.108 2.376a.976.976 0 0 1-1.952 0v-.146c0-1.222 0-2.01.162-2.686A5.86 5.86 0 0 1 6.24 1.912c.676-.162 1.464-.162 2.685-.162m8.38 2.06c-.422-.1-.959-.107-2.376-.107a.976.976 0 0 1 0-1.953h.146c1.22 0 2.01 0 2.685.162a5.86 5.86 0 0 1 4.328 4.328c.162.676.162 1.464.162 2.686v.146a.976.976 0 0 1-1.953 0c0-1.418-.006-1.955-.107-2.376a3.9 3.9 0 0 0-2.886-2.886M2.725 13.953c.54 0 .976.437.976.976 0 1.417.007 1.954.108 2.376a3.9 3.9 0 0 0 2.886 2.885c.42.1.958.108 2.375.108a.976.976 0 0 1 0 1.952h-.146c-1.22 0-2.01 0-2.685-.162a5.86 5.86 0 0 1-4.328-4.328c-.162-.676-.162-1.464-.162-2.685v-.146c0-.54.437-.976.976-.976m18.548 0c.539 0 .976.437.976.976v.146c0 1.22 0 2.01-.162 2.685a5.86 5.86 0 0 1-4.328 4.328c-.676.162-1.464.162-2.686.162h-.146a.976.976 0 0 1 0-1.952c1.418 0 1.955-.007 2.376-.108a3.9 3.9 0 0 0 2.886-2.886c.1-.42.107-.958.107-2.375 0-.54.438-.976.977-.976"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 9a3.25 3.25 0 1 1 4.667 2.926A5.75 5.75 0 0 1 17.75 17.5a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75 5.75 5.75 0 0 1 4.333-5.574A3.25 3.25 0 0 1 8.75 9"
      />
    </svg>
  );
};
export default UserIdVerification;
