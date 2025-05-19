import React from "react";
const SolarSystem_01: React.FC<
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
        d="M12 3.205c-.921 0-1.807.14-2.639.402l-.586-1.865c1.02-.32 2.103-.492 3.225-.492 5.937 0 10.75 4.813 10.75 10.75 0 2.183-.652 4.216-1.771 5.913l-1.632-1.076A8.75 8.75 0 0 0 20.795 12 8.795 8.795 0 0 0 12 3.205m-7.477 4.16A8.75 8.75 0 0 0 3.205 12 8.795 8.795 0 0 0 12 20.796c.921 0 1.807-.142 2.639-.403l.586 1.865c-1.02.32-2.103.492-3.225.492-5.937 0-10.75-4.813-10.75-10.75 0-2.078.59-4.02 1.613-5.666z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.24 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.24 19a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M5.24 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.99 8a4 4 0 0 0-3.92 4.8l-1.96.399A6 6 0 1 1 11.99 18v-2a4 4 0 1 0 0-8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.74 12c0-.69.558-1.25 1.246-1.25h.009c.688 0 1.245.56 1.245 1.25s-.557 1.25-1.245 1.25h-.01c-.687 0-1.245-.56-1.245-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarSystem_01;
