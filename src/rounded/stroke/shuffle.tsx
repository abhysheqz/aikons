import React from "react";
const Shuffle: React.FC<
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
        d="m19.558 4 .897.976c.401.436.602.654.531.839S20.632 6 20.065 6c-1.27 0-2.788-.205-3.954.473-.72.42-1.223 1.152-2.072 2.527M3 18h1.58c1.929 0 2.893 0 3.706-.473.721-.42 1.223-1.152 2.072-2.527M19.558 20l.897-.976c.401-.436.602-.654.531-.839S20.632 18 20.065 18c-1.27 0-2.788.205-3.954-.473-.813-.474-1.348-1.346-2.418-3.09l-2.99-4.875C9.635 7.82 9.1 6.947 8.287 6.473S6.51 6 4.581 6H3"
      />
    </svg>
  );
};
export default Shuffle;
