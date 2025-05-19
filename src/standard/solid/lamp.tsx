import React from "react";
const Lamp: React.FC<
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
        d="M10.996 19v-6h2v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.829 20.13a2.75 2.75 0 0 1 2.609-1.88h1.117a2.75 2.75 0 0 1 2.609 1.88l.544 1.633a.75.75 0 0 1-.712.987h-6a.75.75 0 0 1-.711-.987zM6.518 3.448A3.75 3.75 0 0 1 9.932 1.25h4.136c1.47 0 2.806.86 3.414 2.198l3.558 7.828a1.75 1.75 0 0 1-1.593 2.474H4.553a1.75 1.75 0 0 1-1.593-2.474z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lamp;
