import React from "react";
const Triangle: React.FC<
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
        d="M9.597 5.784c1.047-1.886 3.76-1.886 4.807 0l6.601 11.881c1.019 1.833-.307 4.086-2.404 4.086H5.4c-2.096 0-3.422-2.253-2.403-4.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Triangle;
