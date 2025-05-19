import React from "react";
const Chocolate: React.FC<
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
        d="M13.288 2.057a2 2 0 0 1 2.865-.038l5.828 5.829a2 2 0 0 1-.037 2.865l-4.756 4.513a1 1 0 0 1-1.376-1.45l1.82-1.728L15.5 9.915l-1.793 1.793a1 1 0 0 1-1.414-1.415l1.792-1.792-2.132-2.132-1.728 1.82a1 1 0 1 1-1.45-1.377zm.042 2.86 2.17 2.17 1.446-1.446-2.208-2.207zm5.03 2.138L16.914 8.5l2.17 2.17 1.483-1.409z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.092 6.2a1 1 0 0 1 1.307.093l8.308 8.308a1 1 0 0 1 .093 1.307L15.03 19.6a1 1 0 0 1-1.694-.153l-1.611-3.223-2.713-.388a1 1 0 0 1-.848-.848l-.388-2.713-3.223-1.611A1 1 0 0 1 4.4 8.969z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.688 11.898q.094.06.194.108l2.52 1.26.277 1.935A2.5 2.5 0 0 0 8.8 17.322l1.934.276 1.26 2.521q.051.1.108.194L10.414 22a2 2 0 0 1-2.828 0L2 16.415a2 2 0 0 1 0-2.828z"
      />
    </svg>
  );
};
export default Chocolate;
