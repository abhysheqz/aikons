import React from "react";
const BodyPartMuscle: React.FC<
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
        d="M11.41 2.084 14.975 3l5.587 9.32c1.399 2.68 1.748 3.85 1.177 5.284-.57 1.433-4.233 2.642-4.233 2.642-2.465.813-4.793 1.142-7.317.153C8.096 22.562 4.04 22.533 2 20.314v-7.38c1.763-1.776 4.928-2.14 7.265-1.092-.802.43-1.562 1.06-2.242 1.922l1.179.929c.793-1.007 1.679-1.58 2.561-1.865 1.875-.603 3.736.104 4.673.74-.45-.489-.67-1.226-.75-1.934L14.35 8.96 12.5 6.5l-1.637.238c-.975.162-3.051-.131-3.267-1.372-.102-.583.277-.995 1.034-1.818q.142-.157.28-.312c.693-.783 1.315-1.483 2.5-1.152"
      />
    </svg>
  );
};
export default BodyPartMuscle;
