import React from "react";
const Github: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 17.488c1.63 3.393 4.294 4.606 7.5 3.721"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.997 22.488V19.06c0-.361.098-.716.284-1.026l.54-.9a.1.1 0 0 0-.055-.147c-3.584-1.16-5.582-2.89-5.762-6.46-.055-1.095.451-2.437 1.283-4.006-.246-1.457-.276-2.335-.016-3.929a.1.1 0 0 1 .112-.083c1.663.214 2.582.518 3.758 1.446 2.237-.55 4.095-.653 6.7.01.778-.698 1.885-1.23 3.692-1.476a.1.1 0 0 1 .11.073c.342 1.3.366 2.163.034 3.918.626.933 1.377 2.439 1.32 4.047-.238 3.573-1.848 5.134-5.764 6.457a.1.1 0 0 0-.054.15c.226.352.387.613.585.982.148.275.22.584.22.896v3.476"
      />
    </svg>
  );
};
export default Github;
