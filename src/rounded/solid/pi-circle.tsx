import React from "react";
const PiCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.222 7H17a1 1 0 1 1 0 2H15.65l-.992 7.138a1 1 0 1 1-1.98-.275L13.63 9h-2.426l-.84 6.046c-.17 1.234-1.366 1.934-2.479 1.79-.775-.1-1.492-.595-1.78-1.372l-.042-.117a1 1 0 1 1 1.875-.694l.043.116s.006.016.033.036c.026.02.07.04.126.048a.3.3 0 0 0 .205-.043.1.1 0 0 0 .038-.038v-.001L9.186 9C8.431 9.018 8 9.55 8 10a1 1 0 1 1-2 0c0-1.754 1.545-3 3.222-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PiCircle;
