import React from "react";
const AddFemale: React.FC<
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
        d="M18.25 13.75a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.466 15.766-1.716-.516v-2.155c1.07-.136 2.07-.356 2.97-.646.284-.091.414-.418.306-.697-.342-.895-.776-2.5-.776-4.405 0-2.952 0-5.412-3-4.92-1.5-1.968-7-1.968-7 3.936 0 2.899-.354 4.403-.765 5.393-.114.277.011.602.296.693.9.29 1.9.51 2.969.646v2.155l-3.716 1.118a4.07 4.07 0 0 0-2.76 2.892c-.136.536.327.99.882.99H13.25a2.5 2.5 0 0 1 1.216-4.484"
      />
    </svg>
  );
};
export default AddFemale;
