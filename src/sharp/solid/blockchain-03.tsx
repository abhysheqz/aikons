import React from "react";
const Blockchain_03: React.FC<
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
        d="M12.335 4.83a.75.75 0 0 0-.67 0l-6 3a.75.75 0 0 0-.415.67v7c0 .284.16.544.415.67l6 3a.75.75 0 0 0 .67 0l6-3a.75.75 0 0 0 .415-.67v-7a.75.75 0 0 0-.415-.67zM6.75 9.713l4.5 2.25v5.323l-4.5-2.25zm10.5 5.323-4.5 2.25v-5.323l4.5-2.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.636 1.344a.75.75 0 0 1 .728 0l9 5A.75.75 0 0 1 21.75 7v10a.75.75 0 0 1-.386.656l-9 5a.75.75 0 0 1-.728 0l-9-5A.75.75 0 0 1 2.25 17V7a.75.75 0 0 1 .386-.656zM3.75 7.441v9.118L12 21.142l8.25-4.583V7.44L12 2.858z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_03;
