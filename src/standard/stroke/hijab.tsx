import React from "react";
const Hijab: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.5 5a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0V8a3 3 0 0 0-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 10c0 2.5-.587 4.4-4 6s-4 4-4 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.5 8h6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 8c0-3.048-2.796-6-6-6s-6 2.952-6 6c0 1.926-1.348 6.246-3.428 9.236-.305.439-.259 1.047.16 1.38 5.663 4.512 12.873 4.512 18.536 0 .418-.333.465-.941.16-1.38C19.847 14.246 18.5 9.926 18.5 8Z"
      />
    </svg>
  );
};
export default Hijab;
