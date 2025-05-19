import React from "react";
const FileNotFound: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.274 4.177q.002-.414.11-.793l11.155 11.155h-.472a1.5 1.5 0 0 0-1.5 1.5v4.755l4.108-4.12 1.38 1.38-4.399 4.41a.97.97 0 0 1-.687.286H6.168a2.924 2.924 0 0 1-2.917-2.936zM5.028 1.492c.357-.156.75-.242 1.163-.242h11.642a2.924 2.924 0 0 1 2.917 2.932v10.763a.98.98 0 0 1-.285.692l-.646.647z"
      />
    </svg>
  );
};
export default FileNotFound;
