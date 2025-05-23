import React from "react";
const Rocket_02: React.FC<
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
        d="M11.13 1.579c.225-.187.506-.329.87-.329s.645.142.87.329c.176.146.372.379.524.558.98 1.16 1.69 2.587 1.69 4.276v1.301c0 .585.007.795.048.932v.002c.016.049.087.15.322.324.458.29 1.296.824 1.296 1.888 0 .478-.099.989-.46 1.375-.371.398-.878.515-1.354.515H9.064c-.476 0-.983-.117-1.354-.515-.361-.386-.46-.897-.46-1.375 0-1.064.838-1.597 1.296-1.888.236-.174.306-.275.321-.324v-.002c.042-.137.05-.347.05-.932v-1.3c0-1.69.708-3.118 1.69-4.277.15-.18.347-.412.524-.558"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.794 15.897c.362-1.487 1.67-2.647 3.32-2.647.54 0 .977.425.977.95s-.438.95-.977.95c-.752 0-1.466.65-1.466 1.583v.95H4.67c-.75 0-1.465.65-1.465 1.584 0 .933.714 1.583 1.465 1.583.54 0 .978.425.978.95s-.438.95-.978.95c-1.947 0-3.42-1.618-3.42-3.483 0-1.573 1.047-2.97 2.544-3.37M15.909 14.2c0-.525.438-.95.977-.95 1.65 0 2.958 1.16 3.32 2.647 1.497.4 2.544 1.797 2.544 3.37 0 1.865-1.473 3.483-3.42 3.483a.964.964 0 0 1-.978-.95c0-.525.438-.95.977-.95.752 0 1.467-.65 1.467-1.583s-.715-1.584-1.466-1.584a.964.964 0 0 1-.978-.95c0-.933-.715-1.583-1.466-1.583a.964.964 0 0 1-.977-.95m-5.863 0c.54 0 .977.425.977.95v4.75c0 .525-.438.95-.977.95-.54 0-.978-.425-.978-.95v-4.75c0-.525.438-.95.978-.95m3.909 0c.54 0 .977.425.977.95v1.9c0 .525-.438.95-.978.95a.964.964 0 0 1-.977-.95v-1.9c0-.525.438-.95.977-.95"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rocket_02;
