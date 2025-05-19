import React from "react";
const FolderVideo: React.FC<
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
        d="M12.25 16c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v.5l1.915-1.17a.75.75 0 0 1 1.085.67v4a.75.75 0 0 1-1.085.67L19.75 19.5v.5A1.75 1.75 0 0 1 18 21.75h-4A1.75 1.75 0 0 1 12.25 20z"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h7.563A3 3 0 0 1 11 20v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 2.605 1.512l.5-.3a2 2 0 0 1 1.645-.066V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderVideo;
