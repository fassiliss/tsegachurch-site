// src/layouts/header/HeaderSearch.tsx
import { Fragment } from "react";

type Props = {
  open: boolean;
  close: () => void;
};

const HeaderSearch = ({ open, close }: Props) => {
  return (
    <Fragment>
      <div
        id="header-main-search"
        className={`header-main-search ${open ? "popup-visible" : ""}`}
      >
        <button className="close-search primary_btn" onClick={close}>
          <i className="far fa-times" />
        </button>

        <div className="popup-inner">
          <div className="overlay-layer" onClick={close} />
          <div className="search-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <fieldset>
                  <input
                    type="search"
                    className="form-control"
                    name="search-input"
                    placeholder="Type & Enter"
                    required
                  />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderSearch;

