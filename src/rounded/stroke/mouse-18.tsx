import React from "react";
const Mouse_18: React.FC<
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
        d="M12 7V2.5M12 13v-2M7.33 4.476q1.586-.368 3.174-1.583C11.28 2.297 11.669 2 12 2s.72.298 1.498.894q1.585 1.215 3.17 1.582c.778.18 1.167.27 1.363.454s.285.47.464 1.044c2.267 7.263.8 13.517-5.478 15.782-.45.163-.675.244-1.016.244-.342 0-.567-.081-1.017-.244-6.277-2.265-7.749-8.519-5.482-15.782.179-.574.268-.86.465-1.044.196-.185.584-.274 1.361-.454"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 8.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 7 11.534 7 12 7s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 11 12.466 11 12 11s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"
      />
    </svg>
  );
};
export default Mouse_18;
