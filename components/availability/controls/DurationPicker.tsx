import clsx from "clsx"

import { ALLOWED_DURATIONS } from "@/config"
import { useProvider } from "@/context/AvailabilityContext"

export default function DurationPicker() {
  const {
    state: { duration },
    dispatch,
  } = useProvider()

  return (
    <div>
      <label
        htmlFor="duration"
        className="block text-sm font-medium leading-0 text-gray-900">
        Duration
      </label>
      <div className="isolate inline-flex rounded-md shadow-sm mt-1">
        {ALLOWED_DURATIONS.map((theDuration, i) => (
          <button
            key={theDuration}
            onClick={() => {
              dispatch({
                type: "SET_DURATION",
                payload: theDuration,
              })
            }}
            type="button"
            className={clsx(
              "relative inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10 outline-accent-600",
              {
                "rounded-l-md": i === 0,
                "rounded-r-md": i === ALLOWED_DURATIONS.length - 1,
                "-ml-px": i > 0,
                "bg-gray-800 text-white ring-gray-900 hover:bg-black":
                  theDuration !== duration,
                "bg-accent-500 text-white ring-accent-600 shadow-inner shadow-accent-900":
                  theDuration === duration,
              }
            )}>
            {theDuration}
          </button>
        ))}
      </div>
    </div>
  )
}
