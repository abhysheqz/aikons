import React from "react";
const AlAqsaMosque: React.FC<
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
        d="M12.75 3.051V1.75h-1.5v1.302C8.354 3.457 6.352 6.17 6.817 9H6v1.5h1.25v2.25h1.5V10.5h6.5v2.25h1.5V10.5H18V9h-.814c.465-2.83-1.539-5.545-4.436-5.949"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 11.75a.75.75 0 0 0-.349.086l-3.986 1.993a.75.75 0 0 0-.415.671v7.75h8v-6.5h5.5v6.5h8V14.5a.75.75 0 0 0-.415-.67l-3.986-1.994A.75.75 0 0 0 18 11.75zm-3.25 3.214 2.5-1.25v7.036h-2.5zm16-1.25v7.036h2.5v-5.786z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.25 22.25v-5h-2.5v5z" />
    </svg>
  );
};
export default AlAqsaMosque;
