import React from "react";
const Dumbbell_02: React.FC<
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
        d="M16.586 2a2 2 0 0 1 2.829 0l.585.586.793-.793a1 1 0 1 1 1.414 1.414L21.414 4l.586.586a2 2 0 0 1 0 2.828l-.1.1a2.8 2.8 0 0 0-.37-.459L16.945 2.47a2.8 2.8 0 0 0-.459-.37zm-.91 7.737-5.939 5.94 1.586 1.585a1.75 1.75 0 0 1 0 2.475l-1.086 1.086a1.75 1.75 0 0 1-2.475 0l-4.585-4.586a1.75 1.75 0 0 1 0-2.475l1.085-1.085a1.75 1.75 0 0 1 2.475 0l1.586 1.586 5.94-5.94-1.586-1.586a1.75 1.75 0 0 1 0-2.475l1.085-1.085a1.75 1.75 0 0 1 2.475 0l4.586 4.585a1.75 1.75 0 0 1 0 2.475l-1.086 1.086a1.75 1.75 0 0 1-2.475 0zM4 21.414l.586.586a2 2 0 0 0 2.828 0l.1-.1a2.8 2.8 0 0 1-.459-.37L2.47 16.946a2.8 2.8 0 0 1-.37-.459l-.1.1a2 2 0 0 0 0 2.828l.586.586-.793.793a1 1 0 1 0 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dumbbell_02;
