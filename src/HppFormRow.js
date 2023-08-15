import './App.css';

function HppFormRow(props) {
    return (
        <div style={{ background: 'green', display: 'flex', flexDirection: 'row', margin: '0.5rem', padding: '1rem' }}>
            {props.children}
        </div>
    );
}

export default HppFormRow;
