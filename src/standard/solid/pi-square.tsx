import React from "react";
const PiSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM10.223 7H17a1 1 0 1 1 0 2H15.65l-.992 7.138a1 1 0 1 1-1.98-.275L13.63 9h-1.426l-.84 6.046c-.17 1.234-1.366 1.934-2.479 1.79-.775-.1-1.492-.595-1.78-1.372l-.042-.117a1 1 0 1 1 1.875-.694l.043.116s.006.016.033.036c.026.02.07.04.126.048a.3.3 0 0 0 .205-.043.1.1 0 0 0 .036-.035l.804-5.774C9.431 9.018 9 9.55 9 10a1 1 0 1 1-2 0c0-1.754 1.545-3 3.223-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PiSquare;
