import React from "react";
const Notification_01: React.FC<
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
        d="M4.41 11.452a7.601 7.601 0 0 1 15.18 0q.014.258.023.496c.022.542.041 1.013.14 1.465.117.54.334.964.775 1.295a3.06 3.06 0 0 1 1.222 2.445c0 1.381-1.087 2.597-2.55 2.597H4.8c-1.463 0-2.55-1.216-2.55-2.597 0-.962.453-1.868 1.222-2.445.441-.33.658-.755.775-1.295.099-.452.118-.923.14-1.465q.01-.238.022-.496"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.529 1.374C10.974 1.083 11.517 1 12 1s1.026.083 1.471.374c.494.324.779.847.779 1.501 0 .596-.233 1.219-.587 1.696-.35.469-.921.929-1.663.929s-1.314-.46-1.663-.93c-.354-.476-.587-1.099-.587-1.695 0-.654.285-1.177.779-1.5M9 18a1 1 0 0 1 1 1 2 2 0 1 0 4 0 1 1 0 1 1 2 0 4 4 0 0 1-8 0 1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notification_01;
