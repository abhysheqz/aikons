import React from "react";
const Line: React.FC<
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
        d="M12 1.25c-5.818 0-10.75 4.032-10.75 9.25S6.182 19.75 12 19.75q.635 0 1.25-.062V22a.75.75 0 0 0 1.275.536c1.67-1.635 4.528-4.527 6.316-6.77 1.197-1.485 1.909-3.3 1.909-5.266 0-5.218-4.932-9.25-10.75-9.25m-.114 6.829a.75.75 0 0 0-1.37.421v4a.75.75 0 0 0 1.5 0v-1.558l1.342 1.979a.75.75 0 0 0 1.37-.421v-4a.75.75 0 0 0-1.5 0v1.558zM6.25 8.5a.75.75 0 1 0-1.5 0v4c0 .414.336.75.75.75h1.13a.75.75 0 0 0 0-1.5h-.38zm3.391 0a.75.75 0 1 0-1.5 0v4a.75.75 0 0 0 1.5 0zm6.711-.75a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75H18.5a.75.75 0 0 0 0-1.5h-1.398v-.5h.878a.75.75 0 0 0 0-1.5h-.878v-.5H18.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Line;
