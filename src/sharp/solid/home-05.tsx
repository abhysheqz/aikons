import React from "react";
const Home_05: React.FC<
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
        d="M11.368 1.974c.37-.299.894-.299 1.264 0l10.118 8.18-1.264 1.596-.746-.603V22.25H3.24V11.163l-.726.587-1.264-1.597zM12.999 16H10.99v2H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_05;
