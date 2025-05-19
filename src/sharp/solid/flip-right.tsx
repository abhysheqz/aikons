import React from "react";
const FlipRight: React.FC<
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
        d="M22.752 3.225a.976.976 0 0 0-.978-.975h-2.931V4.2h1.954v1.95h1.955zm-7.819.975h1.955V2.25h-1.955zm7.819 6.825V8.101h-1.955v2.924zm0 4.874v-2.924h-1.955v2.924zm0 4.876V17.85h-1.955v1.946l-1.95-.01-.01 1.949 2.932.016a.98.98 0 0 0 .983-.975m-7.819.975h1.955V19.8h-1.955z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.227 2.251a.976.976 0 0 0-.977.975v17.54c0 .539.437.975.976.976l10.751.007V2.251z"
      />
    </svg>
  );
};
export default FlipRight;
