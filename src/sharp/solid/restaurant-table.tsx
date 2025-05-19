import React from "react";
const RestaurantTable: React.FC<
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
        d="M12.75 16.25v4h2v1.5h-5.5v-1.5h2v-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.994 16.75H21c-.523 0-.745.148-1.08.372l-.004.002c-.412.275-.94.626-1.916.626-.975 0-1.504-.351-1.916-.626l-.003-.002c-.336-.224-.558-.372-1.081-.372s-.745.148-1.08.372l-.004.002c-.412.275-.94.626-1.916.626-.975 0-1.504-.351-1.916-.626l-.003-.002c-.336-.224-.558-.372-1.081-.372s-.745.148-1.08.372l-.004.002c-.412.275-.94.626-1.916.626-.975 0-1.504-.351-1.916-.626l-.003-.002c-.336-.224-.558-.372-1.081-.372h-.994l2.428-8.5h15.132zM16.645 7a4.755 4.755 0 0 0-3.894-3.691V2.25h-1.5v1.059A4.755 4.755 0 0 0 7.356 7z"
      />
    </svg>
  );
};
export default RestaurantTable;
