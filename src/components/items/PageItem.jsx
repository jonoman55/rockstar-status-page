import TabGroup from "../other/TabGroup";

// TODO : Figure out how to pass in the correct card based on tab value
// TODO : Implement this in the pages that need it
export const PageItem = (props) => (
    <>
        <TabGroup />
        {props.children}
    </>
);