import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import './accordian.css';

export default function ContactAccordian() {
    return (
        <Accordion>
            <AccordionItem header="Who are we?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
            <AccordionItem header="How to contact us?">
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae, accumsan auctor mi.
            </AccordionItem>
            <AccordionItem header="Where are we based?">
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
            </AccordionItem>
        </Accordion>
    );
}