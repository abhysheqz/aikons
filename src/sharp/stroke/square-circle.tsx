import React from "react";
const SquareCircle: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.613 15.997h-.715c-.836-.22-.894-1.057-1.167-1.659-.09-.257-.182-.519-.272-.77m0 0a40 40 0 0 0-.593-1.57c-.344-.797-.741-.797-1.568-.797H7.29m2.17 2.367c.17-.282.342-.535.514-.803.597-.875 1.189-1.555 1.939-1.555m-2.454 2.358c-.739 1.215-1.492 2.43-2.459 2.43m10.76-4.803h-3.164c-.01 0-.014-.012-.006-.018.766-.523 1.919-1.214 2.09-1.383.678-.67.153-1.693-.687-1.766-.69-.123-1.43.321-1.43 1.03"
      />
    </svg>
  );
};
export default SquareCircle;
