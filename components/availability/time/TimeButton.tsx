import type { DetailedHTMLProps, HTMLAttributes } from "react"

import { useProvider } from "@/context/AvailabilityContext"
import { formatLocalTime } from "@/lib/availability/helpers"
import type { DateTimeInterval } from "@/lib/types"
import KeyboardButton from "@/components/KeyboardButton";

type TimeProps = {
  time: DateTimeInterval
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Time({ time: { start, end }, ...props }: TimeProps) {
  const {
    state: { timeZone },
    dispatch,
  } = useProvider()
  return (
      <KeyboardButton
          label={`${formatLocalTime(start, { timeZone })}`}
          onClick={() => {
            dispatch({
              type: "SET_SELECTED_TIME",
              payload: { start, end },
            })
          }}
          buttonSize="sm"
          {...props}
      />
  )
}
