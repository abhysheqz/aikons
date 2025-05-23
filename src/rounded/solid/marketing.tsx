import React from "react";
const Marketing: React.FC<
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
        d="M16.163 4.935C15.553 6.18 15.15 7.97 15.15 10s.404 3.819 1.013 5.065c.637 1.304 1.341 1.74 1.837 1.74s1.2-.436 1.837-1.74c.61-1.246 1.013-3.036 1.013-5.065s-.404-3.819-1.013-5.065C19.2 3.63 18.496 3.195 18 3.195s-1.2.436-1.837 1.74m-1.7-.87C15.201 2.555 16.397 1.25 18 1.25s2.799 1.305 3.537 2.815c.766 1.57 1.213 3.669 1.213 5.935s-.447 4.365-1.213 5.934c-.738 1.511-1.934 2.816-3.537 2.816s-2.799-1.305-3.537-2.816c-.766-1.569-1.213-3.668-1.213-5.934s.447-4.366 1.213-5.935"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.38 2.658C13.833 1.881 16.319 1.25 18 1.25a.75.75 0 0 1 0 1.5c-.667 0-1.474.56-2.158 1.928C15.181 6.002 14.75 7.882 14.75 10s.43 3.998 1.092 5.321c.684 1.368 1.49 1.929 2.158 1.929a.75.75 0 0 1 0 1.5c-1.682 0-4.167-.631-6.62-1.408-2.482-.787-5.032-1.758-6.887-2.5C2.506 14.05 1.25 12.119 1.25 10s1.256-4.05 3.243-4.843c1.855-.741 4.405-1.712 6.887-2.499"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.168 13.758a1 1 0 0 1 .87 1.115 4.93 4.93 0 0 0 2.501 4.931l1.943 1.07a1 1 0 1 1-.964 1.752l-1.943-1.07a6.93 6.93 0 0 1-3.522-6.929 1 1 0 0 1 1.115-.87"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Marketing;
