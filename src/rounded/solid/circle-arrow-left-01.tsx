import React from "react";
const CircleArrowLeft_01: React.FC<
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
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75 22.75 17.937 22.75 12m-11.21.063L11.514 12l.026-.063q.078-.173.262-.454c.248-.374.591-.804.955-1.225.36-.416.722-.804.995-1.088l.449-.457a1 1 0 0 0-1.402-1.427l-.489.498c-.289.3-.677.715-1.067 1.167-.386.448-.793.951-1.108 1.427a5.4 5.4 0 0 0-.417.735c-.104.23-.218.545-.218.887s.114.656.218.886c.112.248.26.499.417.736.315.476.722.98 1.108 1.427.39.452.778.867 1.067 1.167l.49.497a1 1 0 0 0 1.4-1.427l-.448-.456a29 29 0 0 1-.995-1.088c-.364-.421-.707-.852-.955-1.225a3.4 3.4 0 0 1-.262-.454"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowLeft_01;
