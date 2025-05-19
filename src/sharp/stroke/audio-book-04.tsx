import React from "react";
const AudioBook_04: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.99 11V9.875C19.99 5.525 16.41 2 11.995 2S4 5.526 4 9.875V11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.981 12.005 5.987 1.683M5.98 12.004v8.503l5.987 1.491 5.991-1.366v-8.65m-11.978.023-.018-.955a.01.01 0 0 0-.01-.009l-1.99-.066c-.759.449-2.23 1.962-1.936 3.956S3.519 17.792 4.033 18H5.98m5.987-4.313 5.991-1.705m-5.991 1.705v7.764m5.991-9.47.056-.932a.01.01 0 0 1 .01-.009l1.99-.066c.759.449 2.23 1.962 1.936 3.956S20.46 17.792 19.945 18H17.96"
      />
    </svg>
  );
};
export default AudioBook_04;
