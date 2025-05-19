import React from "react";
const Candelier_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.259 15.317C5.895 14.63 5.584 14 4.5 14s-1.395.63-1.759 1.317c-.338.638-1.126 1.65-.516 2.329.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33M13.759 18.317C13.395 17.63 13.084 17 12 17c-1.085 0-1.395.63-1.759 1.317-.338.638-1.126 1.65-.516 2.329.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33M21.259 15.317C20.895 14.63 20.584 14 19.5 14s-1.395.63-1.759 1.317c-.338.638-1.126 1.65-.516 2.329.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33M9 3h6M12 3v14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 14v-2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 1 1 7.5 0V14"
      />
    </svg>
  );
};
export default Candelier_01;
