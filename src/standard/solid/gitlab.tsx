import React from "react";
const Gitlab: React.FC<
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
        d="M5.452 1.252a.75.75 0 0 1 .735.447L9.491 9.25h5.018l3.304-7.55a.75.75 0 0 1 1.407.09l3.5 12a.75.75 0 0 1-.251.796l-10 8a.75.75 0 0 1-.937 0l-10-8a.75.75 0 0 1-.252-.796l3.5-12a.75.75 0 0 1 .672-.538"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gitlab;
