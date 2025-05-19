import React from "react";
const Podcast: React.FC<
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
        d="M12 4.187c-4.308 0-7.8 3.47-7.8 7.75 0 1.595.484 3.074 1.313 4.305a.965.965 0 0 1-.268 1.344.98.98 0 0 1-1.353-.266 9.6 9.6 0 0 1-1.642-5.383c0-5.35 4.365-9.687 9.75-9.687s9.75 4.337 9.75 9.687c0 1.99-.605 3.843-1.642 5.383a.98.98 0 0 1-1.353.266.965.965 0 0 1-.268-1.344 7.67 7.67 0 0 0 1.313-4.305c0-4.28-3.492-7.75-7.8-7.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 11a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0z"
      />
      <path
        fill="currentColor"
        d="M13 16a1 1 0 1 0-2 0v2.94l-1.53 1.53a.75.75 0 0 0 .53 1.28h4a.75.75 0 0 0 .53-1.28L13 18.94z"
      />
    </svg>
  );
};
export default Podcast;
