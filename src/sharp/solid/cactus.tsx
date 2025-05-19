import React from "react";
const Cactus: React.FC<
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
        d="M5.901 14.048a.75.75 0 0 1 .599-.298h11a.75.75 0 0 1 .721.956l-2.155 7.544H7.934L5.78 14.706a.75.75 0 0 1 .122-.658"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2.861a4.5 4.5 0 0 0-2.597 1.691L7.6 3.95l-1.2 1.6 1.18.885a4.5 4.5 0 0 0-.03 1.413l.153 1.125L6.4 9.95l1.2 1.6.413-.31.497 3.645 1.981-.27-.96-7.037a2.492 2.492 0 1 1 4.938 0l-.96 7.037 1.982.27.497-3.644.412.309 1.2-1.6-1.303-.977.154-1.125c.066-.484.052-.96-.03-1.413l1.18-.885-1.2-1.6-.803.602A4.5 4.5 0 0 0 13 2.862V1.75h-2zm2 8.889v3h-2v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cactus;
