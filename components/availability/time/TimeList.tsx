import Time from "./TimeButton"
import type { DateTimeInterval } from "@/lib/types"

type TimeListProps = {
  availability: DateTimeInterval[]
}
export default function TimeList({ availability }: TimeListProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
      {availability?.map((slot) => (
        <Time
          key={slot.start.toISOString() + slot.end.toISOString()}
          time={slot}
          style={{
            fontSize: "16px",
            lineHeight: "18px",
            textAlign: "center"
          }}
        />
      ))}
    </div>
  )
}
