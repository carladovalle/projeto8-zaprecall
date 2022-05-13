import Init from "./Init";
import Content from "./Content";

export default function App () {

    const [tela, setTela] = React.useState('init');

    return (
        <>
            {
                tela === 'init' ? <Init setTela={setTela}/> : <Content />
            }
        </>

    );
}