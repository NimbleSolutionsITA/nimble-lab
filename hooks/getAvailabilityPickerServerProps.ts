import {z} from "zod";
import {ALLOWED_DURATIONS, DEFAULT_DURATION} from "@/config";
import Day from "@/lib/day";
import getBusyTimes from "@/lib/availability/getBusyTimes";
import {getDateRangeInterval, mapDatesToStrings} from "@/lib/availability/helpers";
import {ParsedUrlQuery} from "node:querystring";

const getAvailabilityPickerServerProps = async (query: ParsedUrlQuery) => {
	const schema = z.object({
		duration: z
			.enum([...(ALLOWED_DURATIONS.map(String) as [string, ...string[]])])
			.optional()
			.default(String(DEFAULT_DURATION))
			.transform(Number),
		timeZone: z.string().optional(),
		selectedDate: z
			.string()
			.regex(/^\d{4}-\d{2}-\d{2}$/u)
			.optional(),
	})

	const { duration, timeZone, selectedDate } = schema.parse(query)

	// Offer two weeks of availability.
	const start = Day.todayWithOffset(0)
	const end = Day.todayWithOffset(14)

	const busy = await getBusyTimes(
		getDateRangeInterval({
			start,
			end,
			timeZone,
		})
	)

	return {
		start: start.toString(),
		end: end.toString(),
		busy: mapDatesToStrings(busy),
		duration,
		...(timeZone && { timeZone }),
		...(selectedDate && { selectedDate }),
	}
}

export default getAvailabilityPickerServerProps