import React from "react";
const RotateRight_02: React.FC<
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
        d="M17.972 5.597c1.166-.682 2.694-.333 3.415.818.73 1.167.333 2.674-.848 3.365l-4.335 2.538 1.422 3.526c.493 1.25.628 2.341.259 3.262-.376.935-1.191 1.494-2.127 1.861l-.034.013-4.102 1.382c-.77.304-1.686.48-2.584.337-.93-.15-1.814-.643-2.425-1.618l-2.811-4.487a3.56 3.56 0 0 1-.19-3.456L6.44 7.31c.414-1.062 1.516-1.688 2.644-1.546 1.374.173 2.37 1.427 2.133 2.81a1 1 0 0 1-.024.1l-.374 1.172z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 1.25a.75.75 0 0 1 .75.75v3.003a.75.75 0 0 1-.75.75h-2.509a.75.75 0 0 1 0-1.5h1.098a4.6 4.6 0 0 0-.552-.424 6.5 6.5 0 0 0-1.71-.788c-1.15-.375-2.394-.382-3.493.03-1.66.621-2.85 1.662-3.665 3.268a.75.75 0 1 1-1.338-.68c.99-1.948 2.474-3.242 4.477-3.993 1.446-.542 3.035-.52 4.47-.056a8 8 0 0 1 2.085.967q.194.126.387.275V2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateRight_02;
