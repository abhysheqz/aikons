import React from "react";
const Logout_04: React.FC<
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
        d="M7.856 4.946a1 1 0 0 1-.279 1.387 8 8 0 1 0 8.846 0 1 1 0 1 1 1.107-1.666A9.99 9.99 0 0 1 22 13c0 5.523-4.477 10-10 10S2 18.523 2 13a9.99 9.99 0 0 1 4.47-8.333 1 1 0 0 1 1.386.28"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v6.758l.17-.215.044-.057.002-.003c.189-.24.4-.507.567-.68a1 1 0 0 1 1.434 1.394 9 9 0 0 0-.43.525l-.047.06c-.19.242-.416.53-.649.804a7.6 7.6 0 0 1-.826.856 3 3 0 0 1-.505.353c-.18.097-.445.205-.76.205s-.58-.108-.76-.205c-.189-.1-.36-.229-.505-.353a7.6 7.6 0 0 1-.826-.856 28 28 0 0 1-.696-.864 9 9 0 0 0-.43-.525 1 1 0 1 1 1.434-1.394c.168.173.378.44.566.68l.003.003.044.057.17.215V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Logout_04;
