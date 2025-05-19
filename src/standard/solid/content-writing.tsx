import React from "react";
const ContentWriting: React.FC<
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
        d="M18.706 12.26a1.74 1.74 0 0 1 2.46 0l1.075 1.074c.679.679.679 1.78 0 2.46l-6.237 6.236a.75.75 0 0 1-.53.22H13a.75.75 0 0 1-.75-.75v-2.474a.75.75 0 0 1 .22-.53z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.179 1.75A2.925 2.925 0 0 0 1.25 4.671V17.33a2.925 2.925 0 0 0 2.929 2.921h5.857a.975.975 0 1 0 0-1.947H4.179a.975.975 0 0 1-.977-.974V8.566h16.596v.96c0 .538.437.974.976.974s.976-.436.976-.974V4.671a2.925 2.925 0 0 0-2.929-2.921zM5.5 4.156a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm3.99 0a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContentWriting;
