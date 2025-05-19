import React from "react";
const HotspotOffline: React.FC<
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
        d="M9.25 14A2.75 2.75 0 0 1 12 11.25h.31l2.44 2.44V14a2.75 2.75 0 1 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.799 5.4a1 1 0 0 1-.2 1.4A8.99 8.99 0 0 0 3 14c0 2.028.67 3.896 1.8 5.4a1 1 0 0 1-1.6 1.202A10.96 10.96 0 0 1 1 14c0-3.599 1.73-6.794 4.398-8.8a1 1 0 0 1 1.4.2M12 5c-.942 0-1.849.145-2.7.412a1 1 0 1 1-.6-1.908A11 11 0 0 1 12 3c6.075 0 11 4.925 11 11 0 1.148-.176 2.257-.503 3.3a1 1 0 1 1-1.909-.6A9 9 0 0 0 21 14a9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.463 8.44a1 1 0 0 1-.268 1.388A5.02 5.02 0 0 0 7 14c0 1.287.474 2.455 1.252 3.34a1 1 0 1 1-1.502 1.32A7.04 7.04 0 0 1 5 14a7.02 7.02 0 0 1 3.074-5.828 1 1 0 0 1 1.39.268m8.031 7.69a1 1 0 0 1 .375 1.364 7 7 0 0 1-.83 1.166 1 1 0 1 1-1.502-1.32q.337-.385.594-.834a1 1 0 0 1 1.363-.375M11.503 7.918a1 1 0 0 1 1.08-.915c3.402.281 6.133 3.012 6.414 6.415a1 1 0 0 1-1.994.164 5.04 5.04 0 0 0-4.585-4.585 1 1 0 0 1-.915-1.08"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotspotOffline;
