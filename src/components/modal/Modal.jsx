import Button from '../button/Button';
import './modal.css';

const Modal = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const btnClicked = () => {
    props.onClick();
  };

  return (
    <div className="contrast__modal">
      <form className="contrast__modal-form" onSubmit={submitHandler}>
        <div className="contrast__modal-header">
          <h1>Submit Resource </h1>
          <button onClick={btnClicked}>&#10006;</button>
        </div>
        <div className="contrast__modal-form_input">
          <label htmlFor="title">Resource Name</label>
          <input type="text" required id="title" placeholder="UI8" />
        </div>

        <div className="contrast__modal-form_input">
          <label htmlFor="description">Resource Description</label>
          <textarea
            required
            id="description"
            rows="3"
            placeholder="100% curated digital marketplace with a growing library of high quality UX/UI design resources and freebies for designers."
          ></textarea>
        </div>

        <div className="contrast__modal-form_input">
          <label htmlFor="link">Resource Link</label>
          <input type="url" required id="link" placeholder="https://ui8.net" />
        </div>

        <div className="contrast__modal-form_input">
          <label htmlFor="icon-link">Resource Icon Link</label>
          <input
            type="url"
            required
            id="icon-link"
            placeholder="https://scontent.faly2-2.fna.fbcdn.net/v/t1.6435-9/4642.......... "
          />
        </div>

        <div className="contrast__modal-form_input">
          <label htmlFor="category">Resource Category</label>
          <select className="contrast__modal-select">
            <option value="1" className="contrast__modal-select_option">
              Sort by
            </option>
            <option value="2" className="contrast__modal-select_option">
              Fonts
            </option>
            <option value="3" className="contrast__modal-select_option">
              Mockups
            </option>
            <option value="4" className="contrast__modal-select_option">
              Illustrations
            </option>
            <option value="5" className="contrast__modal-select_option">
              Icons
            </option>
          </select>
        </div>

        <div>
          <Button btnText="Submit Resource" />
        </div>
      </form>
    </div>
  );
};

export default Modal;
