import './App.css';

function HppForm(props) {
    return (
        <div style={{ background: 'red' }}>
            <h2>
                form
            </h2>
            <p>
                children:
            </p>
            {props.children}
        </div>
    );
}

export default HppForm;
