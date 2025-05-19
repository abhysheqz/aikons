import React from "react";
const OnlineLearning_03: React.FC<
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
        d="M2 8a3 3 0 0 1 3-3 1 1 0 0 1 0 2 1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.492 19a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M10 1.25A2.75 2.75 0 0 0 7.25 4v7.5A2.75 2.75 0 0 0 10 14.25h2a.25.25 0 0 1 .25.25V16a.75.75 0 0 0 1.148.636l3.513-2.196a1.25 1.25 0 0 1 .663-.19H20a2.75 2.75 0 0 0 2.75-2.75V4A2.75 2.75 0 0 0 20 1.25zm4.5 3a.75.75 0 0 0-.696.471l-2 5a.75.75 0 0 0 1.393.557l.411-1.028h2.784l.412 1.028a.75.75 0 0 0 1.393-.557l-2-5a.75.75 0 0 0-.697-.471zm1.292 3.5h-1.584L15 5.77z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OnlineLearning_03;
