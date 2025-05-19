import React from "react";
const Mouse_04: React.FC<
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
        d="M11.25 4.265a19 19 0 0 1 1.5 0V2h-1.5zM13.5 7.25h-.75V4.265c.64.026 1.27.08 1.886.15 2.59.29 4.675 2.263 4.887 4.694.123 1.416.227 2.886.227 4.391s-.104 2.975-.227 4.39c-.212 2.432-2.298 4.405-4.887 4.695-.854.096-1.735.165-2.636.165-.9 0-1.782-.069-2.636-.165-2.59-.29-4.675-2.263-4.887-4.694-.123-1.416-.227-2.886-.227-4.391s.104-2.975.227-4.39c.212-2.432 2.298-4.405 4.887-4.695a26 26 0 0 1 1.886-.15V7.25h-.75a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h.75V14h1.5v-1.25h.75a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75"
      />
      <path fill="currentColor" d="M11.25 8.75v2.5h1.5v-2.5z" />
    </svg>
  );
};
export default Mouse_04;
