import React from "react";
const FolderSecurity: React.FC<
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
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V11m-9.982-4.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 16.616v-1.971a.634.634 0 0 0-.523-.62 9.1 9.1 0 0 1-2.66-.949.66.66 0 0 0-.634 0 9.1 9.1 0 0 1-2.66.949.634.634 0 0 0-.523.62v1.971c0 2.571 2.542 3.974 3.294 4.332.132.063.28.063.412 0 .752-.358 3.294-1.76 3.294-4.332Z"
      />
    </svg>
  );
};
export default FolderSecurity;
