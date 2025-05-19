import React from "react";
const PinOff: React.FC<
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
        d="m2 2 20 20M3 21l6-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.248 16.422c-.414 1.232-1.224 2.119-2.843 3.66l-9.46-9.538.057-.056c1.512-1.513 2.404-2.405 3.62-2.766m8.607 5.494-.146-1.79c1.578-1.268 3.379-1.637 4.855-2.808-.055-1.856-.787-2.988-1.705-3.874-1.415-1.363-3.021-1.653-3.742-1.683-1.278 1.677-2.023 4.112-2.892 4.858l-1.79-.159"
      />
    </svg>
  );
};
export default PinOff;
