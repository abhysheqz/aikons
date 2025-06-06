import React from "react";
const PowerService: React.FC<
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
        d="M12.5 8 10 12h4l-2.5 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10.033v3.934c2.857 0 4.714 3.103 3.268 5.566L8.732 21.5c.732-1.247 2-1.966 3.268-1.967 1.268 0 2.536.72 3.268 1.967l3.464-1.967c-1.446-2.463.411-5.566 3.268-5.566v-3.934c-2.857 0-4.716-3.103-3.27-5.566L15.266 2.5c-.732 1.247-1.999 2-3.266 2s-2.534-.753-3.266-2L5.27 4.467C6.716 6.93 4.857 10.033 2 10.033"
      />
    </svg>
  );
};
export default PowerService;
