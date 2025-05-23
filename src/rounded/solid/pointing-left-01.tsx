import React from "react";
const PointingLeft_01: React.FC<
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
        d="M3.75 10.25a2.5 2.5 0 0 0 0 5h4.998c.063 1.864.638 4.57 2.685 6.603.942.936 2.32.992 3.46.821 1.177-.176 2.343-.627 3.12-.999.213-.12 1.107-.6 1.31-.702.433-.217.777-.33 1.059-.33.265 0 .536 0 .74-.018.219-.018.459-.06.695-.185.311-.165.566-.42.73-.731.125-.236.168-.476.186-.695.017-.204.017-.448.017-.713v-5.584c0-.308 0-.592-.023-.827-.026-.257-.127-.72-.389-.982-.227-.27-.56-.42-.832-.525a19 19 0 0 0-1.14-.378c-.308-.11-.698-.345-1.49-.944l-4.33-3.277a2.53 2.53 0 0 0-3.1-.007 2.4 2.4 0 0 0-.337 3.503l1.015.97zM8.254 5.506a1 1 0 1 0 0-2h-2.5v-.594c0-.176 0-.391-.022-.568v-.003c-.016-.127-.088-.703-.653-.977-.567-.275-1.067.027-1.176.092l-.468.34c-.376.294-.89.7-1.281 1.08a4.4 4.4 0 0 0-.556.638c-.14.205-.344.556-.344.986s.203.781.344.986c.16.231.36.449.556.638.39.38.905.786 1.28 1.081l.47.34c.108.065.608.367 1.175.092.565-.275.637-.85.653-.977v-.004c.022-.176.022-.392.022-.567v-.583z"
      />
    </svg>
  );
};
export default PointingLeft_01;
