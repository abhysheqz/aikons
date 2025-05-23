import React from "react";
const SpeechToText: React.FC<
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
        d="M17 17a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1M5.25 1.25a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1m3 2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1m-6 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m9 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.755 3.25a.975.975 0 1 0 0 1.95h-.003c1.432.008 2.455.043 3.243.18.762.134 1.23.35 1.59.675q.205.184.382.401c.36.444.587 1.046.708 2.097.123 1.07.125 2.469.125 4.446s-.002 3.376-.125 4.446c-.121 1.05-.349 1.653-.708 2.096a3.5 3.5 0 0 1-.382.402c-.41.37-.962.601-1.94.726-1.006.13-2.325.131-4.206.131H13c-2.097 0-3.567-.002-4.678-.16-1.077-.152-1.671-.433-2.105-.89-.425-.446-.696-1.064-.848-2.145-.155-1.106-.168-2.085-.169-4.13a.975.975 0 1 0-1.95 0c0 2.004.01 3.133.188 4.4.181 1.292.551 2.362 1.365 3.219.852.896 1.934 1.291 3.246 1.477 1.263.179 2.871.179 4.876.179h.581c1.799 0 3.242 0 4.386-.146 1.185-.152 2.177-.473 2.997-1.21q.32-.288.592-.624c.691-.852.99-1.875 1.131-3.101.138-1.195.138-2.707.138-4.608v-.124c0-1.901 0-3.413-.138-4.608-.141-1.226-.44-2.25-1.131-3.101a5.5 5.5 0 0 0-.592-.624c-.715-.643-1.563-.97-2.56-1.144-.97-.17-2.149-.202-3.569-.21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SpeechToText;
