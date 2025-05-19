import React from "react";
const Maximize_04: React.FC<
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
        d="M13.681 3.268a1.187 1.187 0 0 0-1.372.971l-1.837 10.446-.295 1.57L7.58 13.56a1.348 1.348 0 0 0-2.027.117 1.43 1.43 0 0 0-.026 1.728l.013.018 4.118 7.19 11.66.138 1.412-9.125a1.2 1.2 0 0 0-.963-1.39 1.187 1.187 0 0 0-1.372.97l-.091.522-.79-.133.276-1.566a1.2 1.2 0 0 0-.963-1.39 1.187 1.187 0 0 0-1.372.97l-.092.523-.79-.133.276-1.566a1.2 1.2 0 0 0-.963-1.39 1.187 1.187 0 0 0-1.372.97l-.275 1.566-.79-.132 1.194-6.787a1.2 1.2 0 0 0-.963-1.391"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.189 2.75H7v-1.5h3.75V5h-1.5V3.81L7.418 5.641l-1.06-1.06zM5.641 7.42 3.81 9.25H5v1.5H1.25V7h1.5v1.19l1.83-1.831z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maximize_04;
