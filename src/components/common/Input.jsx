import cc from "classcat";

export default function Input({ label, ...props }) {
  return (
    <div className="form-control w-full">
      <label className="text-primary text-xs mb-1 px-1 font-medium">
        {label}
      </label>
      <input
        {...props}
        className={cc([
          "input input-primary input-bordered w-full",
          props.className,
        ])}
      />
    </div>
  );
}
