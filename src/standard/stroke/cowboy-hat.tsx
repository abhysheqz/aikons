import React from "react";
const CowboyHat: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16.276 18c-.985 1.102-2.264 2-4.276 2s-3.29-.898-4.276-2m8.552 0c1.211-1.354 1.979-3.016 3.122-3.692M16.276 18c2.069 0 5.724.562 5.724-2.5 0-.787-.68-1.5-1.5-1.5-.282 0-.54.053-.781.15m0 0q-.166.066-.321.158m.32-.159-.32.16m0 0C18.073 14.955 15.68 16 12 16s-6.073-1.044-7.398-1.692M7.724 18c-1.211-1.354-1.979-3.016-3.122-3.692M7.724 18C5.655 18 2 18.562 2 15.5c0-.787.68-1.5 1.5-1.5.282 0 .54.053.781.15m0 0q.166.066.321.158m-.32-.159.32.16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 12.5C6 10 6 5 10 4c.272.817 1.14 1.5 2 1.5s1.728-.683 2-1.5c4 1 4 6 4 8.5M6.5 10h11"
      />
    </svg>
  );
};
export default CowboyHat;
