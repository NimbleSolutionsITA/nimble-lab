import type {InferGetServerSidePropsType} from "next";
import {getServerSideProps} from "@/pages";
import {useProvider} from "@/context/AvailabilityContext";
import Day from "@/lib/day";
import getPotentialTimes from "@/lib/availability/getPotentialTimes";
import {OWNER_AVAILABILITY} from "@/config";
import getAvailability from "@/lib/availability/getAvailability";
import {mapStringsToDates} from "@/lib/availability/helpers";
import {useEffect} from "react";
import localeDayString from "@/lib/locale";

const useAvailabilityPicker = ({
	                               start,
	                               end,
	                               busy,
                               }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const {
		state: { duration, selectedDate },
		dispatch,
	} = useProvider()

	const startDay = Day.dayFromString(start)
	const endDay = Day.dayFromString(end)

	const potential = getPotentialTimes({
		start: startDay,
		end: endDay,
		duration,
		availabilitySlots: OWNER_AVAILABILITY,
	})

	const offers = getAvailability({
		busy: mapStringsToDates(busy),
		potential,
	})

	const slots = offers.filter((slot) => {
		return (
			slot.start >= startDay.toInterval("Etc/GMT").start &&
			slot.end <= endDay.toInterval("Etc/GMT").end
		)
	})

	// If we got this far and there's no selectedDate, set it to the first date
	// with some availability.
	useEffect(() => {
		if (!selectedDate && slots.length > 0) {
			const date: Date = slots[0].start;
			const dateString: string = localeDayString(date)

			dispatch({
				type: "SET_SELECTED_DATE",
				payload: Day.dayFromString(dateString), //payload from date respecting timezone
			})
		}
		// Run once, on initial render.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return slots
}

export default useAvailabilityPicker