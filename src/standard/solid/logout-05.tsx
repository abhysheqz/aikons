import React from "react";
const Logout_05: React.FC<
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
        d="M6.745 5.833a1 1 0 0 1-.078 1.412C5.008 8.73 4 10.656 4 13a8 8 0 0 0 16 0c0-2.344-1.008-4.27-2.667-5.755a1 1 0 1 1 1.334-1.49C20.69 7.566 22 10.013 22 13c0 5.523-4.477 10-10 10S2 18.523 2 13c0-2.987 1.31-5.434 3.333-7.245a1 1 0 0 1 1.412.078"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 13a1 1 0 0 0 1-1V5.5h1.5a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 9.5 5.5H11V12a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Logout_05;
