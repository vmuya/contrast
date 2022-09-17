import './backdrop.css';

const Backdrop = (props) => {
  return <div className="contrast__backdrop" onClick={props.onClick} />;
};

export default Backdrop;
