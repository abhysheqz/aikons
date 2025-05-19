import React from "react";
const AiLearning: React.FC<
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
        d="M12.75 4.033h-1.5v-1.75h-1.5v1.75h-1.5v1.5H6.5v1.5h1.75v1.5H6.5v1.5h1.75v1.5h1.5v1.75h1.5v-1.75h1.5v1.75h1.5v-1.75h1.5v-1.5h1.75v-1.5h-1.75v-1.5h1.75v-1.5h-1.75v-1.5h-1.5v-1.75h-1.5z"
      />
      <path
        fill="currentColor"
        d="m5 3.155-2.783-.84a.75.75 0 0 0-.967.718v15.75l10 3v-7h-3v-1.75h-1.5v-1.5H5zM12.75 14.783v7l10-3V3.033a.75.75 0 0 0-.967-.718L19 3.155v8.378h-1.75v1.5h-1.5v1.75z"
      />
    </svg>
  );
};
export default AiLearning;
