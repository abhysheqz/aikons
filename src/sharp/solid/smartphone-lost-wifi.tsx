import React from "react";
const SmartphoneLostWifi: React.FC<
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
        d="M3.998 5.25h4.403L12.62 11c0 1.376 1.113 2.5 2.497 2.5h.006q.325-.001.625-.08V22a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75m6.5 12.75h-2v2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.901 4.115 4.929 4.928-1.415 1.414-2.256-2.256h-.046c-.773 0-1.513.224-2.185.64l-1.054-1.7c.48-.296.993-.531 1.534-.692l-1.57-1.57q-.566.32-1.087.743L9.49 4.071q.43-.35.893-.648l-.76-.76 1.414-1.413 1.24 1.24A8.5 8.5 0 0 1 15.113 2c2.105 0 4.044.78 5.64 2.083l-1.265 1.55C18.206 4.585 16.705 4 15.113 4q-.616 0-1.212.115M14.122 11c0-.553.446-1 .997-1h.006c.55 0 .997.447.997 1s-.446 1-.997 1h-.006a1 1 0 0 1-.997-1"
      />
    </svg>
  );
};
export default SmartphoneLostWifi;
