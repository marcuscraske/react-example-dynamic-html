import './App.css';

function HppCardholderName(props) {
    return (
        <div style={{ background: "purple", display: "flex" }}>
            <input
                type="text"
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    fontSize: "1.2rem"
                }}
                value={props.name}
            />
        </div>
    );
}

export default HppCardholderName;
