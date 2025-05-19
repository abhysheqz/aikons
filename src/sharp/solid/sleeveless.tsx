import React from "react";
const Sleeveless: React.FC<
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
        d="m9.42 1.379.052.038c.665.513 1.547.833 2.528.833.986 0 1.874-.324 2.54-.842l.04-.03a.75.75 0 0 1 .698-.074l2.972 1.188V3c0 2.37.59 3.711 1.11 4.44.263.367.518.592.693.72a2 2 0 0 0 .235.148l.462.184V22.75H3.25V8.492l.462-.184.038-.02c.04-.022.11-.063.197-.127.175-.129.43-.354.693-.722C5.16 6.711 5.75 5.37 5.75 3v-.508l2.971-1.188a.75.75 0 0 1 .7.075m1.105 4.101c-.312-.535-.56-1.259-.685-2.143A5.8 5.8 0 0 0 12 3.75c.765 0 1.497-.147 2.159-.413-.126.884-.373 1.608-.686 2.143-.46.788-1.001 1.085-1.474 1.085-.472 0-1.013-.297-1.474-1.085"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sleeveless;
