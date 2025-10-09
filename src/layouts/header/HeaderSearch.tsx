import { Fragment } from "react";

const HeaderSearch = ({ open, close }) => {
  return (
    <Fragment>
      <div
        id="header-main-search"
        className={`header-main-search ${open ? "popup-visible" : ""}`}
      >
        <div className="close-search primary_btn" onClick={() => close()}>
          <i className="far fa-times" />
        </div>
        <div className="popup-inner">
          <div className="overlay-layer" onClick={() => close()} />
          <div className="search-form">
            <form
              onSubmit={(e) => e.preventDefault()}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <fieldset>
                  <input
                    type="search"
                    className="form-control"
                    name="search-input"
                    defaultValue=""
                    placeholder="Type & Enter"
                    required=""
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
