import React from "react";
const MaximizeScreen: React.FC<
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
        d="M10.534 9.068h3.016L10.618 12H1.25v9.773c0 .54.438.977.977.977H12v-9.368l2.932-2.932v3.016h1.954V7.114h-6.352zm-7.33 11.728v-6.841h6.842v6.84zM1.536 1.536a.98.98 0 0 1 .691-.286h3.91v1.955H3.204v2.931H1.25V2.227c0-.259.103-.507.286-.69m7.532-.286h5.864v1.955H9.068zm11.728 1.955h-2.932V1.25h3.909c.54 0 .977.438.977.977v3.91h-1.954zM1.25 10.045V8.092h1.955v1.955zm21.5-.977v5.864h-1.954V9.068zm-1.954 11.728v-2.932h1.954v3.909c0 .54-.437.977-.977.977h-3.91v-1.954zm-4.887 0v1.954h-1.955v-1.954z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MaximizeScreen;
