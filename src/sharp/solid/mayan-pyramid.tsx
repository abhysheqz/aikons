import React from "react";
const MayanPyramid: React.FC<
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
        d="M8.25 6.25V2A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 .75.75v4.25zM18.75 7.75v3.5h-3.553l-.765-3.5zM20.75 12.75v3.5h-4.459l-.766-3.5zM22.75 17.75v5h-5.037l-1.094-5zM16.178 22.75H7.822l3.282-15h1.792zM6.287 22.75l1.094-5H1.25v5zM3.25 16.25v-3.5h5.224l-.765 3.5zM5.25 11.25v-3.5h4.318l-.765 3.5z"
      />
    </svg>
  );
};
export default MayanPyramid;
