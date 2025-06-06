import React from "react";
const Mushroom: React.FC<
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
        d="M12.015 1.25c-4.942 0-9.165 2.832-9.74 7.693a3.17 3.17 0 0 0 .768 2.52c.571.662 1.393 1.139 2.311 1.48 1.836.68 4.28.897 6.666.775 2.39-.122 4.816-.59 6.628-1.35.902-.378 1.703-.85 2.265-1.431.574-.594.939-1.35.812-2.225-.682-4.723-4.849-7.462-9.71-7.462M16 5c.825 0 1.567.403 2.082.918S19 7.175 19 8a1 1 0 1 1-2 0c0-.175-.098-.433-.332-.668S16.175 7 16 7a1 1 0 1 1 0-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.36 14.846a26.3 26.3 0 0 1-5.358.392c-.089.3-.24.6-.438.92-.113.184-.232.36-.358.548l-.083.125a10 10 0 0 0-.453.727c-.277.505-.515 1.132-.382 1.852.485 2.644 3.31 4.182 5.568 2.869.826-.48 1.315-1.27 1.585-2.122.268-.847.338-1.807.297-2.734a13.5 13.5 0 0 0-.377-2.577"
      />
    </svg>
  );
};
export default Mushroom;
