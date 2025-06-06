import React from "react";
const PhoneOff_01: React.FC<
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
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 0 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.797 4.797c-.047.637-.047 1.389-.047 2.25v9.906c0 1.095 0 2.014.097 2.744.103.774.33 1.481.894 2.05.563.57 1.263.8 2.028.905.723.098 1.632.098 2.714.098h3.033c1.083 0 1.992 0 2.714-.098.766-.104 1.465-.334 2.029-.904s.79-1.277.894-2.05q.03-.235.05-.495l-1.887-1.886c0 .592-.002 1.36-.01 1.683H6.694c-.01-.41-.01-1.54-.01-2.115V6.684zM17.317 13.781V7.112c0-1.18-.003-1.965-.08-2.55-.074-.557-.2-.783-.345-.93-.145-.145-.368-.273-.92-.348-.378-.052-.841-.07-1.443-.077l-.215.433a.97.97 0 0 1-.864.54h-2.9c-.366 0-.701-.209-.865-.54l-.214-.433c-.602.007-1.066.025-1.444.077-.514.07-.743.186-.889.32L5.764 2.228c.56-.553 1.25-.778 2.005-.881.623-.085 1.384-.096 2.276-.098h3.91c.891.002 1.652.013 2.275.098.766.104 1.465.334 2.029.904s.79 1.277.894 2.05c.097.731.097 1.65.097 2.744v8.669z"
      />
    </svg>
  );
};
export default PhoneOff_01;
