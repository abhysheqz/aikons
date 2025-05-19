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
        d="M8.688 21.43a6.93 6.93 0 0 1-3.522-6.929l1.985.246a4.93 4.93 0 0 0 2.501 4.931l1.944 1.07-.965 1.752z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.38 2.908C13.833 2.131 16.319 1.5 18 1.5c1.603 0 2.799 1.305 3.537 2.815.766 1.57 1.213 3.669 1.213 5.935s-.447 4.366-1.213 5.935C20.799 17.695 19.603 19 18 19c-1.682 0-4.167-.631-6.62-1.408-2.482-.787-5.032-1.758-6.887-2.5C2.506 14.3 1.25 12.369 1.25 10.25s1.256-4.049 3.243-4.843c1.855-.74 4.405-1.712 6.887-2.499m4.781 2.277c-.609 1.246-1.013 3.035-1.013 5.065s.404 3.819 1.013 5.065c.637 1.304 1.342 1.74 1.837 1.74.496 0 1.2-.436 1.838-1.74.609-1.246 1.012-3.035 1.012-5.065s-.403-3.819-1.012-5.065c-.637-1.304-1.342-1.74-1.838-1.74-.495 0-1.2.436-1.837 1.74"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Marketing;
