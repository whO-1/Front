import EventCard from "@/components/cards/EventCard";
import { Modal } from "./modal";
import HideScrollbar from "@/components/HideScrollbar";


export default function EventModal() {
    return (
        <>
            <Modal>
                <HideScrollbar>
                    <EventCard />
                </HideScrollbar>
            </Modal>
        </>
    );
}