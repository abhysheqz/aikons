import React from "react";
const Drone: React.FC<
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
        d="M12 6.25c-2.795 0-5.347.226-7.218.6-.93.186-1.73.416-2.317.693-.291.138-.57.306-.786.518-.218.212-.429.528-.429.939 0 .649.51 1.064.88 1.293.422.261.992.482 1.642.668 1.16.333 2.709.592 4.478.737V12a3.75 3.75 0 1 0 7.5 0v-.302c1.77-.145 3.318-.404 4.478-.737.65-.186 1.22-.407 1.643-.668.37-.229.879-.644.879-1.293 0-.41-.211-.727-.429-.94a2.9 2.9 0 0 0-.786-.517c-.587-.277-1.387-.507-2.317-.693-1.871-.374-4.423-.6-7.218-.6M12 11a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H7v3a1 1 0 0 1-2 0V4H3a1 1 0 0 1-1-1M14 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0V4h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.47 14.234C5.514 15.246 4 17.182 4 19.5V21a1 1 0 1 0 2 0v-1.5c0-1.539 1.168-2.994 2.727-3.654a5.1 5.1 0 0 1-1.257-1.61M15.273 15.845c1.56.66 2.727 2.115 2.727 3.654V21a1 1 0 1 0 2 0v-1.5c0-2.317-1.514-4.253-3.47-5.265a5.1 5.1 0 0 1-1.257 1.611"
      />
    </svg>
  );
};
export default Drone;
