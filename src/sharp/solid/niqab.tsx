import React from "react";
const Niqab: React.FC<
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
        fill="currentColor"
        d="M12.5 5.75c-1.249 0-2.25 1.002-2.25 2.223V8h4.5v-.027c0-1.221-1.001-2.223-2.25-2.223M10.25 17.25V11h4.5v6.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 1.25c-3.572 0-6.532 2.772-6.532 6.269 0 .909-.408 2.684-1.147 4.65-.732 1.949-1.744 3.963-2.871 5.359l-.45.557.534.476c6.269 5.585 14.663 5.585 20.932 0l.534-.476-.45-.557c-1.127-1.396-2.139-3.41-2.871-5.359-.74-1.966-1.147-3.741-1.147-4.65 0-3.497-2.96-6.269-6.532-6.269M8.75 7.973c0-2.062 1.685-3.723 3.75-3.723s3.75 1.66 3.75 3.723V18.75h-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Niqab;
