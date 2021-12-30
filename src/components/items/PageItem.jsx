import TabGroup from '../other/TabGroup';

const PageItem = (props) => (
    <>
        <TabGroup />
        {props.children}
    </>
);

export default PageItem;