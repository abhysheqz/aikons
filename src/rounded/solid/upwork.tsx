import React from "react";
const Upwork: React.FC<
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
        d="M10.429 4.129A1 1 0 0 0 8.5 4.5v6.25c0 1.49-1.26 2.75-2.75 2.75S3 12.24 3 10.75V4.5a1 1 0 1 0-2 0v6.25c0 2.595 2.155 4.75 4.75 4.75s4.75-2.155 4.75-4.75V9.42c.3.603.627 1.205.983 1.78q.162.26.337.52a4259 4259 0 0 1-1.177 6.266l-.25 1.329a1 1 0 1 0 1.965.37l.25-1.329.574-3.048.3-1.595C14.6 14.76 15.967 15.5 17.625 15.5 20.56 15.5 23 13.06 23 10.125S20.56 4.75 17.625 4.75c-2.864 0-4.633 1.96-5.224 4-.686-1.345-1.232-2.736-1.681-3.883q-.153-.39-.292-.738m7.223 9.37c-1.367 0-2.573-.846-3.652-2.251.129-.695.231-1.252.288-1.57.275-1.52 1.443-2.928 3.364-2.928C19.468 6.75 21 8.294 21 10.125S19.468 13.5 17.652 13.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upwork;
