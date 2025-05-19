import React from "react";
const McpServer: React.FC<
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
        d="M11.357 2.485a3.829 3.829 0 0 1 6.39 3.018 3.82 3.82 0 0 1 2.882 1.118l.136.144a3.83 3.83 0 0 1 0 5.128l-.136.142L13.664 19l2.086 2.086-1.414 1.414-2.086-2.086a2 2 0 0 1 0-2.828l6.965-6.965.125-.138a1.83 1.83 0 0 0 0-2.308l-.125-.14c-.67-.67-1.73-.71-2.447-.125l-.14.125-6.878 6.88L8.336 13.5l6.879-6.879.125-.138a1.829 1.829 0 0 0-2.572-2.573l-.14.125L3.665 13 2.25 11.586l8.965-8.965z"
      />
      <path
        fill="currentColor"
        d="M12.143 16.515a3.829 3.829 0 0 1-5.408-5.408l.136-.142 6.879-6.88L15.164 5.5l-6.879 6.879-.125.138a1.83 1.83 0 0 0 2.572 2.573l.14-.125 6.878-6.88L19.164 9.5l-6.879 6.879z"
      />
    </svg>
  );
};
export default McpServer;
