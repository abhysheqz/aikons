import React from "react";
const SearchFocus: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 17 4 4M19 11a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.492 7.5c-.716.043-1.172.163-1.5.491-.33.329-.449.785-.492 1.501M12.508 7.5c.716.043 1.172.163 1.5.491.33.329.449.785.492 1.501m-.008 3.13c-.049.651-.173 1.076-.483 1.387-.329.328-.785.448-1.501.491m-3.016 0c-.716-.043-1.172-.163-1.5-.491-.311-.311-.435-.736-.484-1.388"
      />
    </svg>
  );
};
export default SearchFocus;
