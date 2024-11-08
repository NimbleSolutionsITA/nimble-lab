import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next"
import Template from "@/components/Template"
import AvailabilityPicker from "@/components/availability/AvailabilityPicker"
import { withProvider } from "@/context/AvailabilityContext"
import useAvailabilityPicker from "@/hooks/useAvailabilityPicker";
import getAvailabilityPickerServerProps from "@/hooks/getAvailabilityPickerServerProps";
import {useState} from "react";
import LogoFullWhite from "@/components/logo/Logo-full-white";
import KeyboardButton from "@/components/KeyboardButton";

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>

function Page(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const slots = useAvailabilityPicker(props)
  const [openCalendar, setOpenCalendar] = useState(false)
  return openCalendar ? (
    <div className="max-w-2xl sm:mx-auto mx-4 pb-24">
      <Template />
      <AvailabilityPicker slots={slots} />
    </div>
  ) : (
    <div className="text-center flex flex-col items-center justify-center p-8 max-w-4xl mx-auto h-screen">
      <LogoFullWhite width="100%" style={{maxWidth: "500px"}}/>
      <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl mt-10">
          Soluzioni Digitali Innovative per il tuo business
      </h1>
      <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
          In Nimble Lab, progettiamo e sviluppiamo soluzioni e-commerce e siti web su misura, pensate per
          semplificare
          il tuo percorso digitale.
          La nostra attenzione ai dettagli garantisce un&apos;esperienza senza preoccupazioni, dove tutto è curato
          per te.
      </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <KeyboardButton label="SCOPRI DI PIÙ" onClick={() => setOpenCalendar(true)} />
        </div>
    </div>
  )
}

export async function getServerSideProps({query}: GetServerSidePropsContext) {
    const availabilityPickerServerProps = await getAvailabilityPickerServerProps(query)
    return {
        props: {
            ...availabilityPickerServerProps
        },
    }
}

export default withProvider(Page)
