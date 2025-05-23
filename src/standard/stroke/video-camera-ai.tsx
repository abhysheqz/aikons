import React from "react";
const VideoCameraAi: React.FC<
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
        d="M10.47 6.025c.006-.033.054-.033.06 0a4.42 4.42 0 0 0 3.445 3.444c.033.007.033.055 0 .062a4.42 4.42 0 0 0-3.444 3.444c-.007.033-.055.033-.062 0A4.42 4.42 0 0 0 7.025 9.53c-.033-.007-.033-.055 0-.062a4.42 4.42 0 0 0 3.444-3.444"
      />
      <path
        fill="currentColor"
        d="M15.12 2.31c.085-.413.675-.413.76 0 .186.912.899 1.624 1.81 1.81.413.085.413.675 0 .76a2.32 2.32 0 0 0-1.81 1.81c-.085.413-.675.413-.76 0a2.32 2.32 0 0 0-1.81-1.81c-.413-.085-.413-.675 0-.76a2.32 2.32 0 0 0 1.81-1.81"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 7H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9M17 15.5v-2l3.192-3.647a1.032 1.032 0 0 1 1.808.68v7.936a1.032 1.032 0 0 1-1.808.68z"
      />
    </svg>
  );
};
export default VideoCameraAi;
