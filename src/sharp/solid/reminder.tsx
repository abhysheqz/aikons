import React from "react";
const Reminder: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 6a.75.75 0 0 1 .75-.75h3.75V13a2.25 2.25 0 0 0 2.25 2.25h.75V16a2.25 2.25 0 0 0 3.714 1.708l1.233-1.057v5.35a.75.75 0 0 1-.75.75L2.5 22.75a.75.75 0 0 1-.75-.75zm7.001 13.25H7.242v1.5h1.51z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.5 1.25h-14a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h2.25V16a.75.75 0 0 0 1.238.57l3.29-2.82H22.5a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75m-4.966 7.434c.453-.437.711-.942.716-1.507.006-.682-.364-1.236-.713-1.614a5.6 5.6 0 0 0-1.117-.902 7 7 0 0 0-.416-.244L15.5 4.17s-.452.22-.505.249c-.105.056-.25.138-.415.243a5.6 5.6 0 0 0-1.117.903c-.348.378-.718.931-.712 1.613.005.579.277 1.094.75 1.538l-.48 2.12 1.462.331.451-1.987h1.184l.65 2.048 1.43-.453z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Reminder;
