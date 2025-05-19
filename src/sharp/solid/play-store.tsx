import React from "react";
const PlayStore: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm8.379 10.959 1.647 1.512C10.03 16.353 7 18 7 18v-1.062zm-1.114-1.022L7 9.19v5.776zM7 6v1.155l4.416 4.052 2.008-1.71C10.307 7.797 7 6 7 6m7.834 4.266c1.284.7 2.433 1.33 3.166 1.734-.812.448-2.133 1.17-3.583 1.962l-1.888-1.733z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayStore;
