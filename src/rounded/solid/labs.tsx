import React from "react";
const Labs: React.FC<
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
        d="M12.875 7a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.356 9.459a.75.75 0 0 1 1.038 0l.006.006c.12.121.46.467.652.674.387.42.905 1.015 1.424 1.71.518.694 1.048 1.502 1.451 2.348.4.839.698 1.764.698 2.678 0 1.695-.566 2.949-1.508 3.768-.924.802-2.117 1.107-3.242 1.107s-2.318-.305-3.242-1.107c-.942-.819-1.508-2.073-1.508-3.768 0-.915.298-1.84.698-2.678.403-.846.933-1.654 1.451-2.347a22 22 0 0 1 1.424-1.711c.191-.207.532-.553.652-.674z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.875 2a1 1 0 1 0 0 2v13.5a4.5 4.5 0 1 0 9 0V4a1 1 0 1 0 0-2zm7 2v5.8c-.272.188-.52.334-.77.424-.35.127-.677.133-1.073-.104-1.011-.607-1.964-.46-2.753-.066a5 5 0 0 0-.404.23V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Labs;
