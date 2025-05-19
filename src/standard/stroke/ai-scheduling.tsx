import React from "react";
const AiScheduling: React.FC<
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
        d="M18 2v3M6 2v3M19.5 3.5h-15a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V5.5a2 2 0 0 0-2-2M2.5 8h19"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.444 14.528a3.56 3.56 0 0 0 3.084-3.084c.03-.244.226-.444.472-.444s.441.2.472.444a3.56 3.56 0 0 0 3.084 3.084c.244.03.444.226.444.472s-.2.441-.444.472a3.56 3.56 0 0 0-3.084 3.084c-.03.244-.226.444-.472.444s-.441-.2-.472-.444a3.56 3.56 0 0 0-3.084-3.084C8.2 15.442 8 15.246 8 15s.2-.441.444-.472Z"
      />
    </svg>
  );
};
export default AiScheduling;
