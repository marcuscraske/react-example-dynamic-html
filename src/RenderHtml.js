import parse, { domToReact } from 'html-react-parser';

import './App.css';

import HppForm from "./HppForm";
import HppFormRow from "./HppFormRow";
import HppFormField from "./HppFormField";
import HppCardholderName from "./HppCardholderName";

const componentRegistry = {
    hppform: ({attribs, children, options}) => <HppForm {...attribs}>{domToReact(children, options)}</HppForm>,
    hppformrow: ({attribs, children, options}) => <HppFormRow {...attribs}>{domToReact(children, options)}</HppFormRow>,
    hppformfield: ({attribs, children, options}) => <HppFormField {...attribs}>{domToReact(children, options)}</HppFormField>,
    hppcardholdername: ({attribs, children, options}) => <HppCardholderName {...attribs}>{domToReact(children, options)}</HppCardholderName>,
};

const options = {
    replace: ({name, attribs, children}) => {
        let component = componentRegistry[name];
        if (component != null) {
            return component({
                attribs: attribs,
                children: children,
                options: options
            });
        }
    }
};

function RenderHtml(props) {
    const html = props.children;
    const react = parse(html, options);
    return react;
}

export default RenderHtml;
