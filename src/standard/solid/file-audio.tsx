import React from "react";
const FileAudio: React.FC<
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
        d="M15.99 16.25h-2.24c-.552 0-1 .53-1 1.184v1.632c0 .654.448 1.184 1 1.184h2.24c.17 0 .338.051.487.149l2.787 2.2c.667.439 1.486-.132 1.486-1.034v-6.63c0-.902-.82-1.473-1.486-1.034l-2.787 2.2a.9.9 0 0 1-.486.149"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.25l-1.587-1.25H13.75c-1.432 0-2.25-1.295-2.25-2.433v-1.633c0-1.139.818-2.434 2.25-2.434h2.104l2.724-2.144a2.1 2.1 0 0 1 2.172-.102V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileAudio;
