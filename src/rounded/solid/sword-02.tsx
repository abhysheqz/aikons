import React from "react";
const Sword_02: React.FC<
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
        d="M3.944 12.25a.944.944 0 0 0 0 1.889h.54c.25 0 .491.1.668.277l1.423 1.423-1.882 1.882-.057.062a2.25 2.25 0 1 0 1.567 1.1l1.708-1.708 1.423 1.423a.95.95 0 0 1 .277.668v.54a.944.944 0 0 0 1.889 0v-.54c0-.752-.299-1.472-.83-2.004L6.488 13.08a2.83 2.83 0 0 0-2.004-.83zm-.224 7.22a.75.75 0 1 1 1.06 1.06.75.75 0 0 1-1.06-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.78 1.97a.75.75 0 0 1 .2.699l-.873 3.783a2.5 2.5 0 0 1-.79 1.316L9.768 17.042l-.27.282a.75.75 0 0 1-1.073.01l-2.004-2.011a.75.75 0 0 1 .003-1.062l.278-.276 9.278-10.552a2.5 2.5 0 0 1 1.317-.79l3.783-.874a.75.75 0 0 1 .699.2"
      />
    </svg>
  );
};
export default Sword_02;
