import React from "react";
const FolderAudio: React.FC<
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
        d="M22.364 12.344a.75.75 0 0 1 .386.656v8a.75.75 0 0 1-1.148.636l-3.817-2.386H15.5c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h2.285l3.817-2.386a.75.75 0 0 1 .762-.02"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h15.426l-2-1.25H15.5A2.5 2.5 0 0 1 13 18v-2a2.5 2.5 0 0 1 2.5-2.5h1.926l3.514-2.196a2 2 0 0 1 1.81-.158V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderAudio;
