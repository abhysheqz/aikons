import React from "react";
const ImageDelete_01: React.FC<
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
        d="M12.5 2.25H4A2.75 2.75 0 0 0 1.25 5v15A2.75 2.75 0 0 0 4 22.75h15A2.75 2.75 0 0 0 21.75 20v-8.5c-.576 0-1.152-.22-1.591-.659L18.25 8.932l-1.909 1.909a2.25 2.25 0 1 1-3.182-3.182l1.909-1.909-1.909-1.909A2.24 2.24 0 0 1 12.5 2.25m7.298 17.571c0 .54-.437.976-.977.976H6.336l7.51-6.758a2 2 0 0 1 2.447-.178l3.505 2.337zM7.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.043 1.543a1 1 0 0 1 1.414 0l2.793 2.793 2.793-2.793a1 1 0 1 1 1.414 1.414L19.664 5.75l2.793 2.793a1 1 0 0 1-1.414 1.414L18.25 7.164l-2.793 2.793a1 1 0 0 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDelete_01;
