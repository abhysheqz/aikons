import React from "react";
const TvSmart: React.FC<
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
        d="M17.237 19.705q.68-.033 1.252-.108.447-.059.85-.158l.556 1.11a1 1 0 1 1-1.79.895zM4.66 19.439q.403.1.85.158.571.075 1.253.108l-.87 1.739a1 1 0 1 1-1.788-.895z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.944 2.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153M11.25 15.5a7.25 7.25 0 0 1 7.25-7.25.75.75 0 0 0 0-1.5 8.75 8.75 0 0 0-8.75 8.75.75.75 0 0 0 1.5 0m3.2 0a4.05 4.05 0 0 1 4.05-4.05.75.75 0 0 0 0-1.5 5.55 5.55 0 0 0-5.55 5.55.75.75 0 0 0 1.5 0m3.2 0c0-.47.38-.85.85-.85a.75.75 0 0 0 0-1.5 2.35 2.35 0 0 0-2.35 2.35.75.75 0 0 0 1.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TvSmart;
