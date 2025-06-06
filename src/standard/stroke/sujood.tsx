import React from "react";
const Sujood: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 12.51c0-1.483-.889-3.946-4.444-5.924-4.444-2.473-7.741-1.723-8.888 0-.987 1.483-1.481 3.462 2.963 8.408H7a1 1 0 0 0-1 1v1.999a1 1 0 0 0 .998 1L11.5 19m8.5-6.49c-.5.324-2 1.872-4 1.485l1 2.498c.667.167 2.1 1.3 2.5 2.499l-3.918.007a1 1 0 0 1-.87-.504l-2.722-4.768c-.547-.957-.214-2.18.812-2.584L15.5 10m4.5 2.51h.258a2.742 2.742 0 1 1 0 5.482H19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 15H3a1 1 0 0 0-1 1v3"
      />
    </svg>
  );
};
export default Sujood;
