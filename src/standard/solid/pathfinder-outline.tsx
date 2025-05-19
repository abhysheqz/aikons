import React from "react";
const PathfinderOutline: React.FC<
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
        d="M3.932 2.955a.977.977 0 0 0-.977.977v8.795c0 .54.437.977.977.977h2.443a.977.977 0 0 1 0 1.955H3.932A2.93 2.93 0 0 1 1 12.727V3.932A2.93 2.93 0 0 1 3.932 1h8.795a2.93 2.93 0 0 1 2.932 2.932v2.443a.977.977 0 1 1-1.955 0V3.932a.977.977 0 0 0-.977-.977zm12.216 5.863c0-.54.437-.977.977-.977h2.443a2.93 2.93 0 0 1 2.932 2.932v8.795a2.93 2.93 0 0 1-2.932 2.932h-8.795a2.93 2.93 0 0 1-2.932-2.932v-2.443a.977.977 0 0 1 1.954 0v2.443c0 .54.438.977.978.977h8.795c.54 0 .977-.437.977-.977v-8.795a.977.977 0 0 0-.977-.978h-2.443a.977.977 0 0 1-.977-.977"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.813 9.875a.937.937 0 0 0-.938.938v1.874a.937.937 0 1 1-1.875 0v-1.874A2.813 2.813 0 0 1 10.813 8h1.874a.937.937 0 1 1 0 1.875zm3.75 0c.517 0 .937.42.937.938v1.874a2.813 2.813 0 0 1-2.812 2.813h-1.876a.937.937 0 1 1 0-1.875h1.876c.517 0 .937-.42.937-.937v-1.876c0-.517.42-.937.938-.937"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PathfinderOutline;
