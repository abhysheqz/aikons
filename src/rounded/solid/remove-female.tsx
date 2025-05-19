import React from "react";
const RemoveFemale: React.FC<
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
        d="M16.043 16.543a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.694 16.335-1.944-.585v-2.155c1.07-.136 2.07-.356 2.97-.646.284-.091.414-.418.306-.697-.342-.895-.776-2.5-.776-4.405 0-2.952 0-5.412-3-4.92-1.5-1.968-7-1.968-7 3.936 0 2.899-.354 4.403-.765 5.393-.114.277.011.602.296.693.9.29 1.9.51 2.969.646v2.155l-3.716 1.118a4.07 4.07 0 0 0-2.76 2.892c-.136.536.327.99.882.99h12.917q.041-.046.086-.091l.909-.909-.909-.909a2.25 2.25 0 0 1-.465-2.506"
      />
    </svg>
  );
};
export default RemoveFemale;
