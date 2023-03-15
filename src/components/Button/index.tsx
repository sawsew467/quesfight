import './style.scss';
function index(props: {text: string}) {
    return <>
        <button className="button uppercase">{props.text}</button>
    </>;
}

export default index;
